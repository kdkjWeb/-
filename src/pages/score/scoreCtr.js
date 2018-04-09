export default{
    data() {
        return {
            isOk: false,
            score: ''
        }
    },
    methods:{
        signature(){
           if(!this.isOk){
            this.isOk = true
           }else{
            this.isOk = false
           }
        },
        goBack(){
            if(this.isOk){
                this.$get('score/submit',{
                    scorid: this.$route.params.payId,
                    scored: this.score
                }).then(res=>{
                    if(res.code == 0){
                        this.$router.push('notice')
                    }
                },err=>{
                    this.$toast('服务器异常')
                })
            }else{
                this.$toast('请签名！')
            }
        }
    },
    computed: {
        //获取是考试还是学习
        title(){
            return this.$store.getters.getTitle
        },
        studyInfo(){
			return this.$store.getters.getStudyInfo
        },
        user(){
            return this.$store.getters.getUser
        }
    },
    mounted(){
        this.score = this.$route.params.score ? this.$route.params.score : 0
        console.log(this.$route.params.payId)
    }
}