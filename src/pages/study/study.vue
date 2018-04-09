<template>
  <div class="study">
      <div class="title">选择车型</div>
      <div class="subject_list">
        <div class="subject" v-for="(item,index) in carModel" :key="index" @click="car(index,item)">
          <div :class="{'active': index==carIndex}">{{item.vehiclType
}}</div>
        </div>
      </div>
      <div class="title">选择科目</div>
      <div class="subject_list">
        <div class="subject" v-for="(item,index) in subjectList" :key="index" @click="subjiect(index,item)">
          <div :class="{'active': index==subjectIndex}">{{item.subjectType}}</div>
        </div>
      </div>
      <div class="title">选择题数</div>
      <div class="num">
        <span class="iconfont icon-jia" @click="add(1)"></span>
        <input  type='number' pattern="[0-9]*" v-model="num">
        <span class="iconfont icon-jianqu" @click="reduce(1)"></span>
      </div>
      <div class="title">设定时长</div>
      <div class="num time">
        <span class="iconfont icon-jia" @click="add(0)"></span>
        <input  type='number' pattern="[0-9]*" v-model="time">分钟
        <span class="iconfont icon-jianqu" @click="reduce(0)"></span>
      </div>
      <div class="directions">
        <p class="directions_title">收费说明：</p>
        <p>1、学习1分钟，支付1元人民币，以此类推</p>
        <p>2、例：选择5分钟支付5元人民币</p>
      </div>
      <div class="btn" @click="confirm">确认支付</div>
      <pay :isShow="isShow" @on-close="close"></pay>
  </div>
</template>

<script>
export {default} from './studyCtr'
</script>

<style scoped>
.study{
  padding: 10px;
}
.study .title{
  font-size: 16px;
  font-weight: bold;
}
.subject_list{
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.subject_list div.subject{
  width: 50%;
}
.subject_list div.subject div{
  width: 85%;
  margin: 0 auto 10px;
  padding: 5px;
  border: 1px solid #fe9a38;
  border-radius: 20px;
  text-align: center;
  font-size: 13px;
  overflow: hidden;
}
.num{
  width: 40%;
  margin: 0 auto;
  text-align: center;
}
.num input{
  width: 40px;
  outline: none;
  border: 1px solid #ddd;
   text-align: center;
}
.num span{
  position: relative;
  top: 6px;
  font-size: 25px;
  color: #ff9935;
}
.time{
   width: 50%;
}
.time input{
  margin-right: 5px;
}
.directions{
  color: #ff9935;
}

.directions p:not(.directions_title){
  text-indent: 2em;
}
.btn{
  width: 70%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #ff9935;
  border-radius: 20px;
  margin: 10px auto 0;
  color: #fff;
}
.active{
  background-color: #ff9935;
  color: #fff;
}
</style>


