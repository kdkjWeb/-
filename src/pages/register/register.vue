<template>
  <div class="login">
      <!-- <div class="login_title">注册</div> -->
      <div class="login_model">
        <div class="title">注册</div>
        <input type="text" placeholder="请输入学习编号" v-model="user.number">
        <input type="text" placeholder="请输入姓名" v-model="user.name">
        <input type="text" placeholder="请输入身份证号" v-model="user.idCard">
        <input type="text" placeholder="请输入车牌号" v-model="user.numberPlate">
        <input type="password" placeholder="请输入密码" v-model="user.pas">
        <input type="password" placeholder="确认密码" v-model="user.sucessPas">
        <div class="login_btn" @click="register">立即注册</div>
      </div>
  </div>
</template>


<script>
export {default} from './registerCtr'
</script>

<style scoped>
.login_title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #323232;
  color: #fff;
}
.login_model{
  width: 80%;
  margin: 5px auto;
}
.login_model .title{
  font-size: 20px;
  /* padding-bottom: 20px; */
}
.login_model input{
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.login_model .login_btn{
  width: 80%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  background-color: #ff9935;
  margin: 20px auto 0;
}
</style>



