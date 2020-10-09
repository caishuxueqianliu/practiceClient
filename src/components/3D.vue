<template>
<div>
      <div class="wrap">
       
  <ul id="box"></ul>

  <div class="mask">
    <div class="bg-mask"></div>
  </div>
</div>

</div>
 


</template>


<script>
  import $ from 'jquery'

// 开启一个独立的空间避免全局变量污染

 export default{
  data(){
    return{
     idx:"",
  timer:"",

  // 存放li 元素
  liElem:"",

  // 存放span 元素
  spanElem:"",

  // 记录布局类型
  currentStyle:"",

  // 鼠标X、Y坐标值
  oldCoordX:"",
  oldCoordY:"",
  nowCoordX:"",
  nowCoordY:"",

  // li 元素水平、垂直、纵深方向偏移位
  offsetStepX:"",
  offsetStepY:"",
  offsetStepZ:"",

  // li 元素的坐标
  liElemCoordX:"",
  liElemCoordY:"",
  liElemCoordZ:"",

  // 鼠标X、Y差值
  minusX : 0,
  minusY : 0,

  // X、Y偏移度数
  liElemDegX : 0,
  liElemDegY : 0,

  // li 元素的最大个数
  liElemMaxNum : 162,

  // li 元素 水平、垂直铺放的最大个数
  liElemRowMaxNum : 5,
  liElemColMaxNum : 5,

  // li 元素水平、垂直、纵深方向的最大间隔距离
  liElemOffsetX : 350,
  liElemOffsetY : 350,
  liElemOffsetZ : 350,

  // li 元素默认景深
  liElemDepDefault : -1000,
  depDefault : "",

  // 避免第一次拖动发生错位
  liElemDepZ : "",

  // 单个方阵中 li 元素的总个数
  aScreenNum : "",

  // li 元素纵深方向的最在间隔距离
  liElemDepMaxDist : "",

  // 计算第一个li 元素的坐标点
  liElemFristSiteX : "",
  liElemFristSiteY : "",
  liElemFristSiteZ : "",


  // 文本内容
  data : ['Grid','Helix','Chaotic','Sphere','Three','Geome','Curve','Random'],
  // 布局类型




    }

  },
  created(){
 

  },
  mounted(){

      this.main();
  },
  methods:{
 // 指定一个区间，获取一个随机数
  randomFrom (lowerValue,upperValue){
    return Math.floor(Math.random()*(upperValue-lowerValue+1)+lowerValue);
  },
    // 方阵
  gridLayout (){
    
    let arr = [...Array(this.liElemMaxNum).keys()];
    $('#box li').each(i =>{
      // 数组的索引
      let idx = this.randomFrom(0,arr.length-1);
      
      // 计算li 元素 水平、垂直、纵深方向的偏移位
      this.offsetStepX = ((i%this.aScreenNum)%this.liElemRowMaxNum)*this.liElemOffsetX;
      this.offsetStepY = parseInt((i%this.aScreenNum)/this.liElemColMaxNum)*this.liElemOffsetY;
      this.offsetStepZ = parseInt(i/this.aScreenNum)*this.liElemOffsetZ;

      // 计算当前li 元素的坐标值
      this.liElemCoordX = this.liElemFristSiteX+this.offsetStepX;
      this.liElemCoordY = this.liElemFristSiteY+this.offsetStepY;
      this.liElemCoordZ = this.liElemFristSiteZ+this.offsetStepZ;
       
      $('#box li').eq(arr[idx]).css({
        "transform":`translate3d(this.liElemCoordX}px,${this.liElemCoordY}px,${this.liElemCoordZ}px)`,
        "transition": "4s ease-in-out"
      })

      // 删除数组中的值
      arr.splice(idx,1);
    }); this.currentStyle = gridLayout;
  },

  // 螺旋
  helixLayout (){
    let arr = [...Array(this.liElemMaxNum).keys()];
    $('#box li').each(i =>{
      let idx = this.randomFrom(0,arr.length-1);
      let liElemDegY = 10*i;
      let liElemDepY = -10*parseInt(this.liElemMaxNum/2)+10*i;

      $('#box li').eq(arr[idx]).css({
        "transform":`rotateY(${this.liElemDegY}deg) translateY(${this.liElemDepY}px) translateZ(${Math.abs(this.liElemDepDefault)}px)`,
        "transition": "4s ease-in-out"
      })

      // 删除数组中的值
      arr.splice(idx,1)
    }); this.currentStyle = helixLayout;
  },

  // 球形
  sphereLayout(){
    let arr = [...Array(this.liElemMaxNum).keys()];
    $('#box li').each(i =>{
      let idx = this.randomFrom(0,arr.length-1);
      let liElemDegY = 3*i;
      let liElemDegX = 30*i;

      $('#box li').eq(arr[idx]).css({
        "transform":`rotateY(${this.liElemDegY}deg) rotateX(${this.liElemDegX}deg) translateZ(${Math.abs(this.liElemDepDefault)}px)`,
        "transition": "4s ease-in-out"
      })

      // 删除数组中的值
      arr.splice(idx,1)
    }); this.currentStyle = sphereLayout;
  },

  // 三体
  threeLayout(){
    let arr = [...Array(this.liElemMaxNum).keys()];
    $('#box li').each(i =>{
      let idx = this.randomFrom(0,arr.length-1);
      let liElemDegY = 3*i;
      let liElemDegX = 60*i;

      $('#box li').eq(arr[idx]).css({
        "transform":`rotateY(${this.liElemDegY}deg) rotateX(${this.liElemDegX}deg) translateZ(${Math.abs(this.liElemDepDefault)}px)`,
        "transition": "4s ease-in-out"
      })

      // 删除数组中的值
      arr.splice(idx,1)
    }); this.currentStyle = threeLayout;
  },

  // 几何
  geomeLayout(){
    let arr = [...Array(this.liElemMaxNum).keys()];
    $('#box li').each(i =>{
      let idx = this.randomFrom(0,arr.length-1);
      let liElemDegY = 8.9*i;
      let liElemDegX = 2.9*i;

      $('#box li').eq(arr[idx]).css({
        "transform":`rotateY(${this.liElemDegY}deg) rotateX(${this.liElemDegX}deg) translateZ(${Math.abs(this.liElemDepDefault)}px)`,
        "transition": "4s ease-in-out"
      })

      // 删除数组中的值
      arr.splice(idx,1)
    }); this.currentStyle = geomeLayout;
  },

  // 曲线
  curveLayout(){
    let arr = [...Array(this.liElemMaxNum).keys()];
    $('#box li').each(i =>{
      let idx = this.randomFrom(0,arr.length-1);
      let liElemDegY = 1*i;
      let liElemDegX = 2*i;

      $('#box li').eq(arr[idx]).css({
        "transform":`rotateY(${this.liElemDegY}deg) rotateX(${this.liElemDegX}deg) translateZ(${this.liElemDepDefault}px)`,
        "transition": "4s ease-in-out"
      })

      // 删除数组中的值
      arr.splice(idx,1)
    }); this.currentStyle = curveLayout;
  },

  // 随机
  chaoticLayout (){
    $('#box li').each(function(i){
      // 随机生成li 元素的坐标点
      this.liElemCoordX = (Math.random()-0.5)*3000;
      this.liElemCoordY = (Math.random()-0.5)*3000;
      this.liElemCoordZ = (Math.random()-0.5)*3000;

      $(this).css({
        "transform":`translate3d(${this.liElemCoordX}px,${this.liElemCoordY}px,${this.liElemCoordZ}px)`,
        "transition": "4s ease-in-out"
      })
    }); this.currentStyle = 'chaoticLayout';
  },

 main(){
    // 避免覆盖默认景深值
  this.depDefault = this.liElemDepDefault-600,

  // 避免第一次拖动发生错位
  this.liElemDepZ = this.liElemDepDefault-600,

  // 单个方阵中 li 元素的总个数
  this.aScreenNum = this.liElemRowMaxNum*this.liElemColMaxNum,

  // li 元素纵深方向的最在间隔距离
  this.liElemDepMaxDist = parseInt(this.liElemMaxNum/this.aScreenNum),

  // 计算第一个li 元素的坐标点
  this.liElemFristSiteX = parseInt('-'+this.liElemRowMaxNum/2)*this.liElemOffsetX,
  this.liElemFristSiteY = parseInt('-'+this.liElemColMaxNum/2)*this.liElemOffsetY,
  this.liElemFristSiteZ = parseInt('-'+this.liElemDepMaxDist/2)*this.liElemOffsetZ,

    $([...Array(this.liElemMaxNum).keys()]).each(i =>{
      // 创建一个li 元素
      this.liElem = $('<li></li>');
      let idx = this.randomFrom(0,this.data.length-1);

      // 创建一个span 元素
     var spanElem = $(`<span>${this.data[idx]}</span>`);
      this.liElem.append(spanElem);

      // 设置span 中的文本颜色
      spanElem.css('color',`rgb(${this.randomFrom(100,255)},${this.randomFrom(100,255)},${this.randomFrom(100,255)})`);

      // 将已创建的li 元素添加至容器中
      $('#box').append(this.liElem);
    })

    // 鼠标移入移出效果
    $('#box li').hover(function(){
      $(this).css('border','1px solid rgba(125,255,255,0.75)');
      $(this).css('boxShadow','0 0 15px rgba(0,255,255,0.75)');
      $(this).css('transition','0s');
    },function(){
      $(this).css('border','1px solid rgba(125,255,255,0.25)');
      $(this).css('boxShadow','0 0 15px rgba(0,255,255,0.5)');
      $(this).css('transition','0s');
    })

  // 布局类型
   var  layoutStyle = ['gridLayout', 'helixLayout', 'chaoticLayout', 'sphereLayout', 
    'threeLayout', 'geomeLayout', 'curveLayout'];

    // 鼠标点击，切换布局
    $('#box li').click(function(){
      switch($(this).text()){
        case 'Grid': this.gridLayout(); break;
        case 'Helix': this.helixLayout(); break;
        case 'Three': this.threeLayout(); break;
        case 'Geome': this.geomeLayout(); break;
        case 'Curve': this.curveLayout(); break;
        case 'Sphere': this.sphereLayout(); break;
        case 'Chaotic': this.chaoticLayout(); break;

        default:
          while(true){
            this.idx = this.randomFrom(0,layoutStyle.length-1);
            if(layoutStyle[this.idx] != this.currentStyle){
              return layoutStyle[this.idx]();
            }
          }
          break;
      }
    })

    // 鼠标拖动与滚轮效果
    $(document).mousedown(function(event){
     var  event = event || window.event;

      // 上一个点的X、Y坐标
      this.oldCoordX = event.clientX;
      this.oldCoordY = event.clientY;

      $(this).on('mousemove',event =>{
        event = event || window.event;

        // 若上一个定时器存在，则将其删除
        this.timer && clearInterval(this.timer);

        // 当前点的X、Y坐标
        this.nowCoordX = event.clientX;
        this.nowCoordY = event.clientY;

        // 计算机X、Y差值
        this.minusX = this.nowCoordX - this.oldCoordX;
        this.minusY = this.nowCoordY - this.oldCoordY;

        // 更新上一个点的X、Y坐标值
        this.oldCoordX = this.nowCoordX;
        this.oldCoordY = this.nowCoordY;

        // 计算X、Y轴的移动度数
        this.liElemDegX -= this.minusY*0.1;
        this.liElemDegY += this.minusX*0.1;

        $('#box').css({
          "transform":`translateZ(${this.liElemDepZ}px) rotateX(${this.liElemDegX}deg) rotateY(${this.liElemDegY}deg)`
        })


      }).mouseup(()=>{
        // 当鼠标弹起解除移动
        $(document).off('mousemove');

        // 若上一个定时器存在，则将其删除
        this.timer && clearInterval(this.timer);
  
        // 鼠标弹起后有缓动效果
        this.timer = setInterval(()=> {
          // 缓动差值 
          this.minusX *= 0.95;
          this.minusY *= 0.95;

          // 计算X、Y轴的移动度数
          this.liElemDegX -= this.minusY*0.1;
          this.liElemDegY += this.minusX*0.1;

          // 当差值超出指定范围时，则清除定时器
          Math.abs(this.minusX)<0.05
          && Math.abs(this.minusY)<0.05
          && clearInterval(this.timer);

          $('#box').css({
            "transform":`translateZ(${this.iElemDepZ}px) rotateX(${this.liElemDegX}deg) rotateY(${this.liElemDegY}deg)`
          })
        }, 12);
      })

    }).on('mousewheel DOMMouseScroll',e =>{
        // 若上一个定时器存在，则将其删除
        this.timer && clearInterval(this.timer);

        // 获取鼠标滚动方向
        let step = (e.originalEvent.wheelDelta
        && (e.originalEvent.wheelDelta >0?1:-1))
        || (e.originalEvent.detail && (e.originalEvent.detail >0?-1:1));

        // 计算滚轮滚动时Z 轴景深的步长
        this.liElemDepZ = this.depDefault += step*90;

        $('#box').css({
          "transform":`translateZ(${this.liElemDepZ}px) rotateX(${this.liElemDegX}deg) rotateY(${this.liElemDegY}deg)`
        })

        // 设置缓动效果
        this.timer = setInterval(()=> {
          // 缓动步长
          step *= 0.6;
          this.liElemDepZ += step*80;

          Math.abs(step) < 0.000005
          && clearInterval(this.timer);

          $('#box').css({
            "transform":`translateZ(${this.liElemDepZ}px) rotateX(${this.liElemDegX}deg) rotateY(${this.liElemDegY}deg)`
          })
        }, 12);
      })

    // 加载布局
    setTimeout(()=>{this.gridLayout()},1000);
  //  gridLayout()
  }










  },
  watch:{

  },
  computed:{

  },
  components:{

  }



 }   

</script>
<style lang="less">
   li,
ul,
div,
html,
body{
  margin: 0;
  padding: 0;
}

html,
body{ height: 700px }

li{ list-style-type: none }

.wrap{
  height: 100%;
  overflow: hidden;
  perspective: 800px;
}

#box{
  top: 50%;
  left: 50%;
  width: 0px;
  height: 0px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-1600px);
  z-index: 10;
  //background-color: black;
}
#box li{
  top: -80px;
  left: -60px;
  width: 120px;
  height: 160px;
  position: absolute;
  text-align: center;
  line-height: 160px;
  background-color: rgba(5,100,80,0.2);
  border: 1px solid rgba(125,255,255,0.25);
  box-shadow: 0 0 15px rgba(0,255,255,0.5);
  cursor: pointer;
}
#box li span{
  font-size: 28px;
  font-weight: blod;
  text-shadow: 2px 2px 5px black;
  color: #efebef;
}

.mask{
  width: 100%;
  height: 700px;
 // background: url('../assets/bg_mask.jpg') no-repeat center;
  background-size: cover;
  filter: blur(5px);
}
.mask > .bg-mask{
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.25;
} 

</style>