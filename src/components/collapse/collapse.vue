<template>
    <div class="mine-collapse" :class="simple?'mine-collapse-simple':''">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "collapse",
    data () {
      return {
        currentValue: this.value
      }
    },
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
      value: {
        type: [String, Array]
      }
    },
    computed: {
      classes () {
        return ''
      }
    },
    methods: {
      setActive () {
        let activeKey = this.getActiveKey().toString();
        this.$children.forEach((child, index) => {
          const name = child.name;
          child.isActive = name.indexOf(activeKey) > -1
        })

      },
      getActiveKey () {

        return this.value
      }
    },
    mounted () {
      this.setActive()
    },
    watch: {
      value () {
        this.setActive()
      }
    }
  }
</script>

<style scoped>

</style>
