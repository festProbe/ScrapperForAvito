import cherio from "cheerio";
import PuppeteerHandler from "../helpers/puppeteer";

export default async function getPagesCount(p: PuppeteerHandler, url: string) {
	const mainContent = await p.getPageContent(url);
	const mainElements = cherio.load(mainContent);
	const pages = Number(mainElements('[data-marker=pagination-button/next]').prev().text());
	return pages;
}