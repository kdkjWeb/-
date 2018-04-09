export default{
    data() {
        return {
            height: '',
        }
    },
    methods:{

    },
    created(){
        this.height = (window.innerHeight -200) + 'px';
    },
    mounted(){
        //监听窗口改变重置高度
        window.addEventListener('resize',()=>{
            this.height = (window.innerHeight -200) + 'px';
        })
        
    },
    computed: {
        title(){
			return this.$store.getters.getTitle
		}
    }
}