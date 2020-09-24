import { ISelectors, ISelector, TSelector, ISetups, IControls, IConfiguration } from './IConfiguration'
import { CamelCase } from './utils/string'

const default_selectors = {
  active: { type: 'classname', value: 'active' },
  slide: { type: 'classname', value: 'carousel-slide' },
  enable: { type: 'dataset', value: 'carousel-enable' },
  hidden: { type: 'attr', value: 'hidden' },
} as ISelectors

const default_setups = {} as ISetups

const default_controls = {} as IControls

export class Configuration implements IConfiguration {
  selectors: ISelectors
  setups: ISetups
  controls: IControls

  constructor({ selectors = {}, setups = {}, controls = {} }: IConfiguration) {
    this.selectors = Object.assign(default_selectors, selectors)
    this.setups = Object.assign(default_setups, setups)
    this.controls = Object.assign(default_controls, controls)
  }

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

  // getSelectorValue($from: HTMLElement, selector: TSelector): string {
  //   const select: ISelector = this.selectors[selector]
  //   let value: string
  //   switch (select.type) {
  //     case 'classname':
  //       value = select.value
  //       break

  //     case 'dataset':
  //       value = $from.dataset[select.value]
  //       break
  //     case 'attr':
  //       value = $from.getAttribute(select.value)
  //       break

  //     default:
  //       throw new Error('Unknow selector type')
  //   }

  //   return value
  // }

  // querySelectorAll($from: HTMLElement | Document = document, selector: TSelectors): HTMLElement[] {
  //   return Array.from($from.querySelectorAll(this.getQuerySelector(selector)))
  // }
}
