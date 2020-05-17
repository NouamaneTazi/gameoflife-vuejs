import Vue from 'vue';
import SemanticUI from 'semantic-ui-vue';
import App from './App.vue'
// import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false

Vue.use(SemanticUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
