import axios from 'axios'
// const url = 'https://jsonplaceholder.typicode.com'
// const Baseurl = "http://localhost:5000"
function request(options) {
    return new Promise((resolve, reject)=>{
        let promise;
        if (options.type === 'get'){
            promise = axios.get(options.url,options.data)
        }else if (options.type === 'post') {
            promise = axios.post(options.url,options.data,options.header)
        }else {
            reject('c错误信息')
        }
        resolve(promise)
    })
}
export default request
