import * as idLang from './locales/id.json';
import * as enLang from './locales/en.json';

function getLocale(lang: string = "id"): any {
  if (lang === "en") return enLang;
  let locale = idLang;
  return locale;
}

export function AlphaValidation(value: string, lang: string = "id"): string {
  let pattern = /^[a-zA-Z]+$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).alpha;
  return message;
}

export function AlphaNumericValidation(value: string, lang: string = "id"): string {
  let pattern = /^[a-zA-Z0-9]+$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).alphaNumeric;
  return message;
}

export function NumericValidation(value: string, lang: string = "id"): string {
  let pattern = /^\d+$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).numeric;
  return message;
}

export function LettersAndSpaceValidation(value: string, lang: string = "id"): string {
  let pattern = /^[a-zA-Z\s]*$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).lettersAndSpace;
  return message;
}

export function DecimalValidation(value: string, lang: string = "id"): string {
  let pattern = /^\d+(\.\d+)?$/;
  let message = '';
  if (!pattern.test(value)) message =  getLocale(lang).decimal;
  return message;
}