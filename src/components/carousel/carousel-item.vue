<template>
    <div class="mine-swiper-item" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-carousel-item",
    data () {
      return {
        width: 400,
        height: 'auto',
        left: 0
      }
    },
    computed: {
      styles () {
        return {
          width: `${this.width}px`,
          height: `${this.height}`,
          left: `${this.left}px`
        }
      }
    }
  }
</script>

<style scoped>

</style>
