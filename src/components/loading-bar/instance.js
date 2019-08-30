import LoadingBar from "./loading-bar.vue";
import Vue from 'vue';
Vue.prototype.$mount()
const createInstance = (props) => {
  const _props = props || {}
  const Instance = new Vue({
    data:_props,
    render(h){
      return h(LoadingBar)
    }
  });
 // const _Instance = Instance.$mount(); //调用$mount()会返回当前实例即_Instance == Instance 为true
  Instance.$mount();
  const el = Instance.$el; //这里取_Instance的$el还是取Instance的$el都一样，总之要先$mount()挂载一下
  document.body.append(el);
  const _LoadingBar = Instance.$children[0];
  return {
    update(options){
      if ('percent' in options) {
        _LoadingBar.percent = options.percent;
      }
      if (options.status) {
        _LoadingBar.status = options.status;
      }
      if ('show' in options) {
        _LoadingBar.show = options.show;
      }
    },
    destroy(){
      document.body.removeChild(document.getElementsByClassName('mine-loading-bar')[0]);
    }
  }
};
export default createInstance
