<template>
    <div :class="sticky?'mine-affix':''" ref="affix">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-affix",
    data () {
      return {
        sticky: false
      }
    },
    props: {
      offsetTop: {
        type: Number
      },
      offsetBottom: {
        type: Number
      }
    },
    computed: {},
    methods: {
      getTop () {
        let {top} = this.$el.getBoundingClientRect();
        return top + window.scrollY
      }
    },
    created () {
      window.addEventListener('scroll', () => {
        // console.log('窗口滚动的距离：', window.scrollY)
        if (window.scrollY > this.getTop()) {
          //当元素滚过浏览器窗口时候getBoundingClientRect获取的top值会是负数，所以window.scrollY会大于this.getTop
          console.log('元素滚过窗口顶部了')
          this.sticky = true
        } else {
          this.sticky = false
          console.log('元素没有滚过窗口顶部')
        }
      })
    },
    mounted () {
      //getBoundingClientRect 获取的高度是距离浏览器窗口的高度，而不是距离文档顶部的距离
      // console.log(this.$el.getBoundingClientRect());
      let {top} = this.$el.getBoundingClientRect();
      console.log('距离浏览器窗口顶部距离：', top);
      console.log('窗口滚动的距离：', window.scrollY);
      let distance = top + window.scrollY //距离文档的距离
      console.log('距离文档顶部距离：', distance)
    }
  }
</script>

<style>
    .mine-affix {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        border: 1px solid red
    }
</style>
