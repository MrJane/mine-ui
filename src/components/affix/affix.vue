<template>
    <div class="affix-wrapper" ref="wrapper" :style="{height}">
        <div :class="sticky?'mine-affix':''" ref="affix" :style="{width,left}">
            <slot></slot>
        </div>
    </div>

</template>

<script>
  export default {
    name: "mine-affix",
    data () {
      return {
        sticky: false,
        // left: 0,
        left: undefined, //这里不能设置0，一开始的时候是0会导致没有高度，所以设置undefined
        width: undefined,
        height: undefined
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
      },
      // getHeight () {
      //   let {height} = this.$el.getBoundingClientRect();
      //   return height
      // }
      getStyle () {
        let styles = this.$el.getBoundingClientRect();
        return styles
      }
    },
    created () {
      // window.addEventListener('scroll', () => {
      //   // console.log('窗口滚动的距离：', window.scrollY)
      //   if (window.scrollY > this.getTop()) {
      //     //当元素滚过浏览器窗口时候getBoundingClientRect获取的top值会是负数，所以window.scrollY会大于this.getTop
      //     console.log('元素滚过窗口顶部了');
      //     this.sticky = true
      //   } else {
      //     this.sticky = false;
      //     console.log('元素没有滚过窗口顶部')
      //   }
      // })
    },
    mounted () {
      //getBoundingClientRect 获取的高度是距离浏览器窗口的高度，而不是距离文档顶部的距离
      // console.log(this.$el.getBoundingClientRect());
      let top = this.getTop();
      // let height = this.getHeight(); 不要一开始获取高度，考虑异步加载的情况
      //this.$refs.wrapper.style.height = `${height}px`;
      this.scrollHandler = () => {
        if (window.scrollY > top) {
          let {height, left, width} = this.getStyle();
          this.height = height + 'px';
          this.left = left + 'px';
          this.width = width + 'px';
          this.sticky = true
        } else {
          this.sticky = false;
        }
      };
      // this.scrollHandler = () => {}; 假如这监听函数写在methods里的话要考虑this的问题

      // window.addEventListener('scroll', () => {
      //   // console.log('窗口滚动的距离：', window.scrollY)
      //   if (window.scrollY > top) {
      //     //当元素滚过浏览器窗口时候getBoundingClientRect获取的top值会是负数，所以window.scrollY会大于this.getTop
      //     console.log('元素滚过窗口顶部了');
      //     let {height, left, width} = this.getStyle();
      //     // this.$refs.wrapper.style.height = `${height}px`;
      //     this.height = height + 'px';
      //     this.left = left + 'px';
      //     this.width = width + 'px';
      //     this.sticky = true
      //   } else {
      //     this.sticky = false;
      //     console.log('元素没有滚过窗口顶部')
      //   }
      // });
      window.addEventListener('scroll', this.scrollHandler);//把scrollHandler写闭包里直接绑定直接移除，但是写在methods里的话要bind(this),移除也bind(this),bind()函数是返回新的函数，所以导致监听和移除都不是同一个函数


      console.log('距离浏览器窗口顶部距离：', top);
      console.log('窗口滚动的距离：', window.scrollY);
      let distance = top + window.scrollY; //距离文档的距离
      console.log('距离文档顶部距离：', distance);
      //总结 fixed定位的时候会脱离文档流，会导致父元素会没有高度，所以一要获取高度写在父元素自己身上，但是如果是异步加载的时候，获取不到真实的高度，一开始时候不要获取高度，在用户有行为操作的时候再获取高度

      //
    },
    beforeDestroy () {
      //组件副作用：改了除了组件以为的都是副作用，例如上面的window监听事件，都要在组件销毁前清除掉
      window.removeEventListener('scroll',this.scrollHandler)
    }
  }
</script>

<style>
    .mine-affix {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        /*宽度不能百分百，固定定位的话宽度百分百相对于浏览器屏幕，假如是在页面中？所以要设置left及width值*/
        border: 1px solid red
    }
</style>
