<template>
    <span @click="toggle" class="mine-switch" :class="currentValue?'mine-switch-checked':''">
        <input type="hidden">
        <span class="mine-switch-inner">
            <slot name="open"></slot>
            <slot name="close"></slot>
        </span>
    </span>
</template>

<script>
  export default {
    name: "mine-switch",
    props: {
      //用于v-model绑定
      value: {
        type: [String, Number, Boolean]
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      checked: {
        type: [String, Boolean]
      }
    },
    data() {
      return {
        //基本套路组件内部设置currentValue复制于value
        currentValue: this.value
      }
    },
    methods: {
      toggle(e) {
        //禁用 return
        if (this.disabled) return;
        const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
        this.currentValue = checked;
        //用于v-model 中的input事件
        this.$emit('input', checked);
        //发送change事件
        this.$emit('change',checked);
        // this.currentValue = !this.currentValue;
        // console.log(e, 'ddddddddddddd')
      }
    }
  }
</script>

<style lang="scss">
    .mine-switch {
        * {
            box-sizing: border-box
        }

        display: inline-block;
        box-sizing: border-box;
        width: 44px;
        height: 22px;
        line-height: 20px;
        border-radius: 22px;
        vertical-align: middle;
        border: 1px solid #ccc;
        background-color: #ccc;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: all .2s ease-in-out;

        &.mine-switch-checked {
            border-color: #2db7f5;
            background-color: #2db7f5;

            .mine-switch-inner {
            }

            &:after {
                left: 23px;
            }
        }

        .mine-switch-inner {
            color: #fff;
            font-size: 12px;
            position: absolute;
            left: 23px;
        }

        &:after {
            content: "";
            width: 18px;
            height: 18px;
            border-radius: 18px;
            background-color: #fff;
            position: absolute;
            left: 1px;
            top: 1px;
            cursor: pointer;
            transition: left .2s ease-in-out, width .2s ease-in-out;
        }
    }
</style>
