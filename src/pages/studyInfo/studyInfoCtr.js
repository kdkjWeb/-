export default{
    data(){
        return{
            timeNum: '3'
        }
    },
    computed: {
        studyInfo(){
			return this.$store.getters.getStudyInfo
        },
        user(){
            return this.$store.getters.getUser
        }
    },
    mounted(){
        /*this.$router.push({
            name: 'DoQuestions',
            params:{
                payId: this.$route.params.payId
            }
        })*/
        setInterval(()=>{
            this.timeNum--
            if(this.timeNum == 0){
                this.$router.push({
                    name: 'DoQuestions',
                    params:{
                        payId: this.$route.params.payId
                    }
                })
            }
        },1000)
    }
}