(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"14c3":function(t,e,n){"use strict";var o=n("c8f0"),s=n.n(o);s.a},"293a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[n("div",{staticClass:"websocket"},[n("div",{staticClass:"receive"},[n("p",[t._v("简单聊天")]),t._l(t.list,(function(e,o){return n("div",{key:o,attrs:{id:"receive-box"}},[t._v(t._s(e))])}))],2),n("div",{staticClass:"send"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],attrs:{type:"text",id:"msg-need-send"},domProps:{value:t.data},on:{input:function(e){e.target.composing||(t.data=e.target.value)}}}),n("p",[n("button",{attrs:{id:"send-btn"},on:{click:function(e){return t.send()}}},[t._v("点击消息")])])])])])},s=[],c=new WebSocket("ws://127.0.0.1:3000/websocket/test"),a={name:"Chat",data:function(){return{list:[],data:""}},components:{},created:function(){},mounted:function(){},methods:{wsConnect:function(){var t=this;c.onopen=function(){console.log("WebSocket 连接状态成功")},c.onmessage=function(e){t.list.push(e.data)},c.onclose=function(t){console.log("WebSocket连接已关闭"),console.log(t)}},send:function(){c.send(this.data)},test:function(){this.msg="123333"}},watch:{},computed:{}},i=a,u=(n("14c3"),n("2877")),d=Object(u["a"])(i,o,s,!1,null,null,null);e["default"]=d.exports},c8f0:function(t,e,n){},f820:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),n("div",{staticClass:"websocket"},[n("div",{staticClass:"receive"},[n("p",[t._v("服务端返回的消息")]),n("div",{attrs:{id:"receive-box"}})]),n("div",{staticClass:"send"},[n("textarea",{attrs:{type:"text",id:"msg-need-send"}}),n("p",[n("button",{attrs:{id:"send-btn"}},[t._v("点击发消息给服务端")])])]),n("button",{attrs:{id:"exit"}},[t._v("关闭连接")])])])}],c={name:"About",data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{wsConnect:function(){var t=document.getElementById("msg-need-send"),e=document.getElementById("send-btn"),n=document.getElementById("exit"),o=document.getElementById("receive-box"),s=new WebSocket("ws://127.0.0.1:3000/websocket/test");s.onopen=function(t){console.log("WebSocket 连接状态： ".concat(s.readyState)+t)},s.onmessage=function(t){o.innerHTML="<p>".concat(t.data,"</p>"),o.scrollTo({top:o.scrollHeight,behavior:"smooth"})},s.onclose=function(t){console.log("WebSocket连接已关闭"),console.log(t)},e.onclick=function(){s.send(t.value)},n.onclick=function(){s.close()}}},watch:{},computed:{}},a=c,i=n("2877"),u=Object(i["a"])(a,o,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.efdf9f9f.js.map