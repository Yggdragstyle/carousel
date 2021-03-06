function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Slide = /*#__PURE__*/function () {
  // P R O P E R T I E S
  // C O N S T R U C T O R
  function Slide($slide) {
    _classCallCheck(this, Slide);

    _defineProperty(this, "$slide", void 0);

    _defineProperty(this, "conf", void 0);

    this.$slide = $slide;
  } // M U T T A T O R S
  // M E T H O D S


  _createClass(Slide, [{
    key: "Reset",
    value: function Reset() {
      this.conf.toggleSelectorValue(this.$slide, 'hidden', false);
      this.conf.toggleSelectorValue(this.$slide, 'active', false);
    }
  }, {
    key: "Display",
    value: function Display() {
      this.conf.toggleSelectorValue(this.$slide, 'hidden', false);
      this.conf.toggleSelectorValue(this.$slide, 'active', true);
    }
  }, {
    key: "Hide",
    value: function Hide() {
      this.conf.toggleSelectorValue(this.$slide, 'hidden', true);
      this.conf.toggleSelectorValue(this.$slide, 'active', false);
    }
  }]);

  return Slide;
}();

var Slider = /*#__PURE__*/function (_Array) {
  _inherits(Slider, _Array);

  var _super = _createSuper(Slider);

  // P R O P E R T I E S
  // C O N S T R U C T O R
  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, $items = new Array(_len), _key = 0; _key < _len; _key++) {
      $items[_key] = arguments[_key];
    }

    var slides = $items.map(function ($item) {
      return new Slide($item);
    });
    _this = _super.call.apply(_super, [this].concat(_toConsumableArray(slides)));

    _defineProperty(_assertThisInitialized(_this), "_conf", void 0);

    return _this;
  } // M U T T A T O R S


  _createClass(Slider, [{
    key: "first",
    get: function get() {
      return this[0];
    }
  }, {
    key: "last",
    get: function get() {
      return this[this.lastIndex];
    }
  }, {
    key: "lastIndex",
    get: function get() {
      return this.length - 1;
    }
  }, {
    key: "conf",
    get: function get() {
      return this._conf;
    },
    set: function set(conf) {
      this.conf;
      this.forEach(function (slide) {
        return slide.conf = conf;
      });
    } // M E T H O D S

  }]);

  return Slider;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function elmtHasCarousel($element) {
  var arr = Carousel.instances.filter(function (instance) {
    return instance instanceof Carousel && instance.$container === $element;
  });
  return 0 < arr.length;
}
function isHTMLElement($element) {
  return !!$element && $element instanceof HTMLElement;
}
function isNotHTMLElement($element) {
  return false === isHTMLElement($element);
}
/**
 * Test if is a number
 * @param num value to test
 * @returns is a number ?
 */

function isNumber(num) {
  return !!num && 'number' === typeof num;
}
/**
 * Test if is not a number
 * @param num value to test
 * @returns is not a number ?
 */

function isNotNumber(num) {
  return false === isNumber(num);
}
/**
 * Extract string time to Millisecond
 *
 * @param val Time value (ex: 4000 = 4e3 = 4s)
 * @returns Time into number of millisecond
 */

function getMillisecondOf(str) {
  if (/e/.test(str)) {
    var buffer = str.split('e').map(function (v) {
      return parseInt(v);
    });
    return buffer[0] * Math.pow(10, buffer[1]);
  }

  return parseInt(str.replace(/(s)/, '000'), 10);
}

function Capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
} // export function PascalCase(str: string): string {
//   return str.toLowerCase().split('-').map(Capitalize).join('')
// }

function CamelCase(str) {
  return str.toLowerCase().split('-').map(function (word, index) {
    return 0 === index ? word : Capitalize(word);
  }).join('');
}

