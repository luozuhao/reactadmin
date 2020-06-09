import request from './network'
import jsonp from 'jsonp'
export function login(option,callback) {
        request({
            url:'/login',
            type:'post',
            data:option,
            header:{
                token:'token'
            }
        }).then((response) =>{
            callback(response)
        }).catch((error)=>{
            console.log('error',error)
        })
}

export function weather(city) {
    const url  =`http://api.map.baidu.com/telematics/v3/weather?location = ${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    return new Promise((resolve, reject) =>{
        jsonp(url,{},(error,data)=>{
            console.log(data);
            if (!error) {
                resolve(data)
            }else {
                reject(error)
            }
        })
    })
}

export function category(option,callback) {
    request({
        url:'/manage/category/list',
        type:'get',
        data:{
            params:option
        },
        header:{
            token:'token'
        }
    }).then((response) =>{
        callback(response)
    }).catch((error)=>{
        console.log('error',error)
    })
}

//商品管理

export function product(option,callback) {
    request({
        url:'/manage/product/list',
        type:'get',
        data:{
            params:option
        },
        header:{
            token:'token'
        }
    }).then((response) =>{
        callback(response)
    }).catch((error)=>{
        console.log('error',error)
    })
}

export function reqDeleteImg(option,callback) {
    request({
        url:'/manage/img/delete',
        type:'post',
        data:option,
        header:{
            token:'token'
        }
    }).then((response) =>{
        callback(response)
    }).catch((error)=>{
        console.log('error',error)
    })
}
//获取用户列表
export function getUserList(callback) {
    request({
        url:'/manage/user/list',
        type:'get',
        data:{ },
        header:{
            token:'token'
        }
    }).then((response) =>{
        callback(response)
    }).catch((error)=>{
        console.log('error',error)
    })
}


