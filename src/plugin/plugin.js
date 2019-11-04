import WaitA from './WaitA.vue'

let plugin = {}
plugin.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am Wait for A Ha'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      return arr
    }
  }
  Vue.component(WaitA.name, WaitA)
}
export default plugin
