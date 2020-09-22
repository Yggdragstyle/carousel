import { Carousel } from '../Carousel'

export function elmtHasCarousel($element: HTMLElement): boolean {
  const arr = Carousel.instances.filter((instance) => instance instanceof Carousel && instance.$container === $element)
  return 0 < arr.length
}

export function isHTMLElement($element: HTMLElement): boolean {
  return !!$element && $element instanceof HTMLElement
}

export function isNotHTMLElement($element: HTMLElement): boolean {
  return false === isHTMLElement($element)
}

export function isNumber(num: number): boolean {
  return !!num && 'number' === typeof this.active_index
}
