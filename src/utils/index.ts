import { Carousel } from '../Carousel'

export function elmtHasCarousel($element: HTMLElement): boolean {
  const arr = Carousel.instances.filter((instance) => instance instanceof Carousel && instance.$container === $element)
  return 0 < arr.length
}

export function isHTMLElement($element: any): boolean {
  return !!$element && $element instanceof HTMLElement
}

export function isNotHTMLElement($element: any): boolean {
  return false === isHTMLElement($element)
}

// export function isNumber(num: any): boolean {
//   return !!num && 'number' === typeof num
// }
