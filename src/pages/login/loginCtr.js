import {mapGetters} from 'vuex'
export default{
    data() {
        return {
            title: '登录',
            user: {
                name: '',
                pas: ''
            }
        }
    },
    methods: {
        //点击登录按钮
        loginBtn(){
            if(!this.user.name || !this.user.pas){
                this.$toast('信息输入不完整！')
                return;
            }
            
           console.log(this.user.name,this.user.pas)
           this.$post('login',{
                loginName: this.user.name,
                uspass: this.user.pas
            }).then(res=>{
                console.log(res.data)
                if(res.code == 0){
                this.$toast('登录成功')
                //存入vuex
                this.$store.commit('setUser', res.data)
                //登录成功跳转到相应的页面
                /*setTimeout(()=>{
                    this.$router.push({
                      path: 'notice',
                    });
                  },2000);*/

                //  console.log(this.toptitle)
               if(this.toptitle == '学习'){
                    setTimeout(()=>{
                        this.$router.push({
                          path: 'study',
                        });
                      },2000);
                }else if(this.toptitle == '考试'){
                    setTimeout(()=>{
                        this.$router.push({
                          path: 'exam',
                        });
                      },2000);
                }else if(this.toptitle == '学习记录'){
                    setTimeout(()=>{
                        this.$router.push({
                          path: 'learn',
                        });
                      },2000);
                }else if(this.toptitle == '考试记录'){
                    setTimeout(()=>{
                        this.$router.push({
                          path: 'test',
                        });
                      },2000);
                }else{
                    setTimeout(()=>{
                        this.$router.push({
                          path: 'notice',
                        });
                      },2000);
                }
                
                }else if(res.code == 500){
                    this.$toast(res.msg)
                }
            },err=>{
                this.$toast('服务器异常')
            })
            /*this.$router.push({
                name: 'RaceRecognition',
                params: {
                   title: this.title
                }
            })*/
        }
    },
    computed: {
		...mapGetters({
            toptitle: 'getTitle'
		}),
	},
}