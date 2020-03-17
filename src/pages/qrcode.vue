<template>
  <div>
    <vue-qr :text="downloadData.url" :margin="10" colorDark="#000" colorLight="#fff" :dotScale="1" :logoSrc="downloadData.icon"
            :logoCornerRadius	 = "10" :logoMargin="2"
            :logoScale="0.2" :size="200"></vue-qr>
  </div>
</template>

<script>
  import vueQr from 'vue-qr';

  export default {
    components: {
      vueQr
    },
    data() {
      return {
        downloadData: {
          url:  "http://192.168.1.236:8080/#/main", //需要转化成二维码的网址
          icon: require('../assets/icon_fire_brigade_@2x.png')  //二维码中间的图片,可以不设置
        }
      }
    }
  }
</script>
<style>
  body{
    background-color: #2c3e50;
  }

  .qr{

  }
</style>
