<template>
  <div class="pay_bottom" v-show="isShow">
      <div class="pay">
        <p class="title"> 选择支付方式</p>
        <div class="pay_choose">
            <div @click="weChat">
                <span class="iconfont icon-weixinzhifu1 We_chat"></span>
                <p>微信支付</p>
            </div>
            <div @click="Alipay">
                <span class="iconfont icon-zhifubaozhifu Alipay"></span>
                <p>支付宝支付</p>
            </div> 
        </div>
        <div class="cancel" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{

        }
    },
    methods: {
        //点击取消按钮传递到父组件
        cancel(){
            this.$emit('on-close');
        },
        //支付方法
        pay(type,url){
            if(this.title == '学习'){
                this.$get(url,{
                    sccate: this.title,
                    scmode: this.studyInfo.type,
                    scsubj: this.studyInfo.subject,
                    sclong: this.studyInfo.time,
                    scamou: this.studyInfo.num,
                    sctype: type
                }).then(res=>{
                    console.log(res)
                    if(res.data){
                        this.$router.push({
                            name: 'StudyInfo',
                            params:{
                                payId: res.data
                            }
                        })
                    }
                },err=>{
                    this.$toast('服务器异常')
                })
            }else if(this.title == '考试'){
                this.$get(url,{
                    sccate: this.title,
                    scmode: this.studyInfo.type,
                    scsubj: this.studyInfo.subject,
                    sctype: type
                }).then(res=>{
                    if(res.data){
                        console.log(res.data)
                        this.$router.push({
                            name: 'StudyInfo',
                            params:{
                                payId: res.data
                            }
                        })
                    }
                },err=>{
                    this.$toast('服务器异常')
                })
            }
        },
        // 点击微信支付
        weChat(){
            this.pay('微信','pay/commit/wxpay')
        },
        //点击支付宝支付
        Alipay(){
            this.pay('支付宝','pay/commit/alipay')
        }
    },
    mounted(){
        console.log(this.studyInfo)
    },
    computed: {
        studyInfo(){
            return this.$store.getters.getStudyInfo
          },
        title(){
			return this.$store.getters.getTitle
		}
    }
}
</script>


<style>
.pay_bottom{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 222;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3)
}
.pay{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    background-color: #fff;
}
.pay .title{
    padding:5px 0 0 10px;
    color: #bbb;
    font-size: 13px;
} 
.pay_choose{
    display: flex;
    display: -webkit-flex;
}
.pay_choose div span{
    display: block;
    font-size: 35px;
}
.pay_choose div{
    width: 25%;
    text-align: center;
}
.pay_choose div p{
    margin: -8px 0 15px;
}
.cancel{
    width: 100%;
    border-top: 1px solid #ddd;
    text-align: center;
    line-height: 40px;
}
.We_chat{
    color: #63b900;
}
.Alipay{
    color: #00a2ea;
}
</style>
