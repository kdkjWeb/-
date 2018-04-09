<template>
  <div class="index">
    <div class="title1">{{title ? title:'公告'}}</div>
    <top-bar></top-bar>
        <div class="main" :style="{height: height}">
            <router-view/>
        </div>
      <kd-footer></kd-footer>
  </div>
</template>

<script>
export {default} from './indexCtr'
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

