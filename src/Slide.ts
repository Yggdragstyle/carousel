import { Configuration } from './Configuration'

export class Slide {
  // P R O P E R T I E S
  $slide: HTMLElement
  conf: Configuration

  // C O N S T R U C T O R
  constructor($slide: HTMLElement) {
    this.$slide = $slide
  }

  // M U T T A T O R S

  // M E T H O D S
  Reset() {
    this.conf.toggleSelectorValue(this.$slide, 'hidden', false)
    this.conf.toggleSelectorValue(this.$slide, 'active', false)
  }

  Display() {
    this.conf.toggleSelectorValue(this.$slide, 'hidden', false)
    this.conf.toggleSelectorValue(this.$slide, 'active', true)
  }

  Hide() {
    this.conf.toggleSelectorValue(this.$slide, 'hidden', true)
    this.conf.toggleSelectorValue(this.$slide, 'active', false)
  }
}
