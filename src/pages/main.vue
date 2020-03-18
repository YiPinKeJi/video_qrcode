<template>
  <div>
    <div class="div-video">
      <video id="video" controls src="../../static/test.mp4" poster="../../static/1584432576(1).jpg"
             x5-playsinline></video>
    </div>
    <div class="div-title">
      <div class="title">
        课程章节
      </div>
    </div>
    <div class="div-item" v-for="item of videoData" :key="item">
      <div class="item">
        <div class="number">{{item.num}}</div>
        <div class="div-text">
          <div class="text">{{item.title}}</div>
          <div class="brief">{{item.time}}</div>
        </div>
        <div class="div-state">
          <img class="img-state"
               :src="item.state == '未完成' ? require('../assets/no.png') : require('../assets/yes.png')">
          <div class="text-state">{{item.state}}</div>
        </div>
      </div>
      <div class="line"></div>
    </div>

    <div class="button" @click="buildVoucher">
      生成观看凭证
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        videoData: [{
          num: "01",
          title: "预防接种的重要性",
          time: "04分39秒",
          state: "未完成",
        },
          {
            num: "02",
            title: "接种疫苗注意事项",
            time: "04分54秒",
            state: "未完成",
          },
          {
            num: "03",
            title: "疫苗可以延迟接种吗",
            time: "03分20秒",
            state: "已完成",
          }
        ]
      }
    },
    methods: {
      //生成听课凭证
      buildVoucher() {
        this.$router.push({path: '/voucher'});
      },

    },
    mounted() {
      var resetTime = 0; // 拖动后重置播放时间
      var curTime = 0;  // 当前播放时间
      var vd = document.getElementById("video"); //获取video对象
      var getCurTime = localStorage.getItem('remTime'); //获取本地存储
      if (getCurTime > 0.1) {
        curTime = getCurTime;
        resetTime = getCurTime;
        vd.addEventListener('play', function () {
          setTimeout(function () {
            vd.currentTime = getCurTime;
            setInterval(timer, 100)
          }, 2000)
        })
      } else {
        vd.play();
        setInterval(timer, 100)
      }

      // 定时器
      function timer() {
        curTime = vd.currentTime;
        var apartTime = curTime - resetTime;
        if (apartTime > 2) {
          vd.currentTime = resetTime;
        } else {
          resetTime = curTime;
        }
        this.curTime = curTime;
      }

      vd.addEventListener('pause', function () {
        localStorage.setItem('remTime', this.curTime);
      })
    }
  }
</script>
<style>
  * {
    font-size: 14px;
  }

  #video {
    width: 100%;
    object-fit: fill;
    background-color: #34B2B7;
    color: #34B2B7;
    padding: 0px;
    margin: 0px;
  }

  .div-title {
    padding: 0px;
    margin: 0px;
  }

  .title {
    font-size: 14px;
    height: 50px;
    background-color: #eeeeee;
    line-height: 50px;
    text-align: left;
    padding-left: 30px;
  }

  .number {
    width: 20px;
    height: 18px;
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 5px;
    border-radius: 50%;
    background-color: #34B2B7;
    margin: auto 0;
  }

  .div-item {
    margin: 10px 10px 10px 20px;

  }

  .div-text {
    margin: auto 0;
    width: 100%;
    padding: 0px 10px;
  }

  .div-state {
    width: 100px;
    padding-top: 5px;
    text-align: center;
  }

  .item {
    display: flex;
    margin: 20px 0px;
  }

  .text {
    font-size: 15px;
  }

  .brief {
    font-size: 12px;
    color: gray;
  }

  .img-state {
    width: 18px;
    height: 18px;
  }

  .text-state {
    color: gray;
    font-size: 12px;
  }

  .line {
    background-color: #d7e7e6;
    height: 1px;
    margin: 0px;
  }

  .video-title {
    background-color: white;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    border-bottom-color: #eeeeee;
    border-bottom-width: 1px;
    text-align: left;
    padding-left: 30px;
  }

  .button {
    color: #eeeeee;
    height: 55px;
    float: bottom;
    line-height: 55px;
    font-size: 15px;
    text-align: center;
    background-color: #34B2B7;
    position: absolute;
    bottom: 0;
    width: 100%;

  }
</style>
