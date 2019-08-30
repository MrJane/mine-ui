<template>
    <div class="mine-card">
        <div class="mine-card-header" v-if="$slots.header || header">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="mine-card-body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'mine-card',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
    .mine-card {
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        color: #303133;

        .mine-card-header {
            padding: 18px 20px;
            border-bottom: 1px solid #ebeef5;
            box-sizing: border-box;
        }

        .mine-card-body {
            padding: 20px;
        }
    }
</style>
