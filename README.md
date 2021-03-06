# Replit Login

_An unofficial way to authenticate your Replit users_

Authenticate Replit users in your projects without ReplAuth. This uses the actual Replit
Login API to authenticate `connect.sid` tokens and return whether a user would login.

## Install

```shell
$ npm install replit-login
$ yarn add replit-login
```

## Usage

```js
import { login, test } from 'replit-login';

const { username, password, captcha } = process.env;

const { token, message } = await login(username, password, captcha);

console.log('Login:', token ? token : message);
console.log('Test:', await test(token));
```

_Note: You will need some frontend component that allows you to use the hCaptcha widget
to get hCaptcha tokens. If you are just testing then you can use
[this website](https://replit-captcha.rayhanadev.repl.co/). The tokens expire in 2
minutes._

## Personal Note

In the spirit of open source software I made this codebase public since it only
abstracts API's that already exist without circumventing a captcha. Use it as a
tool and abide by the Replit Terms of Service (see below). Improper use of the package can
result in bans on Replit and possibly legal action.

## Legal

From https://replit.com/site/terms as pertains to the use of this package. This is not
the entire ToS, simply snippets that reference important parts that I thought was
relevant.

> **Section 5 (Prohibited Actions), Item 10**
>
> Interfere with or disrupt the Services or create an undue burden on Replit's Service
> or the networks or services connected to Replit's Service;

> **Section 5 (Prohibited Actions), Item 11**
>
> Use the Service to attack or tamper with other websites, services, and individuals;

> **Section 5 (Prohibited Actions), Item 13**
>
> Launch any automated system, including without limitation, “robots”, “spiders”, or
> “offline readers” that access the Service in a manner that sends more request
> messages to the Replit servers in a given period of time than a human can reasonably
> produce in the same period by using a conventional online web browser.
>
> ...
>
> You agree not to collect or harvest any personally identifiable information,
> including account names, from the Service, nor to use the communication systems
> provided by the Services for any commercial solicitation purposes. You agree not to
> solicit, for commercial purposes, any users of the Service with respect to their
> content.

> **Section 5 (Prohibited Actions), Item 22**
>
> Repeatedly fork or clone projects to run or host the same code creating undue load
> on the Service.
