export default{
    data() {
        return {
            /*learnList: [
                {
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-22'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-11'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-22'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-11'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                },{
                    subject: '科目一理论考试',
                    score: '90',
                    learnTime: '2018-03-21'
                }
            ]*/
            learnList: []
        }
    },
    methods: {
        //查询学习记录
        getLearnList(){
            this.$get('score/queryscore',{
                scnumb: this.user.usnumb,
                scname: this.user.usname,
                sccate: '学习'
            }).then(res=>{
                console.log(res)
                if(res.code == 0){
                    this.learnList = res.data
                }
            },err=>{
                this.$toast('网络异常')
            })
        }
    },
    mounted(){
        this.getLearnList()
    },
    computed: {
        user(){
            return this.$store.getters.getUser
          }
    }
}