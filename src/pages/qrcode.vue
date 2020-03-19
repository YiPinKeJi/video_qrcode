<template>
  <div>
    <div class="text">疫苗接种二维码</div>
    <vue-qr :text="downloadData.url" :margin="10" colorDark="#000" colorLight="#fff" :dotScale="1" :logoSrc="downloadData.icon"
            :logoCornerRadius	 = "10" :logoMargin="5"
            :logoScale="0.2" :size="300"></vue-qr>
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
          url:  "http://192.168.0.105:8080/#/main", //需要转化成二维码的网址
          icon: require('../assets/icon_fire_brigade_@2x.png')  //二维码中间的图片,可以不设置
        }
      }
    }
  }
</script>
<style>
  body{
    background-color: #34B2B7;
  }

  div{
    text-align: center;
  }
  .text{
    font-size: 30px;
    color: white;
    margin: 50px 0px;
  }
</style>
