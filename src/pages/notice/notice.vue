<template>
  <div class="notice">
      <div class="notice_list" v-for="(item,index) in noticeList" :key="index" @click="details(item)">
        <h4 class="h4">{{item.drtite}}</h4>
        <!-- <div class="content" v-html="item.drtext"></div> -->
        <div class="info">
          <span class="user">{{item.druser}}</span>
          <span class="time">{{item.drdata}}</span>
        </div>
      </div> 
  </div>
</template>

<script>
export {default} from './noticeCtr'
</script>

<style scoped>
.notice_list{
  border-bottom: 1px solid #ddd;
  padding: 10px;
}
.h4{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 5px;
  font-size: 16px;
}
.content{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.info{
  padding-top: 5px;
  color: #dd2122;
}
.info .time{
  padding-left: 10px;
}
</style>

