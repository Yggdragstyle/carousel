import { Slider } from './Slider'
import { isNotHTMLElement, elmtHasCarousel, isHTMLElement, isNotNumber } from './utils'
import { Configuration } from './Configuration'
import { IConfiguration } from './IConfiguration'
import { Slide } from './Slide'

interface IEvent_fn {
  play_interval: () => void | null
}

// Sugar test direction of sliding (is more explicite)
const isAfter = (direction: boolean): boolean => direction
const isBefore = (direction: boolean): boolean => !!direction

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
  private active_index: number = 0
  conf: Configuration

  // Internals functions stored for remove event listener
  private _events_fn: IEvent_fn = {
    play_interval: null,
  }

  // C O N S T R U C T O R
  /**
   * @param $container HTML container of Carousel
   * @param conf Optional configuration object for setup the Carousel
   */
  constructor($container: HTMLElement, conf: IConfiguration = {}) {
    if (isNotHTMLElement($container)) throw new Error('Element container for Carousel must be a HTML Element')
    if (elmtHasCarousel($container)) throw new Error(`Element: ${$container} can've only one Carousel attached`)
    this.$container = $container

    this.conf = new Configuration(conf, $container)
    // TODO: get default index

    const slides: HTMLElement[] = Array.from(this.$container.querySelectorAll(this.conf.getQuerySelector('slide')))
    if (0 === slides.filter(isHTMLElement).length) throw new Error('Carousel must contain at least one slide')
    this.slider = new Slider(...slides)
    this.slider.conf = this.conf

    // Keep instance in static
    Carousel._instances.push(this)
  }

  // M U T T A T O R S
  get $active(): HTMLElement {
    return this.slider[this.activeIndex].$slide
  }

  /**
   * get autoplay value from configuration
   */
  get autoplay(): number | boolean {
    return this.conf.setups.autoplay
  }
  /**
   * get loop value from configuration
   */
  get loop(): boolean {
    return this.conf.setups.loop
  }

  /**
   * get number of slide
   */
  get length(): number {
    return this.slider.length
  }

  /**
   * Get active index of slider
   */
  get activeIndex(): number {
    return this.active_index
  }

  /**
   * set the active index
   * (WARNING) you dont set negative or too much greater index
   * if you need auto calculate the index for slider, use Goto (that calcute negative offset, etc.)
   */
  set activeIndex(index: number) {
    if (0 > index || index >= this.length) throw new Error(`Set active index must be between 0 and ${this.length}`)

    if (this.isEnable) {
      // hide all slides
      this.slider.forEach((slide) => slide.Hide())
      // and display current active
      this.slider[index].Display()
    }

    this.active_index = index

    // Dispatch change event on Carousel
    var event = new CustomEvent('change', { detail: this })
    this.$container.dispatchEvent(event)
  }

  /**
   * Actualize the slider by set active index
   */
  Actualize() {
    this.activeIndex = this.active_index
  }

  // M E T H O D S
  /**
   * Enable carousel
   */
  Enable() {
    this.isEnable = true
    this.conf.toggleSelectorValue(this.$container, 'enable', true)
    this.Actualize()
    this.Play()
  }

  /**
   * Disable carousel
   */
  Disable() {
    this.isEnable = false
    this.conf.toggleSelectorValue(this.$container, 'enable', false)
    this.slider.forEach((slide) => slide.Reset())
  }

  /**
   * Destroy instance and remove all modifications
   */
  Destroy() {
    this.Disable()
    const indexThis = Carousel.instances.indexOf(this)
    Carousel.instances.splice(indexThis, 1)
  }

  /**
   * Launch the slider player
   */
  Play() {
    if (isNotNumber(this.autoplay)) return
    this._events_fn.play_interval = () => {
      this.Next()
    }
    setInterval(this._events_fn.play_interval, this.autoplay as number)
  }

  /**
   * Pause the slide player
   */
  Pause() {}

  /**
   * Stop the slider player
   */
  Stop() {}

  /**
   * Get previous slide
   * @param offset Number of slide to skip
   */
  Prev(offset: number = 1) {
    let index = this.activeIndex - offset
    // TODO: Trigger UX action (js event, toggle class/attr ?)
    if (false === this.loop && index < 0) index = 0
    this.Goto(index)
  }

  /**
   * Get next slide
   * @param offset Number of slide to skip
   */
  Next(offset: number = 1) {
    let index = this.activeIndex + offset
    // TODO: Trigger UX action (js event, toggle class/attr ?)
    if (false === this.loop && index >= this.length) index = this.slider.lastIndex
    this.Goto(index)
  }

  /**
   * Go to specific slide
   * @param index Index of slide can be negative or greater than max (offset was auto calculed)
   */
  Goto(index: number, direction = true) {
    if (index >= this.length) index %= this.length
    if (0 > index) {
      direction = false
      index = this.length - (Math.abs(index) % this.length)
      if (index === this.length) index = 0
    }

    // Set direction selector to slide (previous and current)
    this.$active.classList.add(this.conf.selectors[isAfter(direction) ? 'before' : 'after'].value)
    this.slider[index].$slide.classList.add(this.conf.selectors[isAfter(direction) ? 'after' : 'before'].value)

    this.activeIndex = index
  }

  toString(): string {
    return `
    Carousel: <${this.$container.tagName.toLowerCase()} id="${this.$container.id}" class="${this.$container.className}">
    \nIs ${this.isEnable ? 'enable' : 'disabled'}
    \nThe current index is: ${this.activeIndex} / ${this.slider.lastIndex}
    \nThe configuration was:
    \n${this.conf}
    `
  }
}
