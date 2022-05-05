import { PuppeteerLifeCycleEvent } from "puppeteer"

export type LaunchPuppeteerOpts = {
	headless?: boolean,
	ignoreHTTPSErrors: boolean,
	args: string[],
}

export type PagePuppeteerOpts = {
	networkIdle2Timeout: number,
	waitUntil: PuppeteerLifeCycleEvent,
	timeout: number,
}
