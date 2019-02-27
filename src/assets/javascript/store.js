import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    currentCity : localStorage.city||'上海'
  },
  mutations: {
    getCity (state,city) {
      state.currentCity=city;
      localStorage.city=city;
    }
  }
})

export default store