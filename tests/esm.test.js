import { login, test } from '../dist/replit-login.mjs';

const { username, password, captcha } = process.env;

const { token, message } = await login(username, password, captcha);

console.log('Login:', token ? token : message);
console.log('Test:', await test(token));
