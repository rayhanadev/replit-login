import { login, test } from '../src/index.js';
import fs from 'node:fs';

const { username, password, captcha } = process.env;

const info = await login(username, password, captcha);

console.log('Login:', info.token ? info.token : info.message);
console.log('Test:', await test(info.token));
fs.writeFileSync('./tests/login-response.json', JSON.stringify(info, null, 2), {
	encoding: 'utf8',
});
