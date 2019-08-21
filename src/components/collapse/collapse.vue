<template>
    <div class="mine-collapse" :class="simple?'mine-collapse-simple':''">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "collapse",
    props: {
      //是否开启手风琴
      accordion: {
        type: Boolean,
        default: false
      },
      simple: {
        type: Boolean,
        default: false
      },
      value:{
        type:[String,Array]
      }
    },
    computed: {
      classes() {
        return ''
      }
    }
  }
</script>

<style scoped>

</style>