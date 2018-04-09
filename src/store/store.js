import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';
Vue.use(Vuex);

const state = {
    //学习时间
    time: '',
    //头部显示的title
    title: '',
    //选择学习类型参数
    studyInfo: {},
    //设置用户信息
    user: {},
    //设置考试科目
    subject: '',
    //设置总分
    score: 0,
    //图片地址
    imgSrc: 'http://192.168.20.133:8080/drive'
}

export default new Vuex.Store({
    state,
    getters: {
        //获取头部显示的title里面的数据
        getTitle: state => state.title,
        //获取学习记录的用户选择信息
        getStudyInfo: state => state.studyInfo,
        //获取后台返回的用户信息
        getUser: state=>state.user,
        //获取考试科目
        getSubject: state=>state.subject,
        //获取总分
        getScore: state=>state.score,
        //获取图片地址
        getImgSrc: state=>state.imgSrc,
        //获取学习时间
        getTime: state=>state.time
    },
    mutations: {
        //设置头部显示的title里面的数据
        setTitle (state,data){
            state.title = data
        },
        //设置学习记录的用户选择信息
        setStudyInfo (state,data){
            state.studyInfo = data
        },
        //设置用户信息保存
        setUser(state,data){
            state.user = data
        },
        //设置考试科目
        setSubject(state,data){
            state.subject = data
        },
        //设置答题正确后总分加一
        addScore(state){
            state.score ++;
        },
        //设置学习时间
        setTime(state,data){
            state.time = data
        }
        
    }
})