# otp-services
### An OTP generator package for node js.

A highly customizable and easy to use OTP Generator and verifier in Javascript. Just import the package and send your inputs. It will generate the OTP.
Written in ES5/ES6 for maximum compatibility.

## Install

```javascript

npm install otp-services

```

## Usage

### To generate OTP
```javascript

let otp_services = require("otp-services");

let otp = otp_services.setNumber(4);  // any digit 4, 6, 8,...


Output: otp 2206

```

### To verify OTP

verifyOTP() sets the expiration time of OTP to your input minutes after the current time.
It takes two parameters, dateTime and number of minutes.

```javascript

let otp_services = require("otp-services");

let time = otp_services.verifyOTP('2023-02-22 15:52:34', 5);

if (time == true) {

    `Verify successfully..!`

} else {

    `OTP expired..!`

}

```

## License

MIT