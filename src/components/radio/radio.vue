<template>
    <label class="mine-radio-wrap">
        <span class="mine-radio mine-radio-checked">
            <span class="mine-radio-inner"></span>
            <input type="radio" class="mine-radio-input">
        </span>
        <slot>{{ label }}</slot>
    </label>
</template>

<script>
  export default {
    name: 'mine-radio',
    props: {
      value: {},
      label: {
        type: String,
        default: 'ddd'
      },
      disabled: Boolean,
      name: String,
      border: Boolean,
      size: String
    },
    data () {
      return {
        focus: false
      };
    },
    computed: {

      model: {
        get () {
          return this.isGroup ? this._radioGroup.value : this.value;
        },
        set (val) {
          if (this.isGroup) {
            this.dispatch('ElRadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
          this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
        }
      },
      _elFormItemSize () {
        return (this.elFormItem || {}).elFormItemSize;
      },
      radioSize () {
        const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        return this.isGroup
          ? this._radioGroup.radioGroupSize || temRadioSize
          : temRadioSize;
      },
      isDisabled () {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
          : this.disabled || (this.elForm || {}).disabled;
      },
      tabIndex () {
        return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
      }
    },
    methods: {
      handleChange () {
        this.$nextTick(() => {
          this.$emit('change', this.model);
          this.isGroup && this.dispatch('ElRadioGroup', 'handleChange', this.model);
        });
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
