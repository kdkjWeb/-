export default{
    data(){
        return {
            width: 0,
            timer: '',
            time: '',
            timeAll: '',
            isShow: false,   // 提交答案的弹出框
            height: 0,
            pause: false,   //下面的时间控件
            answerShow: false,   //是否显示答案控件
            allQuestion: [],   //所有的考试题目
            questions:{},
            num: 0,    //选择所有题的某一个题号
            answerArr: [],   //装用户选择的答案
            normAnswer: '',    //后台返回的标准答案
            score: 0,    //总分
            flag: true,
            allArr: [],
            notice: '',
            isTopShow: false
        }
    },
    methods: {
        layout(){
            this.isShow = false;
        },
        checkOut(){
            this.isTopShow = false;
        },
        //点击右上角查看所有考题
        check(){
            if(!this.isTopShow){
                this.isTopShow = true
                var Oli = document.querySelectorAll('.topBar1 li');
                console.log(Oli)
                for(var i=0 ;i<Oli.length; i++){
                    // Oli[i].style.color = 'red'
                    if(this.allArr[i] != undefined){
                        Oli[i].style.color = '#4c94de'
                        Oli[i].style.borderColor = '#4c94de'
                    }
                }
                
            }else{
                this.isTopShow = false
            }
        },
        //点击每一个考题
        checkEvery(index){
            this.isTopShow = false
            //this.questions = this.allQuestion[index]
            //this.normAnswer = this.allQuestion[index].quansw

            //判断是否做过这道题
            if(this.allArr[index] == undefined){
                this.questions = this.allQuestion[index]
                this.normAnswer = this.allQuestion[index].quansw
                this.answerArr = []; 
                this.answerShow = false;
            }else{
                this.answerArr = this.allArr[index]
            }
        },
        //获取考题
        getTakeExercise(){
            this.$get('score/takeExercise',{
                scorid: this.$route.params.payId,
                subjectId:  this.testId
            }).then(res=>{
                if(res.code == 0){
                    this.allQuestion = res.data.exam
                    this.questions = this.allQuestion[this.num]
                    this.normAnswer = this.allQuestion[this.num].quansw
                }else if(res.code == 500){
                    this.$toast(res.msg)
                }
            })
        },
        //点击返回上一页
        goBack(){
            if(this.timeAll > 0){
                this.$toast(`正在${this.title}中，不能离开当前页面`)
            }else{
                this.$router.push('notice');
            }
            
        },
        //点击每一个答案
        reply(item){
            if(this.title == '学习'){
                if(this.questions.qutype != '多选'){
                    // 单选的操作判断
                     if(this.answerArr.length == 0){
                         this.answerArr.push(item)
                         this.answerShow = true;
                         this.allArr[this.num] = this.answerArr    
                         
                         //判断答案是否正确
                         if(this.answerArr.includes(this.normAnswer)){
                             this.score ++
                         }
                     }
                }else if(this.questions.qutype == '多选'){
                    //多选的操作判断
                    if(this.flag){
                        if(this.answerArr.length < 5){
                            //this.answerArr.push(item)
                            console.log( this.answerArr)
                           
                            if(this.answerArr.includes(item)){
                                for(var i=0; i<this.answerArr.length; i++){
                                    if(this.answerArr[i] == item){
                                        this.answerArr.splice(i,1,item)
                                    }
                                }
                                
                                //this.allArr[this.num] = this.answerArr
                            }else{
                                this.answerArr.push(item)
                               // this.allArr[this.num] = this.answerArr
                            }
                        }
                    }
                    /*if(!this.flag){
                        this.allArr[this.num] = this.answerArr
                    }*/
  
                }
            }else if(this.title == '考试'){
                if(this.questions.qutype != '多选'){
                    // 单选的操作判断
                     if(item == this.answerArr.join('')){
                        return;
                    }else{
                       this.answerArr.splice(0,1)
                       this.answerArr.push(item)     
                       this.allArr[this.num] = this.answerArr
                        //判断答案是否正确
                        if(this.answerArr.includes(this.normAnswer)){
                            this.score ++
                        }
                    }
                }else if(this.questions.qutype == '多选'){
                    
                   

                    //多选的操作判断
                        if(this.answerArr.length < 5){
                            if(this.answerArr.includes(item)){
                                for(var i=0; i<this.answerArr.length; i++){
                                    if(this.answerArr[i] == item){
                                        this.answerArr.splice(i,1)
                                    }
                                }
                               // this.allArr[this.num] = this.answerArr
                            }else{
                                this.answerArr.push(item)
                                //this.allArr[this.num] = this.answerArr
                            }
                        }
                }
            }
           
        },
        //多选时点击确认答题完毕按钮
        success(){
            if(this.title == '学习'){
                this.answerShow = true;
            }
            //禁止修改答案
            this.flag = false
            this.allArr[this.num] = this.answerArr

            //判断答案是否正确
            if(this.answerArr.sort().join('') == this.normAnswer){
                this.score++
            }
        },
        //点击控制时间是否暂停
        timeContrl(){
            if(!this.pause){
                this.pause = true;
                clearInterval(this.timer)
            }else{
                this.pause = false;
                this.timer = setInterval(this.reduceTime,1000)
            }   
        },
        //时间减少
        reduceTime(){
            this.timeAll--
            let mintue,seconds;
            mintue = parseInt(parseInt(this.timeAll)/60);
            seconds = parseInt(parseInt(this.timeAll)%60);
            if(mintue<10){
                mintue = '0'+mintue
            }
            if(seconds<10){
                seconds = '0'+seconds
            }
            this.time = mintue+':'+seconds

            if(this.timeAll == 0){
                this.isShow = true;
                clearInterval(this.timer)
                this.notice = '考试时间已结束，系统将自动交卷，请点击“确认”按钮提交成绩，结束考试。'
            }
        },
        
        //点击上一题
        pre(){
            if(this.num == 0){
                this.num = 0;
                this.questions = this.allQuestion[this.num]
                this.normAnswer = this.allQuestion[this.num].quansw
                this.$toast('没有上一题了')
            }else{
                this.num --;
                this.questions = this.allQuestion[this.num]
                this.normAnswer = this.allQuestion[this.num].quansw

                //判断是否做过这道题
                if(this.allArr[this.num] == undefined){
                    this.answerArr = []; 
                    this.answerShow = false;
                }else{
                    this.answerArr = this.allArr[this.num]
                    if(this.title == '学习'){
                        this.answerShow = true;
                    }
                    
                }
            }
        },
        //点击下一题
        next(){
            console.log(this.allArr)
            this.answerShow = false;
            this.flag = true
            let allLength = this.allQuestion.length
            if(this.num >= allLength-1){
                this.num = allLength-1
                this.questions = this.allQuestion[this.num]
                this.normAnswer = this.allQuestion[this.num].quansw
                if(this.title == '学习'){
                    this.answerShow = true;
                }
                this.$toast('已经是最后一题了')
            }else{
                this.num ++;
                //判断是否已经做过这道题
                    console.log(this.allArr)

                    this.questions = this.allQuestion[this.num]
                    this.normAnswer = this.allQuestion[this.num].quansw
                    if(this.allArr[this.num] == undefined){
                        this.answerArr = []; 
                    }else{
                        this.answerArr = this.allArr[this.num]
                        if(this.title == '学习'){
                            this.answerShow = true;
                        }
                    }
                
                          
            }
        },
        //点击确认交卷
        confirm(){
            clearInterval(this.timer)
            this.isShow = true;
            console.log(this.score)
            if(this.title == '学习' && this.timeAll > 0){
                this.notice = '你点击了确认交卷按钮，系统将准备交卷，点击“确认”按钮提交成绩，结束考试;点击取消按钮将重新学习'
                clearInterval(this.timer)
            }else{
                this.notice = '你点击了确认交卷按钮，系统将准备交卷，请点击“确认”按钮提交成绩，结束考试。'
            }
            
        },
        //点击交卷后的弹出框确认按钮
        layoutBtn(){
            this.$router.push({
                name: 'Score',
                params:{
                    score: this.score,
                    payId: this.$route.params.payId
                }
            })
        },
        //点击交卷后的弹出框取消按钮
        cancel(){
            this.isShow = false;
            this.timer = setInterval(this.reduceTime,1000)
            this.allQuestion = []
            this.questions = {}
            this.normAnswer = ''
            this.answerArr = []
            this.allArr = []
            this.flag = true
            this.answerShow = false
            this.num = 0
            //如果是学习并且还有剩余时间就可以重新学习
            this.getTakeExercise()
        }
    },
    computed: {
        //获取学习信息列表
        studyInfo(){
			return this.$store.getters.getStudyInfo
        },
        //获取科目id
        testId(){
            return this.$store.getters.getSubject
        },
        //获取是考试还是学习
        title(){
            return this.$store.getters.getTitle
        },
        //获取图片地址
        imgSrc(){
           return this.$store.getters.getImgSrc
        }
    },
    mounted(){
        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight-102) + 'px';
            this.width = ((window.innerWidth)/10 - 6) + 'px';
            console.log(this.width)
        })
        this.getTakeExercise()
        //this.reduceTime()
        //console.log(this.studyInfo.time)
       
        this.timeAll = this.studyInfo.time ? parseInt(this.studyInfo.time)*60 : '2700'
        console.log(this.timeAll)

       this.timer =  setInterval(this.reduceTime,1000)
    },
    created() {
        this.height = (window.innerHeight-102) + 'px';
        this.width = ((window.innerWidth)/10 - 6) + 'px';
	},
}