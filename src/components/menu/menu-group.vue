<template>
    <div class="mine-menu-group">
        <div class="mine-menu-item-group-title">{{ title }}</div>
        <div><slot></slot></div>
    </div>
<!--    <li :class="[prefixCls + '-item-group']">-->
<!--        <div :class="[prefixCls + '-item-group-title']" :style="groupStyle">{{ title }}</div>-->
<!--        <ul><slot></slot></ul>-->
<!--    </li>-->
</template>

<script>
  export default {
    name: "mine-menu-group",
    props:{
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.mine-menu-group{
    .mine-menu-item-group-title{
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        padding-left: 28px;
        color: #999;
    }
}
</style>