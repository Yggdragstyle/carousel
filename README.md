@Yggdragstyle

# C A R O U S E L

Simple carousel (slider) Front-End.
Modular, light, styleless (without css, but if you need you can pickup the basic demo stylesheet)

Use a configurable data attribute or classname for driven your slider.
Or, use a basic JS/JSON configuration. (basically, use it for override)

## How to use

### Es module

_EcmaScript module_ was common using with **Webpack** or native **JS** import (into modern navigators)

```javascript
import { Carousel } from '@yggdragstyle/esmodule'
const $elmt = document.getElementById('carousel')
const myCarousel = new Carousel($elmt)
```

You can give a configuration to carousel :

```javascript
const configuration = {
  selectors: { active: { type: 'classname', value: 'visible' } },
  setups: { loop: true, autoplay: 5e3 },
}
const myCarousel = new Carousel($elmt, configuration)
```

Or simple use a data-attribute (for setups only) :

```html
<ul id="carousel" data-carousel-loop data-carousel-autoplay="5s">
  <li class="carousel-slide"></li>
</ul>
```

## Contributing

Use the .env for local demo server port, (whish is handle by local server and Cypress E2E tests)

Read the (TODO.md)[./TODO.md]
