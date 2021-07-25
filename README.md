Authenticate Replit users in your projects without ReplAuth. This uses the actual Replit
Login API to authenticate `connect.sid` tokens and return whether a user would login.

If you have developer permissions you can recieve the value of the `connect.sid` token
from the login. To recieve developer permissions (unlikely) contact me.

_Note: You will need some frontend component that allows you to use the hCaptcha widget
to get hCaptcha tokens. If you are just testing then you can use
[this website](https://captcha.roblockhead.repl.co/). The tokens expire in 2 minutes._
