<template>
    <div class="mine-swiper">
        <button class="mine-swiper-arrow arrow-left">左</button>
        <div class="mine-swiper-container">
            <div class="mine-swiper-wrap">
                <slot></slot>
            </div>
        </div>
        <button class="mine-swiper-arrow arrow-right">右</button>
        <ul class="mine-swiper-dots">
            <li>
                <button></button>
            </li>
            <li>
                <button></button>
            </li>
            <li>
                <button></button>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "mine-swiper",
    methods: {
      findChild (callback) {
        const find = function (child) {
          const name = child.$options.name;
          if (name === 'mine-swiper-item') {
            callback(child)
          }

        }
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>

</style>
