const { login, test } = require('../dist/replit-login.cjs');

const { username, password, captcha } = process.env;

main().catch((error) => console.log(error));

async function main() {
	const { token, message } = await login(username, password, captcha);

	console.log('Login:', token ? token : message);
	console.log('Test:', await test(token));
}
