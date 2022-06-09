import { lightfetch } from 'lightfetch-node';

const url = 'https://replit.com';

const test = async (token) => {
	let options = {
		method: 'GET',
		headers: {
			Referrer: url,
			'X-Requested-With': 'XMLHttpRequest',
			Cookie: 'connect.sid=' + token,
		},
	};
	const res = await lightfetch(`${url}/~`, options);

	return res.status === 200;
};

const getCookie = async () => {
	let options = {
		method: 'GET',
		headers: {
			Referrer: url,
			'X-Requested-With': 'XMLHttpRequest',
		},
	};
	const res = await lightfetch(`${url}/~`, options);

	return res.cookies['connect.sid'].value;
};

const login = async (username, password, captcha) => {
	let options = {
		method: 'POST',
		headers: {
			Referrer: `${url}/login`,
			'X-Requested-With': 'XMLHttpRequest',
			'User-Agent': 'Mozilla/5.0',
			Cookie: 'connect.sid=' + (await getCookie()),
		},
		body: {
			username,
			password,
			hCaptchaResponse: captcha,
			hCaptchaSiteKey: '473079ba-e99f-4e25-a635-e9b661c7dd3e',
			teacher: false,
		},
	};
	const res = await lightfetch(`${url}/login`, options);
	const info = await res.json();

	return {
		...info,
		token: res.status === 200 ? res.cookies['connect.sid'].value : null,
	};
};

export { login, test };
