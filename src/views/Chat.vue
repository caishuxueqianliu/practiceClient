<template>
  <div class="chat">



<div class="websocket">
    <div class="receive">
      <p>简单聊天</p>
      <div id="receive-box"  v-for="(item,i) in list" v-bind:key="i">{{item}}</div>
    </div>
    <div class="send">
      <textarea type="text" id="msg-need-send" v-model="data"></textarea>
      <p>
        <button id="send-btn" @click='send()'>点击消息</button>
      </p>
    </div>
  <!--   <button id="exit" @click='test()'>关闭连接</button> -->
  </div>



  </div>
</template>

<script>
  const ws = new WebSocket("ws://127.0.0.1:3000/websocket/test")
	export default {
  name: 'Chat',
  data(){
  return{
   // time:"",
  list:[],
   data:""
  }
  },
  components: {
   
  },
   created(){

    },
   mounted(){
// this.wsConnect(); 
    },
    methods:{
    wsConnect(){

// 创建一个webSocket对象

ws.onopen =()=> {
  // 连接后监听
  console.log('WebSocket 连接状态成功');
}

ws.onmessage=(data)=>{
  //console.log(data.data)
  // 当服务端返回数据的时候，放到页面里
// var xx=document.getElementById('receive-box');
// xx.innerHTML += `<p>${data.data}</p>`
//   xx.scrollTo({
//     top: xx.scrollHeight,
//     behavior: "smooth"
//   })

  this.list.push(data.data);
      
}

ws.onclose = data => {
  // 监听连接关闭
  console.log("WebSocket连接已关闭")
  console.log(data);
}

// sendBtn.onclick = () => {
//   // 点击发送按钮。将数据发送给服务端
//   ws.send()
// }
// exit.onclick = () => {
//   // 客户端主动关闭连接
//   ws.close()
// }




    },
    send(){
      ws.send(this.data);
    },
    test(){
      this.msg='123333'
    }
    
    },
    watch:{
       },
    computed:{
    }
}




</script>


<style type="text/css">
  #receive-box{
    height: 20px;
    width: 100px;
    display: flex;

    border: 1px solid black;
    margin: 5px;
  }
#msg-need-send{
  margin: 20px;
  width: 300px;
}

</style>