import { Slide } from './Slide'
import { Configuration } from './Configuration'

export class Slider extends Array<Slide> {
  // P R O P E R T I E S
  private _conf: Configuration

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

  get conf(): Configuration {
    return this._conf
  }
  set conf(conf: Configuration) {
    this.conf
    this.forEach((slide) => (slide.conf = conf))
  }
  // M E T H O D S
}
