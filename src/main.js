import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
Vue.use(less)

// less.render('.class { width: (1 + 1) }',
//     {
//       paths: ['.', './lib'],  // Specify search paths for @import directives
//       filename: 'style.less', // Specify a filename, for better error messages
//       compress: true          // Minify CSS output
//     },
//     function (e, output) {
//        console.log(output.css);
//     });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
