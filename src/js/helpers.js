import { refs } from './refs';

export function setLoader(elementName, method) {
  refs.loader[elementName].classList[method]('hidden');
}
