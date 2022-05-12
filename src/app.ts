import 'dayjs/locale/ru';
import getPagesCount from "./handlers/get-pages-count";
import getDataFromAdv from "./handlers/get-data-from-adv";
import PuppeteerHandler from "./helpers/puppeteer";
import { arrayFromLenght } from "./helpers/common";
import { taskQueue } from './helpers/async-queue';
import { ADVERTS_FOR_PARSING, ADVERTS_ON_PAGE } from './consts/consts';

export const p = new PuppeteerHandler();

const PAGES = Math.ceil(ADVERTS_FOR_PARSING / ADVERTS_ON_PAGE);

(async function main() {
	try {
		//console.log('Начинаю работу с данными. Получаю количество страниц...');
		//const pagesCount: number = await getPagesCount(p, SITE);
		//console.log(`Количество страниц - ${pagesCount}\n`);
		console.log('Получаю данные из объявлений...');
		arrayFromLenght(PAGES).forEach((page) => {
			taskQueue.push(
				() => getDataFromAdv(p, page),
				err => {
					if (err) {
						throw new Error('Ошибка получения данных на странице №' + page);
					}
					console.log('Завершено получение данных со страницы №' + page);
				}
			)
		});
	}
	catch (err) {
		console.log(err);
	}
})()