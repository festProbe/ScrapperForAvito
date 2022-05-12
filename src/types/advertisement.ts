export interface Advert {
	id: string;
	title: string;
	description: string;
	url: string;
	price: number;
	author?: string;
	date: string; // ISO-8601
	phone?: string;
}