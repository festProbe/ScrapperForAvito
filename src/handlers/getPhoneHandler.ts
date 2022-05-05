import cherio from "cheerio";
import dayjs from "dayjs";
import S from 'string';
import PuppeteerHandler from "../helpers/puppeteer";
import { SITE } from "../consts/consts";
import { transformPeriod, transformPhone, transformPrice } from "../helpers/common";
import { Advert } from "../types/advertisement";
import { saveData } from "./saveData";

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

async function getPhone(p: PuppeteerHandler, data: Advert[]) {
	for (const advert of data) {
		let phone: string;
		if (advert.author === '') {
			phone = '';
		} else {
			const content = await p.getPhone(advert.url);
			if (content) {
				const $ = cherio.load(content);
				phone = $('[data-marker="phone-popup/phone-number"]').text();
				phone = transformPhone(phone);
			}
		}
		await saveData(advert);
	}
}