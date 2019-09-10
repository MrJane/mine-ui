<template>
    <button :disabled="disabled" class="mine-button"
            :class="classes"
    >
        <span><slot></slot></span>
    </button>
</template>

<script>
  import {oneOf} from '../../utils/assist';

  export default {
    name: "mine-button",
    props: {
      //按钮大小
      size: {
        type: String,
        validator(value) {
          return oneOf(value, ['small', 'large'])
        }
      },
      //按钮类型 default primary success info warning danger
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return oneOf(value, ['default', 'primary', 'dashed', 'info', 'success', 'warning', 'error']);
        }
      },
      //按钮原生属性 button submit reset
      nativeType: {
        type: String
      },
      //是否加载状态
      loading: Boolean,
      //禁用
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      //按钮是形状
      shape: {
        type: String,
        validator(value) {
          return oneOf(value, ['round', 'circle']);
        }
      },
      //圆形
      round: Boolean,
      circle: Boolean
    },
    computed: {
      classes() {
        return [
          `mine-button-${this.type}`,
          {
            [`mine-button-loading`]: this.loading,
            [`mine-button-${this.size}`]: this.size,
            [`mine-button-${this.shape}`]: this.shape
          }
        ]
      }
    },
    mounted() {
      console.log(this.disabled)
    }
  }
</script>
