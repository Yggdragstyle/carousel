export class Slide {
  // P R O P E R T I E S
  $slide: HTMLElement

  // C O N S T R U C T O R
  constructor($slide: HTMLElement) {
    this.$slide = $slide
  }

  // M U T T A T O R S

  // M E T H O D S
  Reset() {
    this.$slide.hidden = false
    this.$slide.classList.remove('active')
  }

  Display() {
    this.$slide.hidden = false
    this.$slide.classList.add('active')
  }

  Hide() {
    this.$slide.hidden = true
    this.$slide.classList.remove('active')
  }
}
