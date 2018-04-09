<template>
  <div class="topBar">
      <div class="search">
          <input type="text" placeholder="请输入车牌号" v-model="searchtxt" @focus="search">
          <span class="icon iconfont icon-sousuo5"></span>
      </div>
      <div class="title">
          <div v-for="(item,index) in titleList" :key="index" @click="topBar(index)" :class="{'titleBar':index==activeIndex}">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          searchtxt: '',
          activeIndex: null,
          titleList: [
              {
                  title: '公告'
              },{
                  title: '新闻'
              },{
                  title: '学习'
              },{
                  title: '考试'
              }
          ]
      }
  },
  methods: {
      topBar(index){
         // this.activeIndex = index;
          switch(index){
              case 0:
              this.$router.push({
                  name: 'Notice'
              });
            //存入vuex
			    this.$store.commit('setTitle', this.titleList[index].title)
              break;
              case 1:
              this.$router.push({
                  name: 'News'
              });
            //存入vuex
			    this.$store.commit('setTitle', this.titleList[index].title)
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
                    this.$router.push('study')
                }
              //存入vuex
			    this.$store.commit('setTitle', this.titleList[index].title)
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
                    this.$router.push('exam')
                }
              //存入vuex
			    this.$store.commit('setTitle', this.titleList[index].title)
              break;
          }
      },
      //搜索
      search(){
          console.log(this.searchtxt)
          this.$router.push('search')
      }
  },
  computed: {
      user(){
          return this.$store.getters.getUser
        }
  },
  mounted(){
      console.log(this.user)
  }
}
</script>

<style>
.topBar{
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding-top: 10px;
}
.search{
    position: relative;
    width: 90%;
    height: 30px;
    margin: 0px auto 20px;
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
.title{
    display: flex;
    display: -webkit-flex;
    padding-bottom: 5px;
    font-size: 16px;
}
.title div{
    position: relative;
    flex: 1;
    text-align: center;
}
.titleBar::after{
    position: absolute;
    left: 35%;
    display: block;
    content: '';
    width: 30%;
    height: 3px;
    background: #ff9935;
}
</style>
