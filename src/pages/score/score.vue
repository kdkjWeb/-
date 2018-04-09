<template>
  <div class="score">
      <div class="title1">
          <!-- <span class="iconfont icon-zuojiantou2 icon" @click="goBack"></span> -->
          <span>{{title}}成绩</span>
     </div>
     <ul class="user">
       <li>学员姓名: <span>{{user.usname}}</span></li>
       <li>学习车型: <span>{{studyInfo.type}}</span></li>
       <li>学习科目: <span>{{studyInfo.subject}}</span></li>
     </ul>
      <div class="signature">
        <span class="iconfont" @click="signature" :class="isOk?'icon-duoxuan-yixuan':'icon-duoxuanweixuan'"></span>学习签名
        <div class="btn"  @click="goBack">确定</div>
      </div>
      
      <!-- <div class="again">
          <p>重新考试</p>
          <p>您还有剩余时间，请不要浪费哦</p>
      </div> -->
     <!-- 分数 -->
     <div class="maxScore">{{score}}分</div>
  </div>
</template>

<script>
export {default} from './scoreCtr'
</script>


<style scoped>
.score{
  position: relative;
  background-color: #eee;
  height: 100%;
}
.title1{
  /* position: fixed; */
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #323232;
  color: #fff;
}
.title1 span.icon{
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 25px;
}
.user{
  background-color: #fff;
}
.user li{
  font-size: 15px;
  padding: 15px 15px;
}
.user li span{
  font-size: 16px;
  font-weight: bold;
}
.maxScore{
  position: absolute;
  top: 65px;
  right: 30px;
  font-size: 24px;
  color: #ff9935;
}
.again{
  background-color: #fff;
  margin-top: 20px;
  padding: 10px 20px;
}
.again p:first-child{
  font-size: 24px;
}
.signature{
  background-color: #fff;
  text-align: center;
  padding: 20px;
}
.signature .iconfont{
  font-size: 20px;
  vertical-align: middle;
  padding-right: 5px;
}
.btn{
  width: 100px;
  line-height: 30px;
  background-color: #ff9935;
  margin: 10px auto;
  text-align: center;
  border-radius: 15px;
  color: #fff;
}
</style>
