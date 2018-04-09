export default {
    data() {
        return {
            user: {
                number: '',
                name: '',
                idCard: '',
                numberPlate: '',
                pas: '',
                sucessPas: ''
            }
        }
    },
    methods: {
        //点击注册按钮
        register(){
            if(!this.user.number || !this.user.name || !this.user.idCard || !this.user.numberPlate || !this.user.pas || !this.user.sucessPas){
                this.$toast('信息输入不全')
                return;
            }
            if(this.user.pas!=this.user.sucessPas){
                this.$toast('两次密码不一致') 
                return;
            }
            this.$post('user/registe',{
                usnumb: this.user.number,
                usname: this.user.name,
                usidno: this.user.idCard,
                uslice: this.user.numberPlate,
                uspass: this.user.pas
            }).then(res=>{
                if(res.code == 0){
                    this.$toast('注册成功')
                    setTimeout(()=>{
                        this.$push({
                            path: 'login',
                        })
                    },2000)
                }
            },err=>{
                this.$toast('服务器异常')
            })
            /*this.$router.push({
                name: 'RaceRecognition'
            })*/
        }
    }
}