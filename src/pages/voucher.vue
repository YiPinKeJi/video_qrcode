<template>
  <div class="content">
    <img class="div0" src="../assets/bg.png">
    <div class="div1">恭喜您</div>
    <div class="div2">已看完《疫苗接种》所有课程</div>
    <div class="div3">听课凭证：{{voucherCode}}</div>
    <div class="lineHr"></div>
    <!--<div class="div4">-->
    <!--<div class="back">返回视频</div>-->
    <!--<div class="save" @click="savecanvas">保存凭证</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import {getMaxOrder} from '@/api';
  import html2canvas from 'html2canvas';

  export default {
    data() {
      return {
        voucherCode: '',
    }
    },
    methods: {
      savecanvas() {
        let canvas = document.querySelector('.content');
        let that = this;
        html2canvas(canvas, {scale: 2, logging: false, useCORS: true}).then(function (canvas) {
          let type = 'png';
          let imgData = canvas.toDataURL(type);
          // 照片格式处理
          let _fixType = function (type) {
            type = type.toLowerCase().replace(/jpg/i, 'jpeg');
            let r = type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/' + r;
          };
          imgData = imgData.replace(_fixType(type), 'image/octet-stream');
          let filename = "UUSound" + '.' + type;
          that.saveFile(imgData, filename);
        });
      },
      saveFile(data, filename) {
        let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href = data;
        save_link.download = filename;

        let event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
      },
      getVoucher() {
        getMaxOrder().then(res => {
          if (res.code == 200) {
            this.voucherCode = res.result.maxOrder;
          }
        });
      }
    },
    mounted() {
      this.getVoucher();
    }
  }
</script>
<style>
  .content {
    text-align: center;
  }

  .div0 {
    width: 100%;
    height: 200px;
    object-fit: fill;
  }

  .div1 {
    font-size: 30px;
    color: #e7a241;
    margin-top: 50px;
  }

  .div2 {
    margin-top: 20px;
    font-size: 16px;
    color: #34B2B7;
  }

  .div3 {
    font-size: 20px;
    color: #34B2B7;
    font-weight: bold;
    margin-top: 50px;
  }

  .lineHr {
    background-color: #34B2B7;
    height: 1px;
    margin: 100px 20px 0px 20px;
    padding: 0px;
  }
</style>
