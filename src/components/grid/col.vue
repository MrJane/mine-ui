<template>
    <div class="mine-col" :class="colClasses" :style="colStyles">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-col",
    data () {
      return {
        gutter: 0
      }
    },
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    computed: {
      colClasses () {
        return [`mine-col-${this.span}`, `mine-offset-${this.offset}`]
      },
      colStyles () {
        return {
          paddingRight: this.gutter / 2 + 'px',
          paddingLeft: this.gutter / 2 + 'px'
        }
      }
    },
    mounted () {
      console.log(this.gutter, '儿子gutter');
    }
  }
</script>

<style scoped>

</style>
