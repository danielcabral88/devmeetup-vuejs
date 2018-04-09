import Vue from 'vue'
// import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertComp from './components/Shared/Alert.vue'
import EditMeetupDeatils from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCarousel,
  VCard,
  VTextField,
  VTimePicker,
  VDatePicker,
  VAlert,
  VProgressCircular,
  VDialog,
  VDivider
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCarousel,
    VCard,
    VTextField,
    VTimePicker,
    VDatePicker,
    VAlert,
    VProgressCircular,
    VDialog,
    VDivider
  }
})
// Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDeatils)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBV6ChtPTqMkcnOGRpIKclRQ9GsKYzauAs',
      authDomain: 'devmeetup-vue.firebaseapp.com',
      databaseURL: 'https://devmeetup-vue.firebaseio.com',
      projectId: 'devmeetup-vue',
      storageBucket: 'gs://devmeetup-vue.appspot.com',
      messagingSenderId: '611107708428'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
