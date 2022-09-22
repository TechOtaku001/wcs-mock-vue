export function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    console.info("options ==> ", options)
  }
}