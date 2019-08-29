<template>
    <div class="mine-back" :style="styles" @click="backTop" v-show="isShow">
        <slot>
            <div class="mine-back-top-inner">
                <i>返回</i>
            </div>
        </slot>
    </div>
</template>

<script>
  export default {
    name: "mine-back-top",
    data() {
      return {
        isShow: false
      }
    },
    props: {
      //组件距离右边多少Px
      right: {
        type: Number,
        default: 30
      },
      //组件距离底部多少Px
      bottom: {
        type: Number,
        default: 30
      },
      //距离顶部多少显示组件，默认400
      height: {
        type: Number,
        default: 400
      },
      //滚动持续时间
      duration: {
        type: Number,
        default: 1000
      }
    },
    methods: {
      backTop() {

        const sTop = document.documentElement.scrollTop || document.body.scrollTop;
        // const difference = sTop;
        // const spaceNum = 20;
        const step = Math.ceil(sTop / this.duration * 50);
        const ff = this.duration / 50;
        const dd = sTop / ff
        let _that = this;
        // setInterval(() => {
        //   // step--;
        //   // sTop += dd;
        //   sTop -=dd
        //   window.scrollTo({top: sTop})
        // }, 50)
        window.scrollTo({top: 0})
        console.log('hahahha', sTop);
      },
      scrollToTop() {
        this.isShow = window.pageYOffset >= this.height;
        // console.log(window.pageYOffset, 'scrollTop')
      }
    },
    computed: {
      styles() {
        return {
          right: `${this.right}px`,
          bottom: `${this.bottom}px`
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollToTop)
    }
  }
</script>

<style lang="scss">
    .mine-back {
        position: fixed;
        z-index: 10;

        .mine-back-top-inner {
            background-color: rgba(0, 0, 0, .6);
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
            transition: all .2s ease-in-out;

            i {
                color: #fff;
                font-size: 18px;
                padding: 8px 12px;
                font-style: normal;
            }
        }
    }

</style>