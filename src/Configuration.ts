import { ISelectors, ISelector, TSelector, ISetups, IControls, IConfiguration } from './IConfiguration'
import { CamelCase } from './utils/string'
import { getMillisecondOf, isNotNumber, isNumber } from './utils'

const default_selectors = {
  active: { type: 'classname', value: 'active' },
  slide: { type: 'classname', value: 'carousel-slide' },
  enable: { type: 'dataset', value: 'carousel-enable' },
  hidden: { type: 'attr', value: 'hidden' },
} as ISelectors

const default_setups = {
  loop: false,
  autoplay: false,
} as ISetups

const default_controls = {} as IControls

const default_autoplay = 5e3

/**
 * Configuration of Carousel
 */
export class Configuration implements IConfiguration {
  selectors: ISelectors
  setups: ISetups
  controls: IControls
  $container: HTMLElement

  /**
   *
   * @param configuration Object configuration for Carousel
   * @param $container HTML container of carousel - using for extract data attributes driven this carousel
   */
  constructor({ selectors = {}, setups = {}, controls = {} }: IConfiguration, $container: HTMLElement) {
    this.$container = $container
    // TODO: Check reason of "classname" value in all context for selector (that displayed into toString)
    this.selectors = Object.assign(default_selectors, selectors)
    this.Setups = [default_setups, setups, this.attributesConfiguration]
    this.controls = Object.assign(default_controls, controls)
  }

  set Setups(values: [ISetups, ISetups, ISetups]) {
    const obj = Object.assign(...values)
    for (let key in obj) {
      switch (key as any) {
        case 'autoplay':
          if (obj.autoplay === true) {
            // test if manual conf (crushed by data-attr config) has number
            if (isNumber(values[1].autoplay)) {
              // Prefere him to default value
              obj.autoplay = values[1].autoplay
            } else {
              obj.autoplay = default_autoplay
            }
          } else if (isNotNumber(obj.autoplay)) {
            obj.autoplay = false
          }
          break
      }
    }
    this.setups = obj
  }

  /**
   * Get all driven attribute from HTML component
   */
  get attributesConfiguration(): ISetups {
    const obj: ISetups = {}

    // set attribute value only if it was defined
    // loop
    if (this.$container.hasAttribute('data-carousel-loop')) obj.loop = true

    // autoplay
    try {
      let autoplay = this.$container.dataset.carouselAutoplay
      if ('' === autoplay || 'true' === autoplay) obj.autoplay = true
      else if ('string' === typeof autoplay) obj.autoplay = getMillisecondOf(autoplay)
    } catch (err) {
      console.error(
        'Impossible to define the autoplay value, please read the documentation or report an issue if necessary',
        err
      )
    }

    // return configuration override
    return obj
  }

  /**
   * Get a query from internal selector
   * @param selector Type of internal selector
   */
  getQuerySelector(selector: TSelector): string {
    const select: ISelector = this.selectors[selector]
    let query
    switch (select.type) {
      case 'classname':
        query = `.${select.value}`
        break

      case 'dataset':
        query = `[data-${select.value}]`
        break

      case 'attr':
        query = `[${select.value}]`
        break

      default:
        throw new Error('Unknow selector type')
    }

    return query
  }

  /**
   * Get if element has internal attribute
   * @param $from HTML element to extract value
   * @param selector Type of internal selector
   */
  hasSelectorValue($from: HTMLElement, selector: TSelector): boolean {
    const select: ISelector = this.selectors[selector]
    let value: boolean
    switch (select.type) {
      case 'classname':
        value = $from.classList.contains(select.value)
        break

      case 'dataset':
        value = 'string' === typeof $from.dataset[CamelCase(select.value)]
        break
      case 'attr':
        value = $from.hasAttribute(select.value)
        break

      default:
        throw new Error('Unknow selector type')
    }

    return value
  }

  /**
   *
   * @param $from HTML element to set new value
   * @param selector Type of internal selector
   * @param toggle If value must be set or remove
   */
  toggleSelectorValue($from: HTMLElement, selector: TSelector, toggle: boolean) {
    const select: ISelector = this.selectors[selector]
    switch (select.type) {
      case 'classname':
        $from.classList[toggle ? 'add' : 'remove'](select.value)
        break

      case 'dataset':
        if (toggle) $from.dataset[CamelCase(select.value)] = 'true'
        else delete $from.dataset[CamelCase(select.value)]
      case 'attr':
        if (toggle) $from.setAttribute(select.value, 'true')
        else $from.removeAttribute(select.value)
        break

      default:
        throw new Error('Unknow selector type')
    }
  }

  toString(): string {
    return `
    \n\tSelectors:
    \n\t\t${Object.entries(this.selectors)
      .map(([key, prop]): string => `${key} => type: ${prop.type} - value: ${prop.value}`)
      .join('\n\t\t')}
    \n\tSetups:
    \n\t\t${Object.entries(this.setups)
      .map(([key, prop]) => `${key}: ${String(prop)}`)
      .join('\n\t\t')}
    `
  }
}
