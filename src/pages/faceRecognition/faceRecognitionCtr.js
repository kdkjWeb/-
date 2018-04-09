export default{
    data() {
        return {
            height: ''
        }
    },
    methods: {
        //访问用户媒体设备的兼容方法
	    /*getUserMedia(constraints, success, error){
            if (navigator.mediaDevices.getUserMedia) {
              //最新的标准API
              navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
            } else if (navigator.webkitGetUserMedia) {
              //webkit核心浏览器
              navigator.webkitGetUserMedia(constraints,success, error)
            } else if (navigator.mozGetUserMedia) {
              //firfox浏览器
              navigator.mozGetUserMedia(constraints, success, error);
            } else if (navigator.getUserMedia) {
              //旧版API
              navigator.getUserMedia(constraints, success, error);
            }
          },
          //调用摄像头成功的回调函数
        sucessFn(stream) {
            let video = document.getElementById('myVideo');
            //兼容webkit核心浏览器
            let CompatibleURL = window.URL || window.webkitURL || window.mozURL || window.msURL;
            //将视频流设置为video元素的源
            console.log(stream);
            video.srcObject = stream;
          },
          //调用摄像头失败
        errorFn(error) {
            console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
          },
        //点击打开摄像头
        start(){
            navigator.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
          if (navigator.getUserMedia) {
              //调用用户媒体设备, 访问摄像头
              this.getUserMedia({video: true}, this.sucessFn, this.errorFn);
            } else {
              alert('不支持访问用户媒体');
            }
        },*/

        // 拍照
        captureImage(){
            var cmr = plus.camera.getCamera();
            var res = cmr.supportedImageResolutions[0];
            var fmt = cmr.supportedImageFormats[0];
            console.log("Resolution: "+res+", Format: "+fmt);
            cmr.captureImage( function( path ){
                    alert( "Capture image success: " + path );  
                },
                function( error ) {
                    alert( "Capture image failed: " + error.message );
                },
                {resolution:res,format:fmt}
            );
          },

        //拿到图片
        getPhoto(){

        }
    },
    created() {
		this.height = (window.innerHeight-320) + 'px';
    },
    mounted() {		
		// 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight-320) + 'px';
        })
        //自动打开摄像头
        //this.start();
        //this.captureImage()
	},
}