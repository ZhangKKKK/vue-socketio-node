export default {
    setMsg({commit},obj){
        return new Promise((reslove,reject)=>{
            setTimeout(()=>{
            commit('MSG',obj)
            return reslove('chenggong')
        },1000)
        })
    },
    setMsgAgin({commit},msg){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                commit('SET_MSG',msg)
                return res('chenggong')
            },1000)
        })
    }
}