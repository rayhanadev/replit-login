'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const lightfetchNode = require('lightfetch-node');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const headers = {
    Referrer: 'https://replit.com',
    'X-Requested-With': 'XMLHttpRequest',
};
function test(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield lightfetchNode.lightfetch('https://replit.com/~', {
            method: 'GET',
            headers: Object.assign(Object.assign({}, headers), { Cookie: 'connect.sid=' + token }),
        });
        return res.status === 200;
    });
}
function getCookie() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield lightfetchNode.lightfetch('https://replit.com/~', {
            method: 'GET',
            headers: Object.assign({}, headers),
        });
        return res.cookies['connect.sid'].value;
    });
}
function login(username, password, captcha) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield lightfetchNode.lightfetch('https://replit.com/login', {
            method: 'POST',
            headers: Object.assign(Object.assign({}, headers), { 'User-Agent': 'Mozilla/5.0', Cookie: 'connect.sid=' + (yield getCookie()) }),
            body: {
                username,
                password,
                hCaptchaResponse: captcha,
                hCaptchaSiteKey: '473079ba-e99f-4e25-a635-e9b661c7dd3e',
                teacher: false,
            },
        });
        const info = yield res.json();
        const data = Object.assign(Object.assign({}, info), { token: res.status === 200 ? res.cookies['connect.sid'].value : null });
        return data;
    });
}

exports.login = login;
exports.test = test;
