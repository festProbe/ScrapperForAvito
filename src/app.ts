import dayjs from 'dayjs';
import async from 'async';
import RelativeTime from "dayjs/plugin/relativeTime"
import getPagesCount from "./handlers/getPagesCount";
import getDataFromAdv from "./handlers/getPhoneHandler";
import PuppeteerHandler from "./helpers/puppeteer";
import { arrayFromLenght } from "./helpers/common";
import { concurrency, SITE } from "./consts/consts";
import { Done, Task } from './types/async-queue';

dayjs.extend(RelativeTime);

const startTime = dayjs();

const p = new PuppeteerHandler();

const taskQueue = async.queue<Task, Done>(async (task: Task, done: Done) => {
	try {
		await task();
		console.log('Задача завершена, осталось ' + taskQueue.length() + ' задач\n')
		done();
	} catch (err) {
		throw err;
	}
}, concurrency);

taskQueue.drain(function () {
	console.log(`Все задачи завершены. Время выполнения - ${startTime.toNow()}`)
	p.closeBrowser();
	process.exit();
});

(async function main() {
	try {
		console.log('Начинаю работу с данными. Получаю количество страниц...');
		const pagesCount: number = await getPagesCount(p, SITE);
		console.log(`Количество страниц - ${pagesCount}\n`);
		console.log('Получаю данные из объявлений...');
		arrayFromLenght(pagesCount).forEach((page) => {
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