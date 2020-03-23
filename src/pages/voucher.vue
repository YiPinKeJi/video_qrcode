<template>
  <div class="vou_content">
    <img class="div0" src="../assets/logo.png">
    <div class="div1">恭喜您</div>
    <div class="div2">已接受完<br/>"中国健康宝贝计划 "<br/>家长教育课堂</div>
    <div class="div3">(疫苗接种知识)</div>
    <div class="div4">听/课/凭/证</div>
    <div class="div5">{{voucherCode}}</div>
    <div class="div6">*听课凭证为您本阶段的学习证明<br/>请截图保存，必要时请出示</div>
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
  .vou_content {
    text-align: center;
    background-color: #008d7c;
    color: white;
    text-align: center;
    height: 100%;
  }

  .div0 {
    width: 95px;
    height: 100px;
    margin: 50px 0px 10px 0px;
  }

  .div1 {
    font-size: 40px;
    font-style: oblique;
    font-weight: bold;
    font-family: "Britannic Bold";
    color: white;
  }

  .div2 {
    font-style: italic;
    font-size: 26px;
    margin-top: 20px;
    font-weight: bold;
    color: white;
  }

  .div3 {
    font-size: 22px;
    font-weight: bold;
    color: white;
  }

  .div4 {
    font-size: 18px;
    margin-top: 50px;
    font-weight: bold;
    color: white;
  }

  .div5 {
    font-size: 22px;
    width: 200px;
    line-height: 40px;
    color: black;
    margin: 15px auto;
    border: 1px solid white;
  }

  .div6 {
    font-size: 12px;
    margin: 10px auto;
    color: white;
  }

</style>
