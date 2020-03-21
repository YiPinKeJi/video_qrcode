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

  export default {
    data() {
      return {
        voucherCode: '',
    }
    },
    methods: {
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
