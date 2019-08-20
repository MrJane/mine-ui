<template>
    <div class="mine-row">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-row",
    props: {
      //删隔距离
      gutter: {
        type: [Number, String],
        default: 0
      }
    },
    mounted () {
      console.log(this.gutter, '父亲gutter');
      //找到子元素col 把子元素gutter属性设置相同 儿子的gutter要设置在data里
      this.$children.forEach(child => {
        child.gutter = this.gutter
      })
    },
    watch: {
      gutter () {
        this.$children.forEach(child => {
          child.gutter = this.gutter
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
