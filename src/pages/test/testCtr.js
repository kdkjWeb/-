export default{
    data() {
        return {
            /*testList: [
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
            testList: []
        }
    },
    methods: {
        //查询学习记录
        getTestList(){
            this.$get('score/queryscore',{
                scnumb: this.user.usnumb,
                scname: this.user.usname,
                sccate: '考试'
            }).then(res=>{
                if(res.code == 0){
                    this.testList = res.data
                }
            },err=>{
                this.$toast('网络异常')
            })
        }
    },
    mounted(){
        this.getTestList()
    },
    computed: {
        user(){
            return this.$store.getters.getUser
          }
    }
}