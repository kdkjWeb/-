<template>
  <div>
      <div class="title1"><span class="iconfont icon-zuojiantou2" @click="goBack"></span>新闻</div>
      <div class="details">
            <p class="topTitle">{{item.drtite}}</p>
            <div class="info">
                <span class="user">{{item.druser}}</span>
                <span class="time">{{item.drdata}}</span>
            </div>
            <div class="content" ref="contentBox" v-html="item.drtext"></div>
        </div>
  </div>
</template>


<script>
export {default} from './detailsCtr'
</script>

<style scoped>
.title1{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #323232;
  color: #fff;
  z-index: 999;
}
.title1 span.iconfont{
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 25px;
}
.details{
    padding: 70px 20px 0;
}
.topTitle{
    padding-bottom: 5px;
    font-size: 16px;
    text-align: center;
}
.info{
    padding-bottom: 10px;
    text-align: center;
}
.info span{
    color: #fe9a38;
}
.info span.user{
    padding-right: 5px;
}
.info span.time{
    padding-left: 5px;
}
.content{
    text-align: left;
}
</style>

