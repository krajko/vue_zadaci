import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(Vuelidate)

Vue.mixin({
  filters: {
    formatDate(str, outputFormat = "MMMM Do YYYY, h:mm:ss a") {
      return moment(str).format(outputFormat);
      // console.log(str);
    },

    diffForHumans(str) {
      return moment(str).fromNow();
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
