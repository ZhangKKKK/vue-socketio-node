import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutation'
import actions from './actions'
Vue.use(Vuex)

var modulesA = {
    state,
    getters,
    mutations,
    actions
},
modulesB = {
    state:{
        title:'首页'
    },
    mutations:{
        setTitle(state,title){
            state.title = title;
        }
    },
    actions:{
        setTitle({commit},title){
            return new Promise(res=>{
                setTimeout(function(){
                    commit('setTitle',title)
                },2000)
                res('haha')
            })
            
        }
    }
}
const stroe = new Vuex.Store({
    modules:{
        a:modulesA,
        b:modulesB
    }
})
export default stroe