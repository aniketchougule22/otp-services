# otp-services
### An OTP generator package for node js.

Written in ES5/ES6 for maximum compatibility.

## Install

npm install otp-services

## Usage

### To generate OTP

var otp_services = require("otp-services");

var otp = otp_services.setNumber(4);  // any digit 4, 6, 8,...

console.log('otp', otp);

Output: otp 2206

### To verify OTP

var otp_services = require("otp-services");

verifyOTP() takes two parameters, dateTime and number of minutes

var time = otp_services.verifyOTP('2023-02-22 15:52:34', 5);

if (time == true) {

    console.log(`Verify successfully..!`);

} else {

    console.log(`OTP expired..!`);

}

## License

MIT

```