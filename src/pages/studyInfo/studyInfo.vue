<template>
  <div class="studyInfo">
      <h4 class="h4">学习信息</h4>
      <ul class="user_info">
         <li>学员姓名： <span>{{user.usname}}</span></li>
         <li>考试车型： <span>{{studyInfo.type}}</span></li>
         <li>考试科目： <span>{{studyInfo.subject}}</span></li>
         <li v-show="studyInfo.num">选择题数： <span>{{studyInfo.num}}</span></li>
         <li v-show="studyInfo.time">设定时长： <span>{{studyInfo.time}}</span></li>
      </ul>
      <div class="notice">将在<span>{{timeNum}}</span>s后开始<span>{{studyInfo.num||studyInfo.time? '学习':'考试'}}</span></div>
  </div>
</template>

<script>
export {default} from './studyInfoCtr'
</script>

<style scoped>
.h4{
    padding: 10px 0 10px 20px;
    font-size: 16px;
    font-weight: bold;
}
.user_info{
    width: 70%;
    margin: 0 auto;
    border: 1px solid #a0a0a0;
    background-color: #eeeeee;
    text-align: center;
}
.user_info li{
    padding: 15px 0;
}
.notice{
    width: 100%;
    text-align: center;
    padding-top: 20px;
}
.notice span:first-child{
    color: red;
    font-size: 16px;
}
</style>

