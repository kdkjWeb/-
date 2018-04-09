<template>
  <div class="searchModel">
      <div class="title1">
          <span class="iconfont icon-zuojiantou2 icon" @click="goBack"></span>
          <span>车辆查询</span>
     </div> 
     <div style="height: 50px"></div>
      <div class="top">
          <div class="search">
            <input type="text" placeholder="请输入车牌号" v-model="searchTxt" @keyup="searchUp">
            <span class="icon iconfont icon-sousuo5"  @click="search"></span>
        </div>
      </div>
      <div class="td" v-if="searchList.length>0">
          <div class="tr">车牌号</div>
          <div class="tr">机架号</div>
          <div class="tr">所属公司</div>
      </div>
      <div class="td" v-for="(item,index) in searchList" :key="index">
          <div class="tr">{{item.velice}}</div>
          <div class="tr">{{item.verack}}</div>
          <div class="tr">{{item.vecomp}}</div>
      </div>
      <h4 v-if="searchList.length == 0">{{notice}}</h4>
  </div>
</template>

<script>
export {default} from './searchCtr'
</script>

<style scoped>
h4{
    text-align: center;
}
.top{
    width: 100%;
}
.search{
    position: relative;
    width: 90%;
    height: 30px;
    margin: 10px auto 20px;
}
.search input{
    width: calc(100% - 10px);
    height: 100%;
    outline: none;
    padding-left: 10px;
    border: 2px solid #ff9935;
    border-radius: 20px;
}
.search span.icon{
    position: absolute;
    top: 2px;
    right: -3px;
    display: inline-block;
    height: 100%;
    width: 70px;
    background-color: #ff9935;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-size: 20px;
}



.title1{
  position: fixed;
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
.title1 span.icon1{
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 25px;
}


.td{
    display: flex;
    display: -webkit-flex;
    text-align: center;
    border: 1px solid #ddd;
    border-bottom: none;
    width: 90%;
    margin: 0 auto;
}
.tr{
    border-right: 1px solid #ddd;
    line-height: 30px;
    overflow: hidden;
}
.tr:first-child{
     flex: 2;
}
.tr:nth-child(2){
    flex: 3;
}
.tr:last-child{
    flex: 2;
    border-right: none;
}
.td:last-child{
    border-bottom: 1px solid #ddd;
}
</style>

