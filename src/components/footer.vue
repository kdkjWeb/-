<template>
  <div class="footer">
      <div class="tabBar" v-for="(item,index) in footerList" :key="index" 
      @click="tabBar(index,item)" :class="{'active':index == activeIndex}">
        <span class="iconfont icon" :class="item.icon"></span>
        {{item.title}}
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
      return {
        activeIndex: null,
        footerList: [
          {
            title: '登录',
            icon: 'icon-zhuceyaoqing'
          },{
            title: '注册',
            icon: 'icon-login-settings'
          },{
            title: '学习记录',
            icon: 'icon-book'
          },{
            title: '考试记录',
            icon: 'icon-datijilu'
          }
        ]
      }
  },
  methods:{
      tabBar(index,item){
        this.activeIndex = index;
        switch(index){
          case 0:
          this.$router.push('login')
          //存入vuex
          this.$store.commit('setTitle', this.footerList[index].title)
          break;
          case 1: 
          this.$router.push('register')
          //存入vuex
			    this.$store.commit('setTitle', this.footerList[index].title)
          break;
          case 2: 
          if(!this.user.usnumb){
            this.$toast('请先登录！')
            setTimeout(()=>{
              this.$router.push({
                path: 'login',
              });
            },2000);
          }else{
            this.$router.push('learn')
          }
          //存入vuex
			    this.$store.commit('setTitle', this.footerList[index].title)
          break;
          case 3: 
          if(!this.user.usnumb){
            this.$toast('请先登录！')
            setTimeout(()=>{
              this.$router.push({
                path: 'login',
              });
            },2000);
          }else{
            this.$router.push('test')
          }
           //存入vuex
          this.$store.commit('setTitle', this.footerList[index].title)
          break;
        }
      }
  },
  computed: {
        title(){
          return this.$store.getters.getTitle
        },
        user(){
          return this.$store.getters.getUser
        }
    }
}
</script>


<style>
  .footer span.icon{
    display: block;
    font-size: 24px;
  }
  .footer{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    display: -webkit-flex;
    width: 100%;
    z-index: 99;
    border-top: 1px solid #eee;
  }
  .footer .tabBar{
    flex: 1;
    text-align: center;
  }
  .active{
    color: #ff9935;
  }
</style>
