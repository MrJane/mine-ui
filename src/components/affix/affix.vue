<template>
    <div class="mine-affix">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-affix",
    props: {
      offsetTop: {
        type: Number
      },
      offsetBottom: {
        type: Number
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>

</style>
