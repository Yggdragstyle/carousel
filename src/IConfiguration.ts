export type TAutoplay = number | boolean
export type TSelector = 'active' | 'slide' | 'enable' | 'hidden'

export interface ISelector {
  type: 'classname' | 'dataset' | 'attr'
  value: string
}

export interface ISelectors {
  active?: ISelector
  slide?: ISelector
  enable?: ISelector
  hidden?: ISelector
}

export interface ISetups {
  autoplay?: TAutoplay
  loop?: boolean
  id?: string
  // [Symbol.iterator]?: Iterator<string>
}

export interface IControls {
  next?: HTMLElement
  prev?: HTMLElement
  dot?: HTMLElement
  player?: HTMLElement
}

export interface IConfiguration {
  selectors?: ISelectors
  setups?: ISetups
  controls?: IControls
}
