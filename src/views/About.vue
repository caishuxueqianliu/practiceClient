<template>
  <div class="about">
    <h1>This is an about page</h1>


<div class="websocket">
    <div class="receive">
      <p>服务端返回的消息</p>
      <div id="receive-box"></div>
    </div>
    <div class="send">
      <textarea type="text" id="msg-need-send"></textarea>
      <p>
        <button id="send-btn">点击发消息给服务端</button>
      </p>
    </div>
    <button id="exit">关闭连接</button>
  </div>



  </div>
</template>

<script>
	export default {
  name: 'About',
  data(){
  return{
  
  }
  },
  components: {
   
  },
   created(){

    },
   mounted(){
this.wsConnect();  
    },
    methods:{
    wsConnect(){

//const msgBox = document.getElementById("msg-need-send")
const sendBtn = document.getElementById("send-btn")
const exit = document.getElementById("exit")
//const receiveBox = document.getElementById("receive-box")

// 创建一个webSocket对象
//const ws = new WebSocket("ws://127.0.0.1:3000/websocket/test")
const ws = new WebSocket("ws://81.68.175.159:8081/achieve-sd-slave/g2/websocket?serverId=1")
//ws://81.68.175.159:8081/achieve-sd-slave/g2/websocket?serverId=1
ws.onopen = e => {
  // 连接后监听
  console.log(e)

}

ws.onmessage = data => {
  // 当服务端返回数据的时候，放到页面里
  // receiveBox.innerHTML = `<p>${data.data}</p>`
  // receiveBox.scrollTo({
  //   top: receiveBox.scrollHeight,
  //   behavior: "smooth"
  // })
  console.log(data)
}

ws.onclose = data => {
  // 监听连接关闭
  console.log("WebSocket连接已关闭")
  console.log(data);
}

sendBtn.onclick = () => {
  // 点击发送按钮。将数据发送给服务端
  ws.send()
}
exit.onclick = () => {
  // 客户端主动关闭连接
  ws.close()
}




    }
    
    },
    watch:{
       },
    computed:{
    }
}




</script>