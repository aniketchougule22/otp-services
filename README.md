# generate-otp
### An OTP generator package for node js.

Written in ES5/ES6 for maximum compatibility.

## Install

npm install otp-services

## Usage

### To generate OTP

var otp-services = require("otp-services");

var otp = otp-services.setNumber(4);  // any digit 4, 6, 8,...

console.log('otp', otp);

### To verify OTP

var otp-services = require("otp-services");

pass the dateTime and number if minutes
var time = otp-services.verifyOTP('', 5);

if (time == true) {
    console.log(`Verify successfully..!`);
} else {
    console.log(`OTP expired..!`);
}

## License

MIT

```