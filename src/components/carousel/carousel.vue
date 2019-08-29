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
  const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  const MOZ_HACK_REGEXP = /^moz([A-Z])/;

  function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
  }

  function getStyle(element, styleName) {
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
    data() {
      return {
        slides: [],
        listWidth: 0
      }
    },
    methods: {
      findChild(callback) {
        const find = function (child) {
          const name = child.$options.name;
          if (name === 'mine-swiper-item') {
            callback(child)
          }

        }
      },
      updateSlides() {
        this.slides = this.$children.filter(child => child.$options.name === 'mine-carousel-item');
      },
      handleResize() {
        // console.log(getComputedStyle(this.$el),'ddddddddddddddddd');
        this.listWidth = parseInt(getStyle(this.$el, 'width'));
        this.$children.forEach(child => {
          child.width = this.listWidth;
        })

      }
    },
    mounted() {
      this.updateSlides();
      this.handleResize();
      console.log(this.listWidth, 'listWidth>>>>>>>>>>>>>>>>>>>>>')
      console.log(this.slides, 'self 轮播>>>>>')
    }
  }
</script>

<style scoped>

</style>
