import async from 'async';
import { Done, Task } from '../types/async-queue';
import { CONCURRENCY, SITE } from "../consts/consts";
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { p } from '../app';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const startTime = dayjs();

export const taskQueue = async.queue<Task, Done>(async (task: Task, done: Done) => {
	try {
		await task();
		console.log('Задача завершена, осталось ' + taskQueue.length() + ' задач\n')
		done();
	} catch (err) {
		throw err;
	}
}, CONCURRENCY);

taskQueue.drain(function () {
	const endTime = dayjs();
	const workDuration = dayjs.duration(endTime.diff(startTime)).locale('ru').humanize();
	console.log(`Все задачи завершены. Время выполнения - ${workDuration}`)
	p.closeBrowser();
	process.exit();
});