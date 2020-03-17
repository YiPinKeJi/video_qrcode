<template>
  <div>

    <div class="div-video">
      <video controls src="../../static/test.mp4" poster="../../static/1584432576(1).jpg" x5-playsinline></video>
    </div>
    <div class="div-title">
      <div class="title">
        课程章节
      </div>
    </div>
    <div class="div-item">
      <div class="item">
        <div class="number"> 01</div>
        <div class="div-text">
          <div class="text"> 奥术大师大所大所多</div>
          <div class="brief"> 4分30秒</div>
        </div>
        <div class="div-state">
          <img class="img-state" src="../assets/icon_delete_@2x.png">
          <div class="text-state">未完成</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    }
  }
</script>
<style>
  * {
    font-size: 14px;
  }

  video {
    width: 100%;
    object-fit: fill;
    background-color: aquamarine;
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
    height: 20px;
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 5px;
    border-radius: 50px;
    background-color: deepskyblue;
    margin: auto 0;
  }

  .div-item {
    margin: 10px;
  }

  .div-text{
    margin: auto 0;
  }

  .item {
    display: flex;
  }

  .text {
    font-size: 14px;
  }

  .brief {
    font-size: 12px;
  }

  .img-state {
    width: 18px;
    height: 18px;
  }

  .text-state {
    color: gray;
    font-size: 12px;
  }
</style>
