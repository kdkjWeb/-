// 整个项目的路由
const Login = ()=>import('@/pages/login/login'),   //登录
      Register = ()=>import('@/pages/register/register'),   //注册
      Index = ()=>import('@/pages/index/index'),  //首页
      LearnRecord = ()=>import('@/pages/learnRecord/learnRecord'),   //学习记录
      TestRecord = ()=>import('@/pages/testRecord/testRecord'),   //考试记录
      Notice = ()=>import('@/pages/notice/notice'),    //公告
      News = ()=>import('@/pages/news/news'),   //新闻
      Study = ()=>import('@/pages/study/study'),   //学习
      Exam = ()=>import('@/pages/exam/exam'),    //考试
      Test = ()=>import('@/pages/test/test'),    //考试记录里面的考试记录
      Learn = ()=>import('@/pages/learn/learn'),   //学习记录里面的学习记录
      Details = ()=>import('@/pages/details/details'),    //新闻公告详情页面
      StudyInfo = ()=>import('@/pages/studyInfo/studyInfo'),    //付款成功的详细信息页面
      DoQuestions = ()=>import('@/pages/doQuestions/doQuestions'),    //做题的页面
      RaceRecognition = ()=>import('@/pages/faceRecognition/faceRecognition'),    //人脸识别
      Score = ()=>import('@/pages/score/score'),    //总分
      Search = ()=>import('@/pages/search/search')   //搜索

export default {
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            redirect: 'notice',
            children: [
                {
                    path: '/login',
                    name: 'Login',
                    component: Login
                },{
                    path: '/register',
                    name: 'Register',
                    component: Register
                },
                {
                    path: '/learn',
                    name: 'Learn',
                    component: Learn
                },{
                    path: '/notice',
                    name: 'Notice',
                    component: Notice
                },{
                    path: '/news',
                    name: 'News',
                    component: News
                },{
                    path: '/study',
                    name: 'Study',
                    component: Study
                },{
                    path: '/exam',
                    name: 'Exam',
                    component: Exam
                },{
                    path: '/studyInfo',
                    name: 'StudyInfo',
                    component: StudyInfo
                },{
                    path: '/test',
                    name: 'Test',
                    component: Test
                }
            ]
        },{
            path: '/details',
            name :'Details',
            component: Details
        },{
            path: '/doQuestions',
            name: 'DoQuestions',
            component: DoQuestions
        },{
            path: '/score',
            name: 'Score',
            component: Score
        },{
            path: '/search',
            name: 'Search',
            component: Search
        }
    ]
}


/* 
routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            redirect: 'learnRecord',
            children: [
                {
                    path: '/learnRecord',
                    name: 'LearnRecord',
                    component: LearnRecord,
                    redirect: 'notice',
                    children: [
                        {
                            path: '/login',
                            name: 'Login',
                            component: Login
                        },{
                            path: '/register',
                            name: 'Register',
                            component: Register
                        },
                        {
                            path: '/learn',
                            name: 'Learn',
                            component: Learn
                        },{
                            path: '/notice',
                            name: 'Notice',
                            component: Notice
                        },{
                            path: '/news',
                            name: 'News',
                            component: News
                        },{
                            path: '/study',
                            name: 'Study',
                            component: Study
                        },{
                            path: '/exam',
                            name: 'Exam',
                            component: Exam
                        },{
                            path: '/studyInfo',
                            name: 'StudyInfo',
                            component: StudyInfo
                        }
                    ]
                },{
                    path: '/testRecord',
                    name: 'TestRecord',
                    component: TestRecord,
                    redirect: 'test',
                    children: [
                        {
                            path: '/test',
                            name: 'Test',
                            component: Test
                        }
                    ]
                },{
                    path: '/raceRecognition',
                    name: 'RaceRecognition',
                    component: RaceRecognition
                }
            ]
        },{
            path: '/details',
            name :'Details',
            component: Details
        },{
            path: '/doQuestions',
            name: 'DoQuestions',
            component: DoQuestions
        }
    ]
*/