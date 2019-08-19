<template>
    <span class="mine-badge" ref="badge">
        <slot></slot>
        <sup class="mine-badge-dot" style=""></sup>
    </span>
</template>

<script>
  export default {
    name: "mine-badge",
    props: {
      dot: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss">
    .mine-badge {
        position: relative;
        display: inline-block;

        .mine-badge-dot {
            position: absolute;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            -webkit-transform-origin: 0 center;
            transform-origin: 0 center;
            top: -4px;
            right: -8px;
            height: 8px;
            width: 8px;
            border-radius: 100%;
            background: #ed4014;
            z-index: 10;
            box-shadow: 0 0 0 1px #fff;
        }
    }
</style>
