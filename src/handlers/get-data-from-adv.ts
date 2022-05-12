import cherio from "cheerio";
import dayjs from "dayjs";
import S from 'string';
import PuppeteerHandler from "../helpers/puppeteer";
import { ADVERTS_FOR_PARSING, SITE } from "../consts/consts";
import { transformPeriod, transformToOnlyNumbers, transformPrice } from "../helpers/common";
import { Advert } from "../types/advertisement";
import { saveData } from "./save-data";
import { taskQueue } from "../helpers/async-queue";

export default async function getDataFromAdv(p: PuppeteerHandler, page: number) {
	console.log(`Получаю данные со страницы ${page}`);
	const URL = `${SITE}${page}`
	const pageContent = await p.getPageContent(URL);
	const $ = cherio.load(pageContent);
	const advertisements: Advert[] = [];

	$('[class*=iva-item-content-]').each((i, header) => {
		const prefixURL = 'https://m.avito.ru';
		const title = S($(header).find('a[class*=iva-item-title]').text()).humanize().s;
		const description = S($(header).find('[class*=iva-item-description-]').text()).humanize().s;
		const url = $(header).find('[class*=link-link-]').attr('href');
		const price = $(header).find('span[class*=price-text-]').text();
		const date = $(header).find('[class*=date-text-]').text().split(' ');
		const subNumber = Number(date[0]);
		const period = transformPeriod(date[1])
		const author = $(header).find('[class*=style-title-]').text();

		advertisements.push({
			id: '',
			title,
			description,
			url: prefixURL + url,
			price: transformPrice(price),
			date: dayjs().subtract(subNumber, period).format('YYYY-MM-DD'),
			author,
		})
	});

	await getPhone(p, advertisements);
}

const task = async (advert: Advert, p: PuppeteerHandler) => {
	const { url } = advert;
	let phone = '';
	let advId = '';
	const content = await p.getPhone(url);
	if (content) {
		const $ = cherio.load(content);
		phone = $('[data-marker="phone-popup/phone-number"]').text();
		phone = transformToOnlyNumbers(phone);
		advId = $('[data-marker="item-stats/timestamp"]').text();
		advId = transformToOnlyNumbers(advId);
	}
	advert.phone = phone;
	advert.id = advId;
	await saveData(advert);
}


function getPhone(p: PuppeteerHandler, data: Advert[]) {
	data = data.slice(0, ADVERTS_FOR_PARSING);
	data.forEach((advert) => {
		taskQueue.push(
			() => task(advert, p),
			err => {
				if (err) {
					console.log(err);
					throw new Error(`Ошибка получения данных из объявления ${advert.url}`)
				}
			}
		)
	});
}