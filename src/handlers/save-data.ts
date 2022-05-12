import { Advert } from "../types/advertisement";
import path from 'path';
import fs from 'fs';

export async function saveData(data: Advert) {
	const { id } = data;
	const fileName = `${id}.json`;
	const savePath = path.join(__dirname, '..', '..', 'data', fileName);

	return new Promise<void>((resolve, reject) => {
		fs.writeFile(savePath, JSON.stringify(data), err => {
			if (err) {
				return reject(err);
			}
			console.log(`Файл ${fileName} успешно сохранён.`);
			resolve();
		})
	})
}