<template>
  <div class="study">
      <div class="title">选择车型</div>
      <div class="subject_list">
        <div class="subject" v-for="(item,index) in carModel" :key="index" @click="car(index,item)">
          <div :class="{'active': index==carIndex}">{{item.vehiclType}}</div>
        </div>
      </div>
      <div class="title">选择科目</div>
      <div class="subject_list">
        <div class="subject" v-for="(item,index) in subjectList" :key="index" @click="subjiect(index,item)">
          <div :class="{'active': index==subjectIndex}">{{item.subjectType}}</div>
        </div>
      </div>
      <div class="directions">
        <p class="directions_title">收费说明：</p>
        <p>1、每次考试收费50元人民币</p>
        <p>2、考试时间30分钟</p>
      </div>
      <div class="btn" @click="confirm">确认支付</div>
      <pay :isShow="isShow" @on-close="close"></pay>
  </div>
</template>

<script>
export {default} from './examCtr'
</script>

<style scoped>
.study{
  padding: 10px;
}
.study .title{
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 15px;
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
  margin: 0 auto 20px;
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

