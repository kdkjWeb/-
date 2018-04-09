export default{
    data(){
        return {
            carIndex: null,
            subjectIndex: null,
            isShow: false,
            num:'30',
            time: '10',
            carModelValue: '',
            subjectValue: '',
            subjectId: '',
            carModel: [],
            subjectList: [],
            /*carModel: [
                {
                    subject: '小车类C1、C2、C3'
                },{
                    subject: '客车类A1、A3、B1'
                },{
                    subject: '货车类A2、B2'
                }
            ],*/
            /*subjectList: [
                {
                    title: '科目一理论考试'
                },{
                    title: '科目四理论考试'
                }
            ]*/
        }
    },
    methods: {
        //获取车型列表
        getCarModel(){
            this.$get('subject/queryVehiType')
            .then(res=>{
                console.log(res.data)
                if(res.code == 0){
                    this.carModel = res.data   
                    //请求车型返回后接着请求科目
                    this.getSubjectList(this.carModel[0].id)
                }
            },err=>{
                this.$toast('服务器异常')
            })
        },
        //获取默认科目列表
        getSubjectList(id){
            this.$get('subject/querySubjsType',{
                vehiclTypeId: id
            })
            .then(res=>{
                console.log(res)
                this.subjectList = res.data;
            },err=>{
                this.$toast('服务器异常')
            })
        },

        
        //选择车型
        car(index,item){
            //请求科目列表
            this.getSubjectList(item.id)
            this.carIndex = index
            this.carModelValue = item.vehiclType
        },
        //选择科目
        subjiect(index,item){
            this.subjectIndex = index
            this.subjectValue = item.subjectType
            this.subjectId = item.subjid
            //console.log(this.subjectId)
            this.$store.commit('setSubject',this.subjectId)
        },
        // 点击确认支付按钮
        confirm(){
            if(this.num == 0 || this.time == 0 || !this.carModelValue || !this.subjectValue){
                this.$toast('输入信息不完整！')
                return;
            }
            this.isShow = true;
            let studyInfo = {
                type: this.carModelValue,
                subject: this.subjectValue,
                num: this.num,
                time: this.time
            }
            console.log(studyInfo)
            //将学习记录的用户选择信息存入vuex
            this.$store.commit('setStudyInfo',studyInfo)
            
        },
        // 点击组件传过来的支付页面取消按钮
        close(){
            this.isShow = false;
        },
        //点击加号按钮
        add(type){
            if(type){
                this.num ++
            }else{
                this.time ++
            }
        },
        //点击减号按钮
        reduce(type){
            if(type){
                if(this.num == 0){
                    this.num = 0;
                }else{
                    this.num --;
                }
            }else{
                if(this.time == 0){
                    this.time = 0;
                    return;
                }else{
                    this.time --;
                }
            }
        }
    },
    mounted(){
        this.getCarModel()
        /*setTimeout(()=>{
            this.getSubjectList()
        },50)*/
    }
}