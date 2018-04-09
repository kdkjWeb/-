export default{
    data(){
        return {
            item: {}
        }
    },
    mounted(){
        this.item = this.$route.params
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    updated(){
        var img = new Image();
        var len = this.$refs.contentBox.querySelectorAll("img");
        len.forEach((e)=>{
        img.src = e.src;
        var k = setInterval(()=>{
            if(img.width != 0 ) {
              if(img.width >= this.wid) {
                e.style.width = "100%";
              }else {
                e.style.width = img.width +"px";
              }
              clearInterval(k);
            }
          },0);
        });
    }
}