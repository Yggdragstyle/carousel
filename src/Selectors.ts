export type TSelect = {
  type: 'id' | 'classname' | 'data-attribute'
  name?: string
  // Assert ?
  // Error ?
}

export class Selectors {
  // Selector basic elements

  slide: TSelect = {
    type: 'data-attribute',
    name: 'carousel-slide',
  }

  // Selector config

  id: TSelect = {
    type: 'id',
  }

  autoplay: TSelect = {
    type: 'data-attribute',
    name: 'carousel-autoplay',
  }

  pauseover: TSelect = {
    type: 'data-attribute',
    name: 'carousel-pauseover',
  }

  loop: TSelect = {
    type: 'data-attribute',
    name: 'carousel-loop',
  }

  // Selectors controls

  dot: TSelect = {
    type: 'data-attribute',
    name: 'carousel-dot',
  }

  prev: TSelect = {
    type: 'data-attribute',
    name: 'carousel-prev',
  }

  next: TSelect = {
    type: 'data-attribute',
    name: 'carousel-next',
  }

  player: TSelect = {
    type: 'data-attribute',
    name: 'carousel-player',
  }

  // Selector graphic

  active: TSelect = {
    type: 'classname',
    name: 'active',
  }

  before: TSelect = {
    type: 'classname',
    name: 'carousel-item-before',
  }

  after: TSelect = {
    type: 'classname',
    name: 'carousel-item-after',
  }

  enabled: TSelect = {
    type: 'classname',
    name: 'carousel-enabled',
  }

  getQuerySelectorOf(prop: keyof Selectors): string {
    return prop
  }
}
