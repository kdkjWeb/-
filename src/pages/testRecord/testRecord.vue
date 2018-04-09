<template>
  <div class="test">
      <!-- <div class="title1">{{title ? title : '考试记录'}}</div>
      <top-bar></top-bar> -->
      <div class="main" :style="{height: height}">
            <router-view/>
        </div>
  </div>
</template>

<script>
export {default} from './testRecordCtr'
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
.main{
    width: 100%;
    overflow: auto;
}
</style>

