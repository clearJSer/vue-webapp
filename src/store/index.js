//一个项目就一个store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isOpenMenu: "first",
    start:false
  },
  mutations: {
   	vuexOpenMenu(state){
   		state.isOpenMenu = true
   	},
   	vuexCloseMenu(state){
   		state.isOpenMenu = false
   	}
    ,
    start(state){
      state.start = true
    },
    stop(state){
      state.start = false
    }

  }
})

export default store