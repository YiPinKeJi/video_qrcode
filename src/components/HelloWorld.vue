<template>
  <div>

    <div class="qrcode" ref="http://www.baidu.com"></div>
  </div>
</template>

<script>
  export default {
    name: 'qrcode',
    methods: {
      creatQrCode() {
        var qrcode = new QRCode(this.$refs.qrCodeUrl, {
          text: 'xxxx', // 需要转换为二维码的内容
          width: 100,
          height: 100,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        })
      },
    },
    mounted() {
      this.creatQrCode();
    },
  }
</script>

<style >

</style>
