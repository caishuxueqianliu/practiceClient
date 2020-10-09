<template>
  <div class="home">

<b>ws=============:{{dt}}</b><br>
<b>get=============:{{dt1}}</b><br>
<b>post============:{{dt2}}><br>
<b>getusers============:{{dt3}}</b><br>

<b>postusers============:{{dt4}}</b><br>
  </div>

</template>


<script>
// @ is an alias to /src
import {reqGet,reqPost,reqGetUsers,reqPostUsers} from '../api'

export default {
  name: 'Home',
  data(){
  return{
     dt:'',
     dtt:{username:'liuhao',password:'liuhao'},
     dt1:'',
     dt2:'',
     dt3:'',
     dt4:''
  }
  },
  components: {
   
  },
   created(){
 
    },
   mounted(){

 

   // this.getReq();
  // this.postReq();
  this.getReqUsers();
    this.postReqUsers(); 
 this.wsDate();
    },
    methods:{
    getReq(){
       reqGet().then((res)=>{
           this.dt1=res.data.msg;
          // console.log(res.data.msg)
       })

    },
    getReqUsers(){
       reqGetUsers().then((res)=>{
           this.dt3=res.data.data.username;
          // console.log(res.data.msg)
       })

    },
    postReqUsers(){
       reqPostUsers(this.dtt).then((res)=>{
           this.dt4=res.data.data.username;
          // console.log(res.data.msg)
       })

    },
    async postReq(){
      const data= await reqPost();
      console.log(data)
      //this.dt2=data.data.msg.values.a

    },
    wsDate(){
 const ws = new WebSocket("ws://127.0.0.1:3000/websocket/tt");
   // console.log('ws连接状态：' + ws.readyState);
    //监听是否连接成功
    ws.onopen = function () {
      console.log('ws连接状态：' + ws.readyState);
        //连接成功则发送一个数据
      // ws.send('test1');
    }
    //接听服务器发回的信息并处理展示
    ws.onmessage = (data)=> {
     //   console.log('接收到来自服务器的消息：');
      console.log(data.data);
        this.dt=data.data;
        //完成通信后关闭WebSocket连接
       // ws.close();
    }
    //监听连接关闭事件
    ws.onclose = function () {
        //监听整个过程中websocket的状态
        console.log('ws连接状态：' + ws.readyState);
    }
    //监听并处理error事件
    ws.onerror = function (error) {
        console.log(error);
    }
    }
    },
    watch:{
       },
    computed:{
    }
}
</script>
