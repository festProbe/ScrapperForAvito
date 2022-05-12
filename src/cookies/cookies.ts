import puppeteer from 'puppeteer';
import { CookiesType } from '../types/cookies';

export const cookies: puppeteer.Protocol.Network.CookieParam[] = [
	{
		"name": "isLegalPerson",
		"value": "0",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "adrcid",
		"value": "AlYWBTEh_6_hIuI5hCZnFxw",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_buzz_fpc",
		"value": "JTdCJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi53d3cuYXZpdG8ucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyRnJpJTJDJTIwMTIlMjBNYXklMjAyMDIzJTIwMDklM0E1NiUzQTEwJTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMiU3QiU1QyUyMnZhbHVlJTVDJTIyJTNBJTVDJTIyNjMyOWY5NDY3NmJiM2EyOWZjOTYxYTc5YmQ4OGQ5ZjglNUMlMjIlMkMlNUMlMjJmcGpzRm9ybWF0JTVDJTIyJTNBdHJ1ZSU3RCUyMiU3RA==",
		"domain": ".www.avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
		"sameSite": "Lax",
	},
	{
		"name": "ft",
		"value": "\"1W+oZuUZ30h2YsaC2IBzUiV4hfynfmSGcemXr0atm1x0akLKhHBqVV3+Ik3uf1I8OZxYvd/06Vu0ZEof7BBY/AfWFoGjPq28YzLqdeD/8bjJ++dOkDgsraf8fo255lqosK7Uhf4wI2iKd44xcE5E2aHJzXclqkYqzjulZwPQb3wOaBZwcBxFWSeGzEeGtS6g\"",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_gid",
		"value": "GA1.2.1012197565.1652278975",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_ga_9E363E7BES",
		"value": "GS1.1.1652349364.3.1.1652349367.57",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "uxs_uid",
		"value": "e9fe2970-d136-11ec-b507-ed787e70178b",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "abp",
		"value": "0",
		"domain": "www.avito.ru",
		"path": "/",
		"secure": false,
	},
	{
		"name": "adrdel",
		"value": "1",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "dfp_group",
		"value": "97",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "_ga",
		"value": "GA1.2.1934069887.1652278969",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "f",
		"value": "5.32e32548b6f3e978f3511a92784ad5d9d13696603adaf27cd13696603adaf27cd13696603adaf27cd13696603adaf27ca84b1e3348d3e306a84b1e3348d3e306a84b1e3348d3e306d13696603adaf27c0ca31d77128ba16584404b4befdbcb2e46b8ae4e81acb9fa1a2a574992f83a9246b8ae4e81acb9fad99271d186dc1cd0e992ad2cc54b8aa8fbcd99d4b9f4cbdabcc8809df8ce07f640e3fb81381f3591956cdff3d4067aa559b49948619279117b0d53c7afc06d0b2ebf3cb6fd35a0acba0ac8037e2b74f90df103df0c26013a7b0d53c7afc06d0bba0ac8037e2b74f92da10fb74cac1eab71e7cb57bbcb8e0f71e7cb57bbcb8e0f71e7cb57bbcb8e0f0df103df0c26013a037e1fbb3ea05095de87ad3b397f946b4c41e97fe93686adb7ce3c4a759419abc9d3e49d2015ecaa02c730c0109b9fbb1ef6e77b994771b7ecad4a27389d318fd21ab7cd585086e0e13647d531665c4b23e6c8448ebb3380e2415097439d404746b8ae4e81acb9fa786047a80c779d5146b8ae4e81acb9fa97860b1ec48200fe2da10fb74cac1eab2da10fb74cac1eabd1d953d27484fd81666d5156b5a01ea6",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_dc_gtm_UA-2546784-1",
		"value": "1",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_gcl_au",
		"value": "1.1.1595282235.1652278969",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_ym_d",
		"value": "1652278970",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_ym_isad",
		"value": "1",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_ym_uid",
		"value": "1652278970823486431",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "_ym_visorc",
		"value": "b",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "buyer_laas_location",
		"value": "653240",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "buyer_location_id",
		"value": "653240",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "cto_bundle",
		"value": "Mwku6V8zJTJCTm84ZjBqSlZGM2VlMFcwR1RScGN5a05CWm02SHRMcUJCbTBFclRFc0lmWDBHU2JyVDZ6YjRmUW5meWFPajFDSDhFcWtKZml3YjZIZjZrbGtSS2xOclMwYkY0cjVnY1czNWxnWW1SUGJuUlFDMCUyQlltUXdseUNxdXlmdUROM3U",
		"domain": ".avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "luri",
		"value": "sankt-peterburg",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "sessid",
		"value": "0da41c26afdeb0a2541845e3eabcd293.1652278981",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "showedStoryIds",
		"value": "143-136-133-111-135-124-129-134-132-131-128-125-121-122-120-116-115-112-104-99-94",
		"domain": "www.avito.ru",
		"path": "/",
		"secure": false,
		"httpOnly": false,
	},
	{
		"name": "sx",
		"value": "H4sIAAAAAAAC%2FwTAUQrCMAwG4Lv8zz7Mrfljepw1qSAiw5XiKL273wBJFldWowkTLXSPzVxlKUXdkAc6Ms74vmr6vB9N1ovL0a7DlWfrv3juveKGQL5T1rSJknP%2BAwAA%2F%2F%2FsZrMpWwAAAA%3D%3D",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "u",
		"value": "2taun2af.1gab9ci.1eapovnhrer00",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	},
	{
		"name": "v",
		"value": "1652349361",
		"domain": ".avito.ru",
		"path": "/",
		"secure": true,
		"httpOnly": true,
		"sameSite": "Lax",
	}
]