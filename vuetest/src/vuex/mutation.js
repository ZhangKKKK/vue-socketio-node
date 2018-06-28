import * as types from './mutation-type'
export default {
    [types.MSG](state,msg){
        state.msg = msg;
    },
    [types.SET_MSG](state,msg){
        state.msg = msg;
    }
}