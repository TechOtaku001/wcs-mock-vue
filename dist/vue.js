(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

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
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function observer(data) {
    console.info('data to be observed ', data); // data 中的数据如果不是对象类型则不需要劫持

    if (_typeof(data) != 'object' || data == null) {
      return data;
    } // 真正对 data 进行劫持的是在 Observer 类中进行


    return new Observer(data);
  } // Object.defineProperty 只能对对象的单个属性进行劫持
  // 所以需要遍历 data 属性

  var Observer = /*#__PURE__*/function () {
    function Observer(val) {
      _classCallCheck(this, Observer);

      this.walk(val);
    }

    _createClass(Observer, [{
      key: "walk",
      value: function walk(obj) {
        var keys = Object.keys(obj);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = obj[key];
          defineReactive(obj, key, value);
        }
      }
    }]);

    return Observer;
  }(); // 对对象中的属性进行劫持


  function defineReactive(obj, key, val) {
    // Object.defineProperty 只能对对象的单个属性进行劫持
    // 所以需要递归调用，进行深度劫持
    observer(val);
    Object.defineProperty(obj, key, {
      get: function get() {
        console.info('获取响应式数据' + val);
        return val;
      },
      set: function set(newVal) {
        if (newVal === val) {
          return;
        } // Object.defineProperty 无法对新增的对象类型数据进行劫持
        // 所以在赋值的时候也需要进行递归调用以深度劫持


        observer(newVal);
        val = newVal;
      }
    });
  }

  function initState(vm) {
    var opts = vm.$options;

    if (opts.props) ;

    if (opts.data) {
      initData(vm);
    }

    if (opts.watch) ;

    if (opts.computed) ;

    if (opts.methods) ;
  }

  function initData(vm) {
    console.info('初始化 data');
    var data = vm.$options.data; // 如果 data 是个函数，则在调用时要注意 this 的指向问题

    data = vm._data = typeof data === 'function' ? data.call(vm) : data; // 对数据进行劫持

    observer(data);
  }

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      console.info("options ==> ", options);
      var vm = this;
      vm.$options = options; // 初始化状态

      initState(vm);
    };
  }

  function Vue(options) {
    this._init(options);
  }

  initMixin(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
