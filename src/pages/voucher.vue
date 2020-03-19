<template>
  <div class="content">
    <img class="div0" src="../../static/banner_1.jpg">
    <div class="div1">恭喜您</div>
    <div class="div2">已看完《疫苗接种》所有课程</div>
    <div class="div3">听课凭证：XAWK000001</div>
    <div class="div4">
      <div class="back">返回视频</div>
      <div class="save" @click="savecanvas">保存凭证</div>
    </div>
  </div>
</template>

<script>
  import {getMaxOrder} from '@/api';
  import html2canvas from 'html2canvas';

  export default {
    data() {
      return {}
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
        getMaxOrder(queryParams).then(res => {
          if (res.code == 200) {

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

  .div4 {
    display: flex;
    text-align: center;
    padding-top: 50px;
    width: 100%;
  }

  .back {
    font-size: 13px;
    width: 80px;
    line-height: 35px;
    border-radius: 5px;
    background-color: #cccccc;
    color: #565656;
    margin: 0 auto;
  }

  .save {
    font-size: 13px;
    width: 80px;
    background-color: #34B2B7;
    line-height: 35px;
    border-radius: 5px;
    margin: 0 auto;
    color: white;
  }
</style>
