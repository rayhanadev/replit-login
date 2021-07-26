Authenticate Replit users in your projects without ReplAuth. This uses the actual Replit
Login API to authenticate `connect.sid` tokens and return whether a user would login.

> There is no (and never will be) documentation for how to use this package. Very sorry
> but Replit's security comes before open source.

_Note: You will need some frontend component that allows you to use the hCaptcha widget
to get hCaptcha tokens. If you are just testing then you can use
[this website](https://captcha.roblockhead.repl.co/). The tokens expire in 2 minutes._