var default_selectors = {
  active: {
    type: 'classname',
    value: 'active'
  },
  slide: {
    type: 'classname',
    value: 'carousel-slide'
  },
  enable: {
    type: 'dataset',
    value: 'carousel-enable'
  },
  hidden: {
    type: 'attr',
    value: 'hidden'
  },
  after: {
    type: 'attr',
    value: 'carousel-slide-after'
  },
  before: {
    type: 'attr',
    value: 'carousel-slide-before'
  }
};
var default_setups = {
  loop: false,
  autoplay: false
};
var default_controls = {};
var default_autoplay = 5e3;
/**
 * Configuration of Carousel
 */

var Configuration = /*#__PURE__*/function () {
  /**
   *
   * @param configuration Object configuration for Carousel
   * @param $container HTML container of carousel - using for extract data attributes driven this carousel
   */
  function Configuration(_ref, $container) {
    var _ref$selectors = _ref.selectors,
        selectors = _ref$selectors === void 0 ? {} : _ref$selectors,
        _ref$setups = _ref.setups,
        setups = _ref$setups === void 0 ? {} : _ref$setups,
        _ref$controls = _ref.controls,
        controls = _ref$controls === void 0 ? {} : _ref$controls;

    _classCallCheck(this, Configuration);

    _defineProperty(this, "selectors", void 0);

    _defineProperty(this, "setups", void 0);

    _defineProperty(this, "controls", void 0);

    _defineProperty(this, "$container", void 0);

    this.$container = $container; // TODO: Check reason of "classname" value in all context for selector (that displayed into toString)

    this.selectors = Object.assign(default_selectors, selectors);
    this.Setups = [default_setups, setups, this.attributesConfiguration];
    this.controls = Object.assign(default_controls, controls);
  }

  _createClass(Configuration, [{
    key: "getQuerySelector",

    /**
     * Get a query from internal selector
     * @param selector Type of internal selector
     */
    value: function getQuerySelector(selector) {
      var select = this.selectors[selector];
      var query;

      switch (select.type) {
        case 'classname':
          query = ".".concat(select.value);
          break;

        case 'dataset':
          query = "[data-".concat(select.value, "]");
          break;

        case 'attr':
          query = "[".concat(select.value, "]");
          break;

        default:
          throw new Error('Unknow selector type');
      }

      return query;
    }
    /**
     * Get if element has internal attribute
     * @param $from HTML element to extract value
     * @param selector Type of internal selector
     */

  }, {
    key: "hasSelectorValue",
    value: function hasSelectorValue($from, selector) {
      var select = this.selectors[selector];
      var value;

      switch (select.type) {
        case 'classname':
          value = $from.classList.contains(select.value);
          break;

        case 'dataset':
          value = 'string' === typeof $from.dataset[CamelCase(select.value)];
          break;

        case 'attr':
          value = $from.hasAttribute(select.value);
          break;

        default:
          throw new Error('Unknow selector type');
      }

      return value;
    }
    /**
     *
     * @param $from HTML element to set new value
     * @param selector Type of internal selector
     * @param toggle If value must be set or remove
     */

  }, {
    key: "toggleSelectorValue",
    value: function toggleSelectorValue($from, selector, toggle) {
      var select = this.selectors[selector];

      switch (select.type) {
        case 'classname':
          $from.classList[toggle ? 'add' : 'remove'](select.value);
          break;

        case 'dataset':
          if (toggle) $from.dataset[CamelCase(select.value)] = 'true';else delete $from.dataset[CamelCase(select.value)];

        case 'attr':
          if (toggle) $from.setAttribute(select.value, 'true');else $from.removeAttribute(select.value);
          break;

        default:
          throw new Error('Unknow selector type');
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return "\n    \n\tSelectors:\n    \n\t\t".concat(Object.entries(this.selectors).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            prop = _ref3[1];

        return "".concat(key, " => type: ").concat(prop.type, " - value: ").concat(prop.value);
      }).join('\n\t\t'), "\n    \n\tSetups:\n    \n\t\t").concat(Object.entries(this.setups).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            prop = _ref5[1];

        return "".concat(key, ": ").concat(String(prop));
      }).join('\n\t\t'), "\n    ");
    }
  }, {
    key: "Setups",
    set: function set(values) {
      var obj = Object.assign.apply(Object, _toConsumableArray(values));

      for (var key in obj) {
        switch (key) {
          case 'autoplay':
            if (obj.autoplay === true) {
              // test if manual conf (crushed by data-attr config) has number
              if (isNumber(values[1].autoplay)) {
                // Prefere him to default value
                obj.autoplay = values[1].autoplay;
              } else {
                obj.autoplay = default_autoplay;
              }
            } else if (isNotNumber(obj.autoplay)) {
              obj.autoplay = false;
            }

            break;
        }
      }

      this.setups = obj;
    }
    /**
     * Get all driven attribute from HTML component
     */

  }, {
    key: "attributesConfiguration",
    get: function get() {
      var obj = {}; // set attribute value only if it was defined
      // loop

      if (this.$container.hasAttribute('data-carousel-loop')) obj.loop = true; // autoplay

      try {
        var autoplay = this.$container.dataset.carouselAutoplay;
        if ('' === autoplay || 'true' === autoplay) obj.autoplay = true;else if ('string' === typeof autoplay) obj.autoplay = getMillisecondOf(autoplay);
      } catch (err) {
        console.error('Impossible to define the autoplay value, please read the documentation or report an issue if necessary', err);
      } // return configuration override


      return obj;
    }
  }]);

  return Configuration;
}();

