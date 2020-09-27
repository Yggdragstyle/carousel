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

/**
 * Test if is a number
 * @param num value to test
 * @returns is a number ?
 */
export function isNumber(num: any): boolean {
  return !!num && 'number' === typeof num
}

/**
 * Test if is not a number
 * @param num value to test
 * @returns is not a number ?
 */
export function isNotNumber(num: any): boolean {
  return false === isNumber(num)
}

/**
 * Extract string time to Millisecond
 *
 * @param val Time value (ex: 4000 = 4e3 = 4s)
 * @returns Time into number of millisecond
 */
export function getMillisecondOf(str: string): number {
  if (/e/.test(str)) {
    const buffer = str.split('e').map((v: string) => parseInt(v))
    return buffer[0] * Math.pow(10, buffer[1])
  }
  return parseInt(str.replace(/(s)/, '000'), 10)
}
