import * as idLang from './locales/id.json';
import * as enLang from './locales/en.json';

function getLocale(lang: string = "id"): any {
  if (lang === "en") return enLang;
  let locale = idLang;
  return locale;
}

export function PasswordValidationAndMinLength(value: string, minLength: number, lang: string = "id"): string {
  // password must contain at least one letter, at least one number, and at least one special character
  let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;
  let message = '';
  if (!pattern.test(value)) {
    message =  getLocale(lang).passwordComplexity;
  }else if(value.length < minLength){
    if(lang === "id") message =  `Password minimal harus terdiri dari ${minLength} karakter`
    else message =  `Password must be at least ${minLength} characters long` 
  }
  return message;
}

export function PasswordComplexityValidation(value: string, lang: string = "id"): string {
  // password must contain at least one letter, at least one number, and at least one special character
  let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;
  let message = '';
  if (!pattern.test(value)) message = getLocale(lang).passwordComplexity;
  return message;
}

export function PasswordLowercaseValidation(value: string, lang: string = "id"): string {
  let pattern = /[a-z]/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).passwordLowercase;
  return message;
}

export function PasswordUppercaseValidation(value: string, lang: string = "id"): string {
  let pattern = /[A-Z]/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).passwordUppercase;
  return message;
}

export function PasswordLetterValidation(value: string, lang: string = "id"): string {
  let pattern = /[A-Za-z]/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).passwordLetter;
  return message;
}

export function PasswordNumberValidation(value: string, lang: string = "id"): string {
  let pattern = /\d/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).passwordNumber;
  return message;
}

export function PasswordSpecialCharacterValidation(value: string, lang: string = "id"): string {
  let pattern = /[@$!%*?&]/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).passwordSpecialCharacter;
  return message;
}

export function PasswordLetterAndNumberValidation(value: string, lang: string = "id"): string {
  let pattern = /(?=.*[A-Za-z])(?=.*\d)/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).passwordLetterAndNumber;
  return message;
}

export function PasswordLetterAndSpecialCharacterValidation(value: string, lang: string = "id"): string {
  let pattern = /(?=.*[A-Za-z])(?=.*[@$!%*?&])/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).passwordLetterAndSpecialCharacter;
  return message;
}

export function PasswordLengthValidation(value: string, min: number, lang: string = "id"): string {
  let message = '';
  if (value.length < min) {
    if(lang === "id") message =  `Password minimal harus terdiri ${min} karakter`
    else message =  `Password must be at least ${min} characters`
  }
  return message;
}

export function PasswordMatchValidation(password: string, confirmPassword: string, lang: string = "id"): string {
  let message = '';
  if (password !== confirmPassword) {
    message =  getLocale(lang).passwordMatch;
  }
  return message;
}