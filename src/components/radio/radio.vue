<template>
    <label class="mine-radio-wrap">
        <span class="mine-radio" :class="wrapClasses">
            <span class="mine-radio-inner"></span>
            <input type="radio"
                   class="mine-radio-input"
                   :disabled="disabled"
                   :checked="currentValue"
                   :name="groupName"
                   @change="handleChange"
            >
        </span>
        <slot>{{ label }}</slot>
    </label>
</template>

<script>
  export default {
    name: 'mine-radio',
    data() {
      return {
        currentValue: this.value,
        focus: false,
        isGroup: false,//判断是不是分组
        groupName: this.name
      }
    },
    props: {
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      label: {
        type: String,
        default: 'ddd'
      },
      disabled: Boolean,
      checked: Boolean,
      name: String,
      border: Boolean,
      size: String,

    },
    computed: {
      wrapClasses() {
        return [
          {'mine-radio-checked': this.currentValue}]
      },

    },
    mounted() {
      //判断父元素是不是 radio-group,是的话isGroup设置会true
      if (this.$parent.$options.name === 'mine-radio-group') {
        this.isGroup = true;
        this.groupName = this.$parent.$options.name
      }
      if (this.isGroup) {
        this.$parent.updateChildValue();
      } else {
        this.updateValue()
      }
      // console.log(this.$parent.$options.name, 'dddd');
    },
    methods: {
      handleChange(event) {
        // console.log(event, 'radio');
        if (this.disabled) return;
        //获取checked值，radio选中的时候会返回true
        const checked = event.target.checked;
        this.currentValue = checked;
        const value = checked ? this.trueValue : this.falseValue;
        this.$emit('input', value);
        if (this.isGroup) {
          if (this.label !== undefined) {
            this.$parent.change({value: this.label})
          }
        }
        // console.log(event.target.value, 'ggggggggg')
        // this.$nextTick(() => {
        //
        // });
      },
      updateValue() {
        this.currentValue = this.value === this.trueValue;
      }
    }
  }
</script>

<style lang="scss">
    .mine-radio-wrap {
        font-size: 12px;
        vertical-align: middle;
        display: inline-block;
        position: relative;
        white-space: nowrap;
        margin-right: 8px;
        cursor: pointer;

        * {
            box-sizing: border-box;
        }

        .mine-radio {
            display: inline-block;
            margin-right: 4px;
            white-space: nowrap;
            position: relative;
            line-height: 1;
            vertical-align: middle;
            cursor: pointer;

            &.mine-radio-checked {
                .mine-radio-inner {
                    border-color: #2d8cf0;

                    &:after {
                        opacity: 1;
                        transform: scale(1);
                        transition: all .2s ease-in-out;
                    }
                }
            }

            .mine-radio-inner {
                display: inline-block;
                width: 14px;
                height: 14px;
                position: relative;
                top: 0;
                left: 0;
                background-color: #fff;
                border: 1px solid #dcdee2;
                border-radius: 50%;
                transition: all .2s ease-in-out;

                &:after {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    left: 2px;
                    top: 2px;
                    border-radius: 6px;
                    display: table;
                    border-top: 0;
                    border-left: 0;
                    content: " ";
                    background-color: #2d8cf0;
                    opacity: 0;
                    transition: all .2s ease-in-out;
                    -webkit-transform: scale(0);
                    transform: scale(0);
                }


            }

            .mine-radio-input {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 1;
                opacity: 0;
                cursor: pointer;
            }
        }
    }
</style>