// Sugar test direction of sliding (is more explicite)
var isAfter = function isAfter(direction) {
  return direction;
};

var Carousel = /*#__PURE__*/function () {
  _createClass(Carousel, null, [{
    key: "instances",
    // S T A T I C S
    get: function get() {
      return Carousel._instances;
    } // P R O P E R T I E S

  }]);

  // C O N S T R U C T O R

  /**
   * @param $container HTML container of Carousel
   * @param conf Optional configuration object for setup the Carousel
   */
  function Carousel($container) {
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Carousel);

    _defineProperty(this, "isEnable", false);

    _defineProperty(this, "$container", void 0);

    _defineProperty(this, "slider", void 0);

    _defineProperty(this, "active_index", 0);

    _defineProperty(this, "conf", void 0);

    _defineProperty(this, "_events_fn", {
      play_interval: null
    });

    if (isNotHTMLElement($container)) throw new Error('Element container for Carousel must be a HTML Element');
    if (elmtHasCarousel($container)) throw new Error("Element: ".concat($container, " can've only one Carousel attached"));
    this.$container = $container;
    this.conf = new Configuration(conf, $container); // TODO: get default index

    var slides = Array.from(this.$container.querySelectorAll(this.conf.getQuerySelector('slide')));
    if (0 === slides.filter(isHTMLElement).length) throw new Error('Carousel must contain at least one slide');
    this.slider = _construct(Slider, _toConsumableArray(slides));
    this.slider.conf = this.conf; // Keep instance in static

    Carousel._instances.push(this);
  } // M U T T A T O R S


  _createClass(Carousel, [{
    key: "Actualize",

    /**
     * Actualize the slider by set active index
     */
    value: function Actualize() {
      this.activeIndex = this.active_index;
    } // M E T H O D S

    /**
     * Enable carousel
     */

  }, {
    key: "Enable",
    value: function Enable() {
      this.isEnable = true;
      this.conf.toggleSelectorValue(this.$container, 'enable', true);
      this.Actualize();
      this.Play();
    }
    /**
     * Disable carousel
     */

  }, {
    key: "Disable",
    value: function Disable() {
      this.isEnable = false;
      this.conf.toggleSelectorValue(this.$container, 'enable', false);
      this.slider.forEach(function (slide) {
        return slide.Reset();
      });
    }
    /**
     * Destroy instance and remove all modifications
     */

  }, {
    key: "Destroy",
    value: function Destroy() {
      this.Disable();
      var indexThis = Carousel.instances.indexOf(this);
      Carousel.instances.splice(indexThis, 1);
    }
    /**
     * Launch the slider player
     */

  }, {
    key: "Play",
    value: function Play() {
      var _this = this;

      if (isNotNumber(this.autoplay)) return;

      this._events_fn.play_interval = function () {
        _this.Next();
      };

      setInterval(this._events_fn.play_interval, this.autoplay);
    }
    /**
     * Pause the slide player
     */

  }, {
    key: "Pause",
    value: function Pause() {}
    /**
     * Stop the slider player
     */

  }, {
    key: "Stop",
    value: function Stop() {}
    /**
     * Get previous slide
     * @param offset Number of slide to skip
     */

  }, {
    key: "Prev",
    value: function Prev() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var index = this.activeIndex - offset; // TODO: Trigger UX action (js event, toggle class/attr ?)

      if (false === this.loop && index < 0) index = 0;
      this.Goto(index);
    }
    /**
     * Get next slide
     * @param offset Number of slide to skip
     */

  }, {
    key: "Next",
    value: function Next() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var index = this.activeIndex + offset; // TODO: Trigger UX action (js event, toggle class/attr ?)

      if (false === this.loop && index >= this.length) index = this.slider.lastIndex;
      this.Goto(index);
    }
    /**
     * Go to specific slide
     * @param index Index of slide can be negative or greater than max (offset was auto calculed)
     */

  }, {
    key: "Goto",
    value: function Goto(index) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (index >= this.length) index %= this.length;

      if (0 > index) {
        direction = false;
        index = this.length - Math.abs(index) % this.length;
        if (index === this.length) index = 0;
      }

      this.$active.classList.add(this.conf.selectors[isAfter(direction) ? 'before' : 'after'].value);
      this.slider[index].$slide.classList.add(this.conf.selectors[isAfter(direction) ? 'after' : 'before'].value);
      this.activeIndex = index;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "\n    Carousel: <".concat(this.$container.tagName.toLowerCase(), " id=\"").concat(this.$container.id, "\" class=\"").concat(this.$container.className, "\">\n    \nIs ").concat(this.isEnable ? 'enable' : 'disabled', "\n    \nThe current index is: ").concat(this.activeIndex, " / ").concat(this.slider.lastIndex, "\n    \nThe configuration was:\n    \n").concat(this.conf, "\n    ");
    }
  }, {
    key: "$active",
    get: function get() {
      return this.slider[this.activeIndex].$slide;
    }
    /**
     * get autoplay value from configuration
     */

  }, {
    key: "autoplay",
    get: function get() {
      return this.conf.setups.autoplay;
    }
    /**
     * get loop value from configuration
     */

  }, {
    key: "loop",
    get: function get() {
      return this.conf.setups.loop;
    }
    /**
     * get number of slide
     */

  }, {
    key: "length",
    get: function get() {
      return this.slider.length;
    }
    /**
     * Get active index of slider
     */

  }, {
    key: "activeIndex",
    get: function get() {
      return this.active_index;
    }
    /**
     * set the active index
     * (WARNING) you dont set negative or too much greater index
     * if you need auto calculate the index for slider, use Goto (that calcute negative offset, etc.)
     */
    ,
    set: function set(index) {
      if (0 > index || index >= this.length) throw new Error("Set active index must be between 0 and ".concat(this.length));

      if (this.isEnable) {
        // hide all slides
        this.slider.forEach(function (slide) {
          return slide.Hide();
        }); // and display current active

        this.slider[index].Display();
      }

      this.active_index = index; // Dispatch change event on Carousel

      var event = new CustomEvent('change', {
        detail: this
      });
      this.$container.dispatchEvent(event);
    }
  }]);

  return Carousel;
}();

_defineProperty(Carousel, "_instances", []);

export { Carousel };
