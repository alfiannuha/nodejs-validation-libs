# Validation Library for NodeJS or Frontend Development

This is a simple library that validate input or data with manually validation. It is written in TypeScript. It can be used in NodeJS or in FrontEnd project.
This library is still in development, so there are still many validation that have not been implemented yet.

This library is must be used with TypeScript, but you can use it in JavaScript too.

This library can be used in multiple languages, but it is specifically designed for JavaScript or TypeScript.

This library is covered by MIT License.

## List of Validation

- [x] RequiredValidation
- [x] MinLengthValidation
- [x] MaxLengthValidation
- [x] MinValueValidation
- [x] MaxValueValidation
- [x] MinDateValidation
- [x] MaxDateValidation
- [x] MinTimeValidation
- [x] MaxTimeValidation
- [x] MinDateTimeValidation
- [x] MaxDateTimeValidation
- [x] MinDateTimeNowValidation
- [x] MaxDateTimeNowValidation
- [x] MinTimeNowValidation
- [x] MaxTimeNowValidation
- [x] MinDateNowValidation
- [x] MaxDateNowValidation
- [x] GmailValidation
- [x] EmailValidation
- [x] PhoneValidation
- [x] NumberValidation
- [x] DateValidation
- [x] TimeValidation
- [x] DateTimeValidation
- [x] AlphaNumericValidation
- [x] AlphaValidation
- [x] NumericValidation
- [x] UrlValidation



## Usage

### Install

You can install the library using npm, and then use it in your NodeJS or frontend project.

```
npm install @alfiannuha/validation-libs
```

### JavaScript

```javascript
const { GmailValidation } = require('@alfiannuha/validation-libs');

console.log(GmailValidation('example@gmail.com')); // true
console.log(GmailValidation('example@yahoo.com')); // false | The email in not gmail
```

## License

MIT