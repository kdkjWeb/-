import Axios from './index'

/**
 * 公用的server 方法
 */

export default {
//拿数据
    get:(url,data)=>{
        return new Promise((resolve,reject)=>{
            Axios.get(url,{
                params: data
            }).then((res)=>{
                resolve(res.data)
            }).catch((err)=>{
                /*if(err.data.msg){
                    this.$toast(res?res.data.msg:"操作失败")
                }else{
                    this.$toast(res?res.data.msg:"服务器异常")
                }*/
                reject(err)
            })
        })
    },


    //post数据	
    post: (url,data)=>{
        return new Promise((resolve,reject)=>{
            Axios.post(url,data)
            .then((res)=>{
                resolve(res.data)
            }).catch((err)=>{
                /*if(err.data.msg){
                    this.$toast(res?res.data.msg:"操作失败")
                }else{
                    this.$toast(res?res.data.msg:"服务器异常")
                }*/
                reject(err)
            })
        })
    }
}