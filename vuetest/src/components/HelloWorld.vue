<template>
  <div>
    <h1>{{this.$store.state.a.msg}}</h1>
    <h2>{{this.$store.state.b.title}}</h2>
    <button @click="change">change</button>
    <router-link to='/about'>go about</router-link>
    <div class="pro-box">
      <div class="pro"></div>
      </div> 
  </div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'
// import io from 'socket.io-client'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to',
    }
  },
  mounted(){

  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    pro: function(val){
      document.querySelector('.pro').style.width=val+'px'
    },
    new3: function(val){
      console.log(val)
    }
  },
  methods:{
    ...mapActions(
      ['setMsg',
      'setMsgAgin',
      'setTitle']
    ),
    change(){
      this.$socket.emit('new1', 'from client - new1');
      this.$socket.emit('new3', 'from client - new3');
      this.$store.dispatch('setMsg','worddd').then((res) => {
          this.$store.dispatch('setMsgAgin',res)
      }).catch(rej=>{
        console.log(rej)
      })
      this.$store.dispatch('setTitle','cheng').then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pro-box{
  height: 20px;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}
.pro{
  height: 100%;
  width: 0;
  background-color: cadetblue
}
</style>
