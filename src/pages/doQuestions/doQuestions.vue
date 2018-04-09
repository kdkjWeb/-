<template>
  <div class="questuins">
      <div class="title1">
          <span class="iconfont icon-zuojiantou2 icon" @click="goBack"></span>
          <span>{{title}}</span>
          <span class="iconfont icon-jihe icon1" @click="check"></span>
          <div  :style="{height: height}"  class="topBar1"  v-show="isTopShow" @click="checkOut">
              <ul>
                    <li
                    v-for="(item,index) in allQuestion.length" 
                    :key="index" @click="checkEvery(index)" 
                    >{{index+1}}</li>
                </ul>
          </div>
     </div>
     <div style="height: 50px"></div>
      <div class="questuins_content" :style="{height: height}">
           <p><span class="type">{{questions.qutype}}</span>{{questions.qutite}}</p>
            <img v-if="questions.quaddr" class="img" :src="imgSrc+questions.quaddr" alt="图片">
            <ul class="question">
                <li :class="[this.answerArr.includes(questions.as1)?'answerActive':'']" v-if="questions.as1" @click="reply(questions.as1)"><span>{{questions.as1}}</span>{{questions.op1}}</li>
                <li :class="[this.answerArr.includes(questions.as2)?'answerActive':'']" v-if="questions.as2" @click="reply(questions.as2)"><span>{{questions.as2}}</span>{{questions.op2}}</li>
                <li :class="[this.answerArr.includes(questions.as3)?'answerActive':'']" v-if="questions.as3" @click="reply(questions.as3)"><span>{{questions.as3}}</span>{{questions.op3}}</li>
                <li :class="[this.answerArr.includes(questions.as4)?'answerActive':'']" v-if="questions.as4" @click="reply(questions.as4)"><span>{{questions.as4}}</span>{{questions.op4}}</li>
            </ul>
            <div class="btn" v-if="questions.qutype=='多选'" @click="success" :class="{activeBtn:this.answerArr.length>1}">确认</div>
            
            <div class="answerBtn">
                <div class="pre" @click="pre">上一题</div>
                <div class="next" @click="next">下一题</div>
            </div>
            <div class="answer" v-show="answerShow">
                <div class="answer_left">
                    您的答案:
                    <span>{{this.answerArr.join('')}}</span>
                </div>
                <div class="answer_right">
                    正确答案:
                    <span>{{this.normAnswer}}</span>
                </div>
            </div>
      </div>
      <div class="bottom">
        <div class="bottom_time">
            <div>剩余时间：<span>{{time}}</span></div>
            <div v-if="title == '学习'"><span class="iconfont icon-ai07" @click="timeContrl" :class="{'icon-bofang1': pause}"></span></div>
        </div>
        <div class="confirm" @click="confirm">确认交卷</div>
    </div>
    <div class="layout" v-if="isShow" @click="layout">
        <div class="layout_content">
            <p>温馨提示</p>
            <p>{{notice}}</p>
            <!-- <div class="layout_btn" @click="layoutBtn">确认</div> -->
            <div class="layout_btn">
                <div  @click="layoutBtn">确认</div>
                <div v-show="title == '学习' && this.timeAll>0" @click="cancel">取消</div>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
export {default} from './doQuestionsCtr'
</script>

<style scoped>
.questuins{
    position: relative;
    width: 100%;
    height: 100%;
}
.questuins_content{
    overflow: auto;
}
.questuins_content p{
    padding: 15px 10px 0;
}
.title1{
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #323232;
  color: #fff;
}
.topBar1{
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 99;
    width: 100%;
    background: rgba(0, 0, 0, .1);
    /* max-height: 260px; */
   
}
.topBar1 ul{
    width: 100%;
    max-height: 260px;
    overflow: auto;
    background-color:#fff;
    /* transition: all 0.5; */
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    align-items: center;
}
.topBar1 ul li{
    min-width: calc(10% - 6px);
    padding-top: calc(5% - 4px);
    padding-bottom: calc(5% - 4px);
    height: 0; 
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #ddd;
    color: #ddd;
    border-radius: 50%;
    margin: 3px;
    line-height: 25%;
}
.topBar1 li.active{
    color: #4c94de;;
    border-color: #4c94de;
}
/* .topBar1 li i {
    display: flex;
    justify-content: center;
    align-items: center;
} */
.title1 span.icon{
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 25px;
}
.title1 span.icon1{
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 25px;
}
.questuins .type{
    border: 1px solid #ff9935;
    padding: 2px 3px;
    margin-right: 5px;
    border-radius: 5px;
}
.questuins ul.question li {
    padding: 5px 10px;
    line-height: 20px;
}
.questuins ul li span{
    border: 1px solid #bbb;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    margin-right: 5px;
}
.img{
    width: 60%;
    display: block;
    margin: 10px auto;
}
.btn{
    width: 70%;
    margin: 20px auto;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 20px;
    background: #ddd;
    color: #fff;
}
.bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    height: 35px;
    padding: 8px 0px;
    line-height: 35px;
    z-index: 990;
    background: rgba(0, 0, 0, .1);
}
.bottom .bottom_time{
    width: 55%;
    border: 1px solid #ff9935;
    border-radius: 20px;
    display: flex;
    display: -webkit-flex;
    overflow: hidden;
}
.bottom .bottom_time div:first-child{
    flex: 6;
    text-align: center;
}
.bottom .bottom_time div:last-child{
    flex: 2;
    text-align: center;
    border-left: 1px solid #ff9935;
}
.bottom .confirm{
    width: 30%;
    background: #ff9935;
    color: #fff;
    text-align: center;
    border-radius: 20px;
}
.answer{
    display: flex;
    display: -webkit-flex;
    padding: 15px 20px;
    transition: all 1s;
}
.answer span{
    color: red;
}
.answer .answer_left{
    flex: 1;
}
.answer .answer_right{
    flex: 1;
}
.answerActive{
    background-color:rgba(0, 0, 0, .1);
}
.answerActive span{
    color: #fff;
}
.activeBtn{
    background-color: royalblue;
}
.answerBtn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    margin-top: 10px;
}
.answerBtn div{
    width: 30%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 6px;
    color: #fff;
}
.answerBtn div.pre{
    background-color: #ff9935;
}
.answerBtn div.next{
    background-color: #459bf2;
}
.layout{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    z-index: 999;
}
.layout_content{
    position: absolute;
    top: 50%;
    /* transform: translateY(-100px); */
    left: 12.5%;
    /* transform: translateX(-50%); */
    transform: translateY(-50%);
    width: calc(75% - 20px);
    /* height: 200px; */
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
}
.layout_content p:first-child{
    text-align: center;
    padding: 10px 0;
    color: #ff9935;
    font-size: 16px;
}
.layout_content p:last-child{
    line-height: 25px;
}
/* .layout_btn{
    width: 100px;
    background-color: #ff9935;
    margin: 10px auto;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 15px;
} */
.layout_btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
}
.layout_btn div{
    /* flex: 1; */
    width: 35%;
    text-align: center;
    margin-top: 10px;
    border-radius: 15px;
    line-height: 25px;
    color: #fff;
}
.layout_btn div:first-child{
    background-color: #ff9935;
}
.layout_btn div:last-child{
    background-color: #459bf2;
}
</style>

