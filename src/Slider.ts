import { Slide } from './Slide'

export class Slider extends Array<Slide> {
  // P R O P E R T I E S

  // C O N S T R U C T O R
  constructor(...$items: HTMLElement[]) {
    const slides = $items.map(($item: HTMLElement) => new Slide($item))
    super(...slides)
  }

  // M U T T A T O R S
  get first() {
    return this[0]
  }

  get last() {
    return this[this.lastIndex]
  }

  get lastIndex() {
    return this.length - 1
  }
  // M E T H O D S
}
