import puppeteer from 'puppeteer';
import { proxyRequest } from 'puppeteer-proxy';
import { LaunchPuppeteerOpts, PagePuppeteerOpts } from '../types/puppeteer';

export const LAUNCH_PUPPETEER_OPTS: LaunchPuppeteerOpts = {
	//headless: false,  // Для демонстрации происходящего в браузере
	ignoreHTTPSErrors: true,
	args: [
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-dev-shm-usage',
		'--disable-accelerated-2d-canvas',
		'--disable-gpu',
		'--window-size=390,844'
	]
};

export const PAGE_PUPPETEER_OPTS: PagePuppeteerOpts = {
	networkIdle2Timeout: 7000,
	waitUntil: 'networkidle2',
	timeout: 3000000
};

const advertisementsWithError: string[] = [];

export default class PuppeteerHandler {
	browser: puppeteer.Browser;

	constructor() {
		this.browser = null;
	};

	async initBrowser() {
		this.browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
	};

	closeBrowser() {
		this.browser.close();
	};

	async getPageContent(url: string) {
		if (!this.browser) {
			await this.initBrowser();
		};
		try {
			const page = await this.browser.newPage();

			/*await page.setRequestInterception(true); 	// Попытка работы с прокси, но к сожалению с бесплатными не получается.
																		// Прокси нужен для того, чтобы избежать блокировки по id (защита hCaptcha)
			page.on('request', async (request) => {
				await proxyRequest({
					page,
					proxyUrl: 'http://212.46.230.102:6969',
					request,
				});
			});*/

			await page.goto(url, PAGE_PUPPETEER_OPTS);
			const content = await page.content();
			return content;
		}
		catch (err) {
			throw err;
		}
	};

	async getPhone(url: string) {
		try {
			const page = await this.browser.newPage();
			const m = puppeteer.devices['Galaxy S9+'];
			await page.emulate(m);
			await page.goto(url, PAGE_PUPPETEER_OPTS);
			const showPhoneBtn = await page.evaluate(() => document.querySelector('[data-marker="item-contact-bar/call"]'));
			if (showPhoneBtn !== null) {
				await page.focus('[data-marker="item-contact-bar/call"]');
				await page.keyboard.type('\n');
				await page.waitForSelector('[data-marker="phone-popup/phone-number"]');
			}
			const content = await page.content();
			return content;
		}
		catch (err) {
			console.log(err);
			console.log('Ошибка получения данных из объявления: ' + url)
			advertisementsWithError.push(url);

		}
	};

}