import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { faPencil} from '@fortawesome/free-solid-svg-icons'
import { faRubleSign} from '@fortawesome/free-solid-svg-icons'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBell)
library.add(faMagnifyingGlass)
library.add(faChevronLeft)
library.add(faBars)
library.add(faChevronDown)
library.add(faChevronUp)
library.add(faPlus)
library.add(faPencil)
library.add(faRubleSign)
Vue.component('font-awesome-icon', FontAwesomeIcon)
app.component('Datepicker', Datepicker);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
