<template>
<div id="home">

<!-- 页面头部 -->
 <div id="header">
  <!-- 页面头部左半部分 -->
   <div class='header-left'>
   
           <svg height="32" class="octicon octicon-mark-github text-white " viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>

<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
 

  <el-submenu index="1">
    <template slot="title">{{Label.title_1}}</template>
    <el-menu-item index="1-1" class="title1">{{Label.title_1_1}}</el-menu-item>
    <el-menu-item index="1-2">{{Label.title_1_2}}</el-menu-item>
    <el-menu-item index="1-3">{{Label.title_1_3}}</el-menu-item>
    <el-menu-item index="1-4">{{Label.title_1_4}}</el-menu-item>
    <el-menu-item index="1-5">{{Label.title_1_5}}</el-menu-item>
    <el-menu-item index="1-6">{{Label.title_1_6}}</el-menu-item>
    <el-menu-item index="1-7">{{Label.title_1_7}}</el-menu-item>
    <el-menu-item index="1-8">{{Label.title_1_8}}</el-menu-item>
    <el-menu-item index="1-9">{{Label.title_1_9}}</el-menu-item>
    <el-menu-item index="1-10">{{Label.title_1_10}}</el-menu-item>
    <el-menu-item index="1-11">{{Label.title_1_11}}</el-menu-item>
     </el-submenu>

  <el-menu-item index="2">{{Label.title_2}}</el-menu-item>
  <el-menu-item index="3">{{Label.title_3}}</el-menu-item>

    <el-submenu index="4">
      <template slot="title">{{Label.title_4}}</template>
    <el-menu-item index="4-1" class="title1">{{Label.title_4_1}}</el-menu-item>
    <el-menu-item index="4-2">{{Label.title_4_2}}</el-menu-item>
    <el-menu-item index="4-3">{{Label.title_4_3}}</el-menu-item>
    <el-menu-item index="4-4">{{Label.title_4_4}}</el-menu-item>
    <el-menu-item index="4-5">{{Label.title_4_5}}</el-menu-item>
    <el-menu-item index="4-6">{{Label.title_4_6}}</el-menu-item>
    <el-menu-item index="4-7">{{Label.title_4_7}}</el-menu-item>
    <el-menu-item index="4-8">{{Label.title_4_8}}</el-menu-item>
    <el-menu-item index="4-9">{{Label.title_4_9}}</el-menu-item>
    <el-menu-item index="4-10">{{Label.title_4_10}}</el-menu-item>
    <el-menu-item index="4-11">{{Label.title_4_11}}</el-menu-item>
    <el-menu-item index="4-11">{{Label.title_4_12}}</el-menu-item>
    </el-submenu>

  <el-menu-item index="5">{{Label.title_5}}</el-menu-item>

     <el-submenu index="6">
      <template slot="title">{{Label.title_6}}</template>
    <el-menu-item index="6-1" class="title1">{{Label.title_6_1}}</el-menu-item>
    <el-menu-item index="6-2">{{Label.title_6_2}}</el-menu-item>
    <el-menu-item index="6-3">{{Label.title_6_3}}</el-menu-item>
    <el-menu-item index="6-4">{{Label.title_6_4}}</el-menu-item>
    <el-menu-item index="6-5">{{Label.title_6_5}}</el-menu-item>
    </el-submenu>

  
</el-menu>




   </div>
  <!-- 页面头部左半部分 -->
   
  <!-- 页面头部右半部分 -->
<div class='header-right'>
  <el-autocomplete
  class="serach"
  popper-class="my-autocomplete"
  v-model="state"
 :fetch-suggestions="querySearch"
  v-bind:placeholder="this.Label.title_7"
  @select="handleSelect">
  <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
     
    @click="handleIconClick">
  </i>
  <template slot-scope="{ item }">
    <div class="name">{{ item.value }}</div>
    <span class="addr">{{ item.address }}</span>
  </template>
</el-autocomplete>

<!--  <el-input v-model="input" v-bind:placeholder="this.Label.title_7"></el-input> -->
  <el-button class="signIn">{{Label.title_8}}</el-button>
 <el-button class="signUp">{{Label.title_9}}</el-button>


</div>

   
  <!-- 页面头部右半部分 -->
 </div>
<!-- 页面头部 -->


<!-- 页面主体内容 -->
 <div id="main">

 </div>
<!-- 页面主体内容 -->






<!-- 页面底部 -->
 <div id="footer">
      
</div>
<!-- 页面底部 -->



    </div>


</template>


<script>
   // import anima from '../components/three.vue'
   import axios from 'axios'
   import {Label} from "../utils/label.js"
//import { aaa, cube } from "../utils/label.js"
 export default{
  data(){
    return{
        activeIndex: '1',
        activeIndex2: '1',
           restaurants: [],
        state: '',
        Label:'',
    }
  },
  created(){
 // console.log(Label)

//console.log(aaa, cube);  //  'aaa' 8
  },
  mounted(){
   // const BASE = '/api'
  // axios.defaults.withCredentials=true 
  
  //  axios.post('http://localhost:3000/login').then(res=>{
  //     console.log(res)
  //   })

  // axios.get('http://localhost:3000/ceshi').then(res=>{
  //     console.log(res)
  //   })
this.restaurants = this.loadAll();
this.Label=Label
  },
  methods:{
 querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
   
   
  },
  watch:{

  },
  computed:{

  },
  components:{
  //   anima 
  }


 }   

</script>
<style lang="less">
 #home{
  display: flex;
  flex-direction: column;
 #header{
  height: 70px;
 background-color: #24292e;
 display: flex;
  flex-direction: row;
  justify-content: space-between;
.header-left{
  
   display: flex;
  flex-direction: row;
  
  align-items:center;
  .text-white {
   color: #fff!important;
}
// .octicon {
//  // vertical-align: text-bottom;
// }

.octicon {
  // display: inline-block;
  //  vertical-align: text-top;
    fill: currentColor;
    margin-left:80px;
}
.el-menu{

  font-weight:bold;

}
  .title1{
      font-weight:bold;
      font-size: 16px;
  }
.el-menu-demo{

  background-color: #24292e;
    border-bottom: none;
.el-submenu__title{
  background-color: #24292e;
  color: white;
  border-bottom: none;
font-size: 16px;
}
.el-menu-item{
  background-color: #24292e;
  color: white;
  border-bottom: none;
 font-size: 16px;
}
}

}
.header-right{
  display: flex;
  flex-direction: row;
  align-items:center;
.serach{
  
   margin-right: 20px;
   border-radius: 5px;
}
 .signIn{
background-color:  #24292e;
color:white;
 font-size: 16px;
 font-weight: bold;
 border:0;
  margin-right: 10px;
 }
 .signUp{
  margin-right: 80px;
background-color:  #24292e;
color:white;
 font-size: 16px;
 font-weight: bold;
 border:1 solid white;
 }
}

 }
#main{

height: 700px;
background-color: snow;
 }
#footer{
  
 }

 }   

</style>