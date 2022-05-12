export function arrayFromLenght(number) {
	return Array.from(new Array(number).keys()).map(k => k + 1)
}

export function transformPeriod(period) {
	let periodForDayjs;
	if (period === 'дня' || period === 'день' || period === 'дней') {
		periodForDayjs = 'day';
	} else if (period === 'час' || period === 'часов' || period === 'часа') {
		periodForDayjs = 'hours';
	}
	return periodForDayjs;
}

export function transformPrice(price: string) {
	let transfotmedPrice;
	if (price === 'Цена не указана' || price === 'Бесплатно') {
		transfotmedPrice = 0;
	} else {
		const refExp = /\d/g;
		transfotmedPrice = Number(price.match(refExp).join(''));
	}
	return transfotmedPrice;
}

export function transformToOnlyNumbers(string: string) {
	let numbersFromString: string;
	const refExp = /\d/g;
	numbersFromString = string.match(refExp).join('');
	return numbersFromString;
}