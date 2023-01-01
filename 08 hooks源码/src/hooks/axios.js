import axios from 'axios'
export default function (method,url){
    return new Promise((res,rej)=>{
        axios({
            method,
            url
        }).then((r)=>{
            res(r.data)
        })
    })
}