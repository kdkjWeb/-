<template>
  <div class="face">
     <div class="title1">{{this.$route.params.title?'人脸识别':'人脸采集'}}</div>
      <h3 class="h3">人脸识别认证</h3>
      <p>请对准摄像头，确保图像清晰</p>
      <div class="video_con" :style="{height:height}">
        <video id="myVideo" width="100%" height="100%" autoplay></video>
      </div>
      <div class="btn" @click="getPhoto">开始识别</div>
  </div>
</template>

<script>
export {default} from './faceRecognitionCtr'
</script>

<style scoped>
.title1{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #323232;
  color: #fff;
}
.h3{
  font-size: 16px;
  padding: 30px 0 20px 30px;
  font-weight: bold;
}
.face p{
  text-align: center;
}
.video_con{
  width: 65%;
  height: 100%;
  border: 1px solid #ddd;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
}
.btn{
  width: 70%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #ff9935;
  color: #fff;
  border-radius: 20px;
  margin: 0 auto;
}
#myVideo{
  background-color: red;
  object-fit: fill;
}
</style>
