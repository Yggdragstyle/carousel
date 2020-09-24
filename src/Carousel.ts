import { Slider } from './Slider'
import { isNotHTMLElement, elmtHasCarousel, isHTMLElement } from './utils'
import { Configuration } from './Configuration'
import { IConfiguration } from './IConfiguration'

export class Carousel {
  // S T A T I C S
  private static _instances: Carousel[] = []
  static get instances(): Carousel[] {
    return Carousel._instances
  }

  // P R O P E R T I E S
  isEnable: boolean = false
  $container: HTMLElement
  slider: Slider
  private active_index: number
  conf: Configuration

  // C O N S T R U C T O R
  /**
   * @param $container HTML container of Carousel
   * @param conf Optional configuration object for setup the Carousel
   */
  constructor($container: HTMLElement, conf: IConfiguration = {}) {
    if (isNotHTMLElement($container)) throw new Error('Element container for Carousel must be a HTML Element')
    if (elmtHasCarousel($container)) throw new Error(`Element: ${$container} can've only one Carousel attached`)
    this.$container = $container

    this.conf = new Configuration(conf)

    const slides: HTMLElement[] = Array.from(this.$container.querySelectorAll(this.conf.getQuerySelector('slide')))
    if (0 === slides.filter(isHTMLElement).length) throw new Error('Carousel must contain at least one slide')
    this.slider = new Slider(...slides)
    this.slider.conf = this.conf

    // Keep instance in static
    Carousel._instances.push(this)
  }

  // M U T T A T O R S
  get length(): number {
    return this.slider.length
  }

  get activeIndex(): number {
    return this.active_index
  }
  set activeIndex(index: number) {
    if (0 > index || index > this.length) throw new Error(`Set active index must be between 0 and ${this.length}`)

    if (this.isEnable) {
      // hide all slides
      this.slider.forEach((slide) => slide.Hide())
      // and display current active
      this.slider[index].Display()
    }

    this.active_index = index
  }

  // M E T H O D S
  Enable() {
    this.isEnable = true
    this.conf.toggleSelectorValue(this.$container, 'enable', true)
    this.activeIndex = 0
  }
  Disable() {
    this.isEnable = false
    this.conf.toggleSelectorValue(this.$container, 'enable', false)
    this.slider.forEach((slide) => slide.Reset())
  }

  Destroy() {
    this.Disable()
    const indexThis = Carousel.instances.indexOf(this)
    delete Carousel.instances[indexThis]
  }

  Play() {}
  Pause() {}
  Stop() {}

  Prev(offset: number = 1) {
    this.Goto(this.activeIndex - offset)
  }

  Next(offset: number = 1) {
    this.Goto(this.activeIndex + offset)
  }

  Goto(index: number) {
    if (index >= this.length) index %= this.length
    if (0 > index) {
      index = this.length - (Math.abs(index) % this.length)
      if (index === this.length) index = 0
    }
    this.activeIndex = index
  }
}
