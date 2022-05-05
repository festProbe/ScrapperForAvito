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

export function transformPhone(price: string) {
	let transformedPrice;
	if (price === 'Цена не указана' || price === 'Бесплатно') {
		transformedPrice = 0;
	} else {
		const refExp = /\d/g;
		transformedPrice = price.match(refExp);
		transformedPrice === null ? 0 : transformedPrice.join('');
	}
	return transformedPrice;
}