import axios from 'axios'
import {url} from './network'
export function todos(callback) {
    axios.get(url+'/todos')
    .then((response) =>{
        callback(response)
    }).catch((error)=>{
        console.log('错误',error)
    })
}
