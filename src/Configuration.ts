import { ISelectors, ISelector, TSelector, ISetups, IControls, IConfiguration } from './IConfiguration'
import { CamelCase } from './utils/string'

const default_selectors = {
  active: { type: 'classname', value: 'active' },
  slide: { type: 'classname', value: 'carousel-slide' },
  enable: { type: 'dataset', value: 'carousel-enable' },
  hidden: { type: 'attr', value: 'hidden' },
} as ISelectors

const default_setups = {
  loop: false,
} as ISetups

const default_controls = {} as IControls

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
    this.setups = Object.assign(default_setups, setups, this.attributesConfiguration)
    this.controls = Object.assign(default_controls, controls)
  }

  /**
   * Get all driven attribute from HTML component
   */
  get attributesConfiguration(): ISetups {
    const obj: ISetups = {}

    // set attribute value only if it was defined
    if (this.$container.hasAttribute('data-carousel-loop')) obj.loop = true
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
