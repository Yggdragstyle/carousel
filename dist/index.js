(function () {
  'use strict';

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

  var Carousel = /*#__PURE__*/function () {
    // P R O P E R T I E S
    // C O N S T R U C T O R
    function Carousel($container) {
      _classCallCheck(this, Carousel);

      _defineProperty(this, "$container", void 0);

      this.$container = $container;
    } // M U T T A T O R S
    // M E T H O D S


    _createClass(Carousel, [{
      key: "Enable",
      value: function Enable() {
        this.$container.dataset.carouselEnable = true;
      }
    }, {
      key: "Disable",
      value: function Disable() {}
    }, {
      key: "Play",
      value: function Play() {}
    }, {
      key: "Pause",
      value: function Pause() {}
    }, {
      key: "Stop",
      value: function Stop() {}
    }, {
      key: "Prev",
      value: function Prev() {}
    }, {
      key: "Next",
      value: function Next() {}
    }]);

    return Carousel;
  }();

  var _console = console,
      log = _console.log;
  log('Hello World !', name);
  new Carousel(document.querySelector('#first_carousel')).Enable(); // export Carousel

}());
