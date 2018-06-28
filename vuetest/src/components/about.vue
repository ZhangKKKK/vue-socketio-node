<template>
    <div id="about">
        <div v-for="item in list">{{item}}</div>
        <router-link to='/'>返回主页</router-link>
    </div>
</template>
<script>
export default {
    name:'about',
    data(){
        return{
            socket : this.$store.getters.socket,
            list:[]
        }
    },
    mounted(){
        console.log(this.socket)
        console.log(sessionStorage.getItem('socket'))
        // this.socket.emit('new3','i am about')
        // this.socket.on('new3',data=>{
        //     this.list.push(data)
        // })
    }
}
</script>

