/* 
包含应用中所有请求接口的函数: 接口请求函数
函数的返回值都是promise对象
*/

import axios from 'axios'

//const BASE = 'http://localhost:3000'

const BASE = '/api'
//const BASE = ''
// http://iosaudit.xuegaogame.com/public/index.php?list
//export const reqPost = (values)=>  axios.post(BASE+'/post',{values});
//export const reqPost = ()=>  axios.post('http://iosaudit.xuegaogame.com/public/index.php?list');
export const reqGet = ()=>  axios.get(BASE+'/get');

export const reqGetUsers = ()=>  axios.get(BASE+'/getUsers');

export const reqPostUsers = (values)=>  axios.post(BASE+'/postUsers',{values});
//export const reqCategorys = (parentId) =>axios.get(BASE + '/manage/category/list',{params:{parentId}});
