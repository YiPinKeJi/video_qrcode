<template>
  <div class="qr_content">
    <div class="qr_div">
      <div class="qr_text">疫苗接种二维码</div>
      <vue-qr :text="downloadData.url" :margin="10" colorDark="#000" colorLight="#fff" :dotScale="1"
              :logoSrc="downloadData.icon"
              :logoCornerRadius="5"
              :logoScale="0.2" :size="200"></vue-qr>
    </div>
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
          url: window.route.remoteUrl, //需要转化成二维码的网址
          icon: require('../assets/icon_fire_brigade_@2x.png')  //二维码中间的图片,可以不设置
        }
      }
    }
  }
</script>
<style>
  .qr_content {
    background-color: #34B2B7;
    height: 100%;
  }

  .qr_div {
    text-align: center;
  }

  .qr_text {
    font-size: 20px;
    padding: 50px 0px 30px 0px;
    color: white;
  }
</style>
