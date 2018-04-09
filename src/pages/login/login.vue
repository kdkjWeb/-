<template>
  <div class="login">
      <!-- <div class="login_title">{{title}}</div> -->
      <div class="login_model">
        <div class="title">登录</div>
        <input type="text" v-model="user.name" placeholder="请输入学习编号或身份证号">
        <input type="password" v-model="user.pas" placeholder="请输入密码">
        <div class="login_btn" @click="loginBtn">确认登录</div>
      </div>
  </div>
</template>


<script>
export {default} from './loginCtr'
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

