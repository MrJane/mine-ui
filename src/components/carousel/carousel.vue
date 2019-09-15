<template>
    <div class="mine-swiper">
        <button class="mine-swiper-arrow arrow-left" @click="arrowClick(-1)">左</button>
        <div class="mine-swiper-container">
            <div class="mine-swiper-wrap" :style="trackStyles" ref="originTrack" :class="showCopyTrack?'':'weight'">
                <slot></slot>
            </div>
            <!-- 拷贝出来的Dom 做无缝轮播-->
            <div class="mine-swiper-wrap clone" ref="copyTrack" :class="showCopyTrack?'weight':''"
                 :style="copyTrackStyles"></div>
        </div>
        <button class="mine-swiper-arrow arrow-right" @click="arrowClick(1)">右</button>
        <ul class="mine-swiper-dots">
            <li
                    v-for="n in slides.length"
                    :class="n-1===currentIndex?'active':''"
                    @click="dotsClick(n-1)"
                    @mouseover="dotsHover(n-1)"
            >
                <button></button>
            </li>
            <!--            <li><button></button></li>-->
            <!--            <li><button></button></li>-->
        </ul>
    </div>
</template>

<script>
  const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  const MOZ_HACK_REGEXP = /^moz([A-Z])/;

  function camelCase (name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
  }

  function getStyle (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
      styleName = 'cssFloat';
    }
    try {
      const computed = document.defaultView.getComputedStyle(element, '');
      return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
      return element.style[styleName];
    }
  }

  export default {
    name: "mine-swiper",
    props: {
      easing: {
        type: String,
        default: 'ease'
      },
    },
    data () {
      return {
        slides: [],
        listWidth: 0,
        currentIndex: 0, //保存当前显示图片索引控制下按钮的样式
        trackWidth: 0,
        trackOffset: 0,
        trackIndex: 0,
        trackCopyOffset: 0,
        copyTrackIndex: 0,
        showCopyTrack: false,//控制是否利用拷贝的dom显示轮播

      }
    },
    methods: {
      findChild (callback) {
        const find = function (child) {
          const name = child.$options.name;
          if (name === 'mine-swiper-item') {
            callback(child)
          }

        }
      },
      copyDom () { //拷贝一份dom，做无缝轮播
        this.$nextTick(() => {
          this.$refs.copyTrack.innerHTML = this.$refs.originTrack.innerHTML
        })
      },
      dotsClick (index) {
        //获取当前显示图片索引
        let curIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
        if (curIndex !== index) { //点击不是当前显示的
          if (this.showCopyTrack) {
            this.copyTrackIndex = index
          } else {
            this.trackIndex = index
          }
        }
        this.currentIndex = index;
        // this.toggle(index)
        console.log(index, 'index');
        console.log(curIndex, 'curIndex')
      },
      dotsHover (offset) {
        // let len = this.slides.length;
        // let oldIndex = this.currentIndex;
        // let index = oldIndex + offset;
        // this.currentIndex = index === this.slides.length ? 0 : index;
        // console.log(index);
      },
      updateOffset () {
        this.$nextTick(() => {
          this.trackOffset = this.trackIndex * this.listWidth;
          this.trackCopyOffset = this.copyTrackIndex * this.listWidth
        })
      },
      //用于左右箭头点击事件
      toggle (offset) {
        let i;
        let slidesLen = this.slides.length;
        if (offset > 0) {
          //初始化左侧轨道
          i = -1
        } else {
          i = slidesLen;
        }
        if (this.showCopyTrack) {
          //如果当前是显示克隆出的元素，则初始元素的dom元素
          this.trackIndex = i
        } else {
          this.copyTrackIndex = i
        }
        console.log(this.trackIndex, 'trackIndex更新前');
        console.log(this.copyTrackIndex, 'copyTrackIndex更新前');
        //获取当前显示的索引，
        let oldIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
        console.log(oldIndex, 'oldIndex');
        console.log(this.showCopyTrack, 'showCopyTrack');
        let index = oldIndex + offset;
        //当index小于0的时候，即当前显示的是第一张图片，

        //当oldIndex 0时候 offset小于0d的时候 切换轨道
        if (oldIndex === 0 && offset < 0) {
          if (this.showCopyTrack) {
            this.trackIndex = slidesLen - 1;
            this.copyTrackIndex += offset;
          } else {
            this.copyTrackIndex = slidesLen - 1;
            this.trackIndex += offset;
          }
          this.showCopyTrack = !this.showCopyTrack;
          // this.copyTrackIndex = slidesLen - 1
        }
        //当oldIndex 是最后一张的时候 offset大于0 切换轨道
        else if (oldIndex >= slidesLen - 1 && offset > 0) {
          if (this.showCopyTrack) {
            this.trackIndex = 0;
            this.copyTrackIndex += offset;
          } else {
            this.copyTrackIndex = 0;
            this.trackIndex += offset;
          }
          this.showCopyTrack = !this.showCopyTrack;

        } else {
          if (this.showCopyTrack) {
            this.copyTrackIndex += offset
          } else {
            this.trackIndex += offset
          }
        }
        this.currentIndex = index===this.slides.length?0:index;
        console.log(this.trackIndex, 'trackIndex更新后');
        console.log(this.copyTrackIndex, 'copyTrackIndex更新后');
        // if (index === slidesLen) {//当前显示图片最后一张
        //   if (this.showCopyTrack) {
        //     this.trackIndex += offset;
        //   } else {
        //     this.copyTrackIndex += offset;
        //   }
        //   this.showCopyTrack = !this.showCopyTrack
        // } else if (index < 0) { //当前显示第一张的时候
        //   if (this.showCopyTrack) {
        //     this.copyTrackIndex = slidesLen - 1;
        //   } else {
        //     this.trackIndex = slidesLen - 1
        //   }
        //   this.showCopyTrack = !this.showCopyTrack
        // } else {
        //
        //   this.copyTrackIndex += offset;
        //   this.trackIndex += offset
        // }
      },
      //箭头点击事件
      arrowClick (num) {
        // this.copyTrackIndex = -1;
        // this.trackIndex += num;
        // if (this.trackIndex >= this.slides.length) {
        //   this.showCopyTrack = true;
        //   this.trackIndex = 0;
        //   this.copyTrackIndex += num;
        // }
        // if (this.trackIndex < 0) {
        //   this.trackIndex = this.slides.length
        // }
        this.toggle(num);
        // console.log(num)
      },
      updateSlides () {
        this.slides = this.$children.filter(child => child.$options.name === 'mine-carousel-item');
      },
      handleResize () {
        this.listWidth = parseInt(getStyle(this.$el, 'width'));
        this.trackWidth = this.slides.length * this.listWidth;
        this.$children.forEach(child => {
          child.width = this.listWidth;
        })
      }
    },
    computed: {
      trackStyles () {
        return {
          width: `${this.trackWidth}px`,
          transform: `translate3d(${-this.trackOffset}px, 0px, 0px)`,
          transition: `transform 500ms ${this.easing}`,
        }
      },
      copyTrackStyles () {
        return {
          width: `${this.trackWidth}px`,
          transform: `translate3d(${-this.trackCopyOffset}px, 0px, 0px)`,
          transition: `transform 500ms ${this.easing}`,
          position: 'absolute',
          top: 0
        }
      }
    },
    mounted () {
      this.updateSlides();
      this.handleResize();
      this.copyDom()
      // console.log(this.listWidth, 'listWidth>>>>>>>>>>>>>>>>>>>>>')
      // console.log(this.slides, 'self 轮播>>>>>')
    },
    watch: {
      trackIndex () {
        console.log('更新trackIndex');
        this.updateOffset()
      },
      copyTrackIndex () {
        this.updateOffset();
      }
    }
  }
</script>

<style scoped>

</style>
