<template>
  <div class="main">
    <div class="div-video">
      <video id="video" controls :src="currentSrc" :poster="currentPicture"
             x5-playsinline :playsinline="true"></video>
    </div>
    <div class="div-title">
      <img class="menu" src="../assets/menu.png">
      <div class="title">
        课程章节
      </div>
    </div>
    <div class="div-item" v-for="(item, i) of videoData" :key="item.id" @click="playVideo(item)">
      <div class="item">
        <div class="number">{{"0"+(i+1)}}</div>
        <div class="div-text">
          <div class="text">{{item.name}}</div>
          <div class="brief">{{item.duration}}</div>
        </div>
        <div class="div-state">
          <img class="img-state" v-if="item.progress == 0" src="../assets/no.png">
          <img class="img-state" v-else-if="item.progress == 100" src="../assets/yes.png">
          <img class="img-state" v-else src="../assets/ing.png">
          <div class="text-state" v-if="item.progress == 0">未完成</div>
          <div class="text-state" v-else-if="item.progress == 100">已完成</div>
          <div class="text-stateing" v-else>正在播放</div>
        </div>
      </div>
      <div class="line"></div>
    </div>

    <div class="button" @click="buildVoucher(0)">
      生成观看凭证
    </div>
  </div>
</template>

<script>
  import {getVideoList, addCount} from '@/api';

  export default {
    data() {
      return {
        videoData: [],
        currentSrc: '',
        currentPicture: ''
      }
    },
    methods: {
      getVideo() {
        const queryParams = {account: "admin"};
        getVideoList(queryParams).then(res => {
          if (res.code == 200) {
            for (let i = 0; i < res.result.length; i++) {
              res.result[i].duration = Math.floor(res.result[i].duration / 60) + "分" + Math.floor(res.result[i].duration % 60) + "秒";
              res.result[i].path = window.file.remoteUrl + res.result[i].path;
              res.result[i].coverurl = window.file.remoteUrl + res.result[i].coverurl;
            }
            this.videoData = res.result;
            this.currentSrc = this.videoData[0].path;
            this.currentPicture = this.videoData[0].coverurl;
          }
        });
      },
      //播放视频
      playVideo(item) {
        let vd = document.getElementById("video");
        if (item.path != vd.src) {
          vd.src = item.path;
          vd.play();
        }
      },
      //控制视频
      videoControl() {
        const that = this;
        let resetTime = 0; // 拖动后重置播放时间
        let curTime = 0;  // 当前播放时间
        let vd = document.getElementById("video"); //获取video对象
        let getCurTime = localStorage.getItem('remTime'); //获取本地存储
        if (getCurTime > 0.1) {
          curTime = getCurTime;
          resetTime = getCurTime;
        } else {
          vd.play();
          setInterval(timer, 100)
        }

        // 定时器
        function timer() {
          curTime = vd.currentTime;
          let apartTime = curTime - resetTime;
          if (apartTime > 2) {
            vd.currentTime = resetTime;
          } else {
            resetTime = curTime;
          }
          this.curTime = curTime;
        }

        //视频播放
        vd.addEventListener('play', function () {
          for (let i = 0; i < that.videoData.length; i++) {
            if (that.videoData[i].path == vd.src) {
              that.videoData[i].progress = 50;
            } else {
              if (that.videoData[i].progress != 100) {
                that.videoData[i].progress = 0;
              }
            }
          }
        })
        //视频暂停
        vd.addEventListener('pause', function () {
          localStorage.setItem('remTime', this.curTime);
        })
        //视频结束播放
        vd.addEventListener('ended', function () {
          let item;
          let allFinish = true;
          for (let i = 0; i < that.videoData.length; i++) {
            if (that.videoData[i].path == vd.src) {
              that.videoData[i].progress = 100;
              //播放完自动播放一下个视频
              if (i < that.videoData.length - 1) {
                if (that.videoData[i + 1].progress != 100) {
                  item = that.videoData[i + 1];
                }
              }
            }
            if (that.videoData[i].progress) {
              allFinish = false;
            }
          }
          //播放完成如果有下一个则自动播放下一个视频
          if (item != undefined) {
            that.playVideo(item);
          }
          //检测所有视频播放完成去生成凭证
          if (allFinish) {
            that.buildVoucher(true);
          }
        }, false);
      },
      //生成听课凭证
      buildVoucher(finish) {
        if (finish) {
          this.addCount();
          this.$router.push({path: '/voucher'});
        } else {
          alert("您需要看完所有视频，才可生成凭证");
        }
      },
      addCount() {
        addCount().then(res => {
          if (res.code == 200) {
            this.$router.push({path: '/voucher'});
          }
        });
      }
    },
    mounted() {
      this.getVideo();
      this.videoControl();
    }
  }
</script>
<style>
  .main {
    background-color: white;
  }

  * {
    font-size: 14px;
    color: #34B2B7;
  }

  .div-video {
    object-fit: fill;
    padding: 0px;
    height: 200px;
    background: #eeeeee;
  }

  .menu {
    width: 18px;
    height: 18px;
    margin: auto 10px 17px 20px;
  }

  #video {
    width: 100%;
    object-fit: fill;
    height: 200px;
    padding: 0px;
    margin: 0px;
  }

  .div-title {
    padding: 0px;
    margin: 0px;
    display: flex;
    text-align: center;
    background-color: #eeeeee;

  }

  .title {
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    color: gray;
  }

  .number {
    width: 18px;
    height: 15px;
    color: white;
    font-size: 12px;
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
    padding-top: 5px;
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

  .text-stateing {
    color: #34B2B7;
    font-size: 12px;
  }

  .line {
    background-color: #d7e7e6;
    height: 1px;
    margin: 0px;
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
