export default{
    data() {
        return {
            searchTxt: '',
            searchList: [],
            notice: ''
        }
    },
    methods: {
        goBack(){
            this.$router.push('notice')
        },
        searchUp(){
            if(this.searchTxt == ''){
                console.log(666)
                this.searchList = []
                this.notice = '暂无相关数据'
                return;
            }
            if(!this.searchTxt){
                return;
            }
            this.$get('vehicl/queryvehicl',{
                velice: this.searchTxt
            }).then(res=>{
                // console.log(res)
                if(res.code == 0){
                    this.searchList = res.data
                }else if(res.msg == '暂无数据'){
                    this.notice = '暂无相关数据'
                }
            },err=>{
                this.$toast('服务器异常')
            })
        },
        search(){
            console.log(this.searchTxt)
            if(!this.searchTxt){
                return;
            }
            this.$get('vehicl/queryvehicl',{
                velice: this.searchTxt
            }).then(res=>{
                // console.log(res)
                if(res.code == 0){
                    this.searchList = res.data
                }else if(res.msg == '暂无数据'){
                    this.notice = '暂无相关数据'
                }
            },err=>{
                this.$toast('服务器异常')
            })
        }
    }
}