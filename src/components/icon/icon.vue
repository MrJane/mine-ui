<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
  // const prefixCls = 'mine-icon';
  export default {
    name: "mine-icon",
    mounted() {
      console.log(this.type);
    },
    computed: {
      classes() {
        return ['mine-icon', this.type,this.custom]
      },
      styles() {
        let style = {}
        if (this.size) {
          style['font-size'] = `${this.size}px`;
        }
        if (this.color){
          style.color = this.color;
        }
        return style
      }
    },
    props: {
      //图标的名称
      type: String,
      //图标的大小
      size: [Number, String],
      //颜色
      color: String,
      //自定义图标
      custom: {
        type: String,
        default:''
      }
    },
    methods:{
      handleClick(event){
        this.$emit('click',event)
      }
    }
  }
</script>

<style lang="scss" >
    .mine-icon {
        display: inline-block;
        font-family: MineIcons;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        text-rendering: auto;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        vertical-align: middle;
    }
</style>
