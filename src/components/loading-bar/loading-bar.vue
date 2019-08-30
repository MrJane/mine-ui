<template>
    <div class="mine-loading-bar">
        <div class="loading-bar-inner" :style="style"></div>
    </div>
</template>

<script>
  export default {
    name: "mine-loading-bar",
    props: {
      //隐藏的持续时间
      duration: {
        type: Number,
        default: 1000
      },
      //进度条颜色
      color: {
        type: String,
        default: 'green'
      },
      //进度条失败的颜色
      failedColor: {
        type: String,
        default: ''
      },
      //进度条高度
      height: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        percent: 30
      }
    },
    computed: {
      style() {
        return {
          width: `${this.percent}%`,
          height: this.height+'px',
          backgroundColor: this.color
        }
      }
    }
  }
</script>

<style>
    .mine-loading-bar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2000;
        /*height: 2px;*/
        /*background: red;*/
    }
</style>