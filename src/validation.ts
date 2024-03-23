import * as idLang from './locales/id.json';
import * as enLang from './locales/en.json';

function getLocale(lang: string = "id"): any {
  if (lang === "en") return enLang;
  let locale = idLang;
  return locale;
}

export function RequiredValidation(value: any): boolean {
  return value !== undefined && value !== null && value !== '' && value !== 'undefined' && value !== 'null' && value !== 'NaN' && value !== '0' && value !== 0;
}

export function MinLengthValidation(value: string, minLength: number, lang: string = "id"): string {
  let message = '';
  if (value.length >= minLength) message = getLocale(lang).minLength;
  return message;
}

export function MaxLengthValidation(value: string, maxLength: number, lang: string = "id"): string {
  let message = '';
  if (value.length <= maxLength) {
    if(lang === "id") message =  `Maximal ${maxLength} karakter`
    else message = `Maximum length is ${maxLength} characters`
  }
  return message;
}

export function MinValueValidation(value: number, minValue: number, lang: string = "id"): string {
  let message = '';
  if (value < minValue) {
    if(lang === "id") message =  `Minimal nilai adalah ${minValue}`
    else message = `Minimum value is ${minValue}`
  }
  return message;
}

export function MaxValueValidation(value: number, maxValue: number, lang: string = "id"): string {
  let message = '';
  if (value > maxValue) {
    if(lang === "id") message =  `Maximal nilai adalah ${maxValue}`
    else message = `Maximum value is ${maxValue}`
  }
  return message;
}

export function EmailValidation(value: string, lang: string = "id"): string {
  let patterm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let message = '';
  if (!patterm.test(value)) message = getLocale(lang).email;
  return message;
}

export function GmailValidation(value: string, lang: string = "id"): string {
  let gmailPattern = /^[^\s@]+@gmail\.com$/;
  let message = '';
  if (!gmailPattern.test(value)) message =  getLocale(lang).gmail; 
  return message;
}

export function UsernameValidation(value: string, lang: string = "id"): string {
  let pattern = /^[a-zA-Z0-9]{5,}$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).username;
  return message;
}

export function PhoneValidation(value: string, lang: string = "id"): string {
  let pattern = /^\d{10}$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).phoneLength;
  return message;
}

export function PhoneValidation62(value: string, lang: string = "id"): string {
  let pattern = /^62\d{10}$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).phoneIndonesia62;
  return message;
}

export function PhoneValidation08(value: string, lang: string = "id"): string {
  let pattern = /^08\d{9}$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).phoneIndonesia08;
  return message;
}

export function DateValidation(value: string, lang: string = "id"): string {
  let pattern = /^\d{4}-\d{2}-\d{2}$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).date;
  return message;
}

export function TimeValidation(value: string, lang: string = "id"): string {
  let pattern = /^\d{2}:\d{2}$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).time;
  return message;
}

export function DateTimeValidation(value: string, lang: string = "id"): string {
  let pattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).dateTime;
  return message;
}

export function URLValidation(value: string, lang: string = "id"): string {
  let pattern = /^(http|https):\/\/[^ "]+$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).url;
  return message;
}
