<template>
  <div class="test">
      <div class="title">个人考试记录</div>
      <div class="tr">
        <div class="td">科目</div>
        <div class="td">分数</div>
        <div class="td">学习时间</div>
      </div>
      <div class="tr" v-for="(item,index) in testList" :key="index">
        <div class="td">{{item.scmode}}-{{item.scsubj}}</div>
        <div class="td">{{item.scored}}</div>
        <div class="td">{{item.scdata}}</div>
      </div>
  </div>
</template>

<script>
export {default} from './testCtr'
</script>


<style scoped>
.title{
  font-size: 16px;
  padding: 10px 0 10px 20px;
  font-weight: bold;
}

.tr{
  display: flex;
  display: -webkit-flex;
}
.tr .td{
  text-align: center;
  height: 35px;
  line-height: 35px
}
.tr .td:nth-child(1){
  flex: 6
}
.tr .td:nth-child(2){
  flex: 3
}
.tr .td:nth-child(3){
  flex: 4
}
.tr:nth-child(even){
  background-color: #eeeeee;
}
</style>
