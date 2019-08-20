<template>
    <div class="mine-progress" :class="status?'mine-progress-'+status:''">
        <div class="mine-progress-outer">
            <div class="mine-progress-inner">
                <div class="mine-progress-bg" :style="{width:this.percent+'%'}"></div>
            </div>
        </div>
        <span class="mine-progress-text"></span>
    </div>
</template>

<script>
  export default {
    name: "mine-progress",
    props:{
      //进度条百分比
      percent:{
        type:Number
      },
      //success,wrong,active,normal
      status:{
        type: String
      }
    }
  }
</script>

<style>

</style>