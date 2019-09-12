<template>
    <div class="mine-input-number">
        <!--加减操作部分-->
        <div class="mine-input-number-handler-wrap">
            <a class="mine-input-number-handler mine-input-number-handler-up">
                <span class="mine-input-number-up-inner">+</span>
            </a>
            <a class="mine-input-number-handler mine-input-number-handler-down">
                <span class="mine-input-number-down-inner">-</span>
            </a>
        </div>
        <div class="mine-input-number-input-wrap">
            <input
                    class="mine-input-number-input"
                    type="text"
                    :disabled="disabled"
                    @input="onchange"
            >
        </div>
    </div>
</template>

<script>
  export default {
    name: "mine-input-number",
    props: {
      value: {
        type: Number,
        default: 1
      },
      //最小值
      min: {
        type: Number,
        default: -Infinity //Infinity无穷大
      },
      max: {
        type: Number,
        default: Infinity
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onchange(event) {
        console.log(event.type);
        let val = event.target.value.trim();
        const isEmptyString = val.length === 0;
        if(isEmptyString){
          this.setValue(null);
          return;
        }
        if (event.type === 'input' && val.match(/^\-?\.?$|\.$/)) return; //
        val = Number(val);
        if (!isNaN(val)) {
          this.currentValue = val;
          this.setValue(val);
        } else {
          event.target.value = this.currentValue;
        }
        console.log(val,'val')
      },
      setValue(){

      }
    }
  }
</script>

<style lang="scss">
    .mine-input-number {
        display: inline-block;
        /*width: 100%;*/
        /*line-height: 1.5;*/
        padding: 4px 7px;
        font-size: 12px;
        color: #515a6e;
        background-color: #fff;
        background-image: none;
        position: relative;
        transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
        margin: 0;
        padding: 0;
        width: 80px;
        height: 32px;
        line-height: 32px;
        vertical-align: middle;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        overflow: hidden;
        cursor: default;

        &:hover {
            border-color: #00c8d7;

            .mine-input-number-handler-wrap {
                opacity: 1;
            }
        }

        .mine-input-number-input-wrap {
            overflow: hidden;
            height: 32px;

            .mine-input-number-input {
                width: 100%;
                height: 32px;
                line-height: 32px;
                padding: 0 7px;
                text-align: left;
                outline: 0;
                -moz-appearance: textfield;
                color: #666;
                border: 0;
                border-radius: 4px;
                transition: all .2s linear;

            }
        }

        .mine-input-number-handler-wrap {
            position: absolute;
            top: 0;
            right: 0;
            width: 22px;
            height: 100%;
            background: #fff;
            border-left: 1px solid #d9d9d9;
            border-radius: 0 4px 4px 0;
            opacity: 0;
            transition: opacity .24s linear .1s;

            .mine-input-number-handler {
                display: block;
                width: 100%;
                height: 16px;
                line-height: 0;
                text-align: center;
                overflow: hidden;
                color: #999;
                position: relative;
            }

            .mine-input-number-handler-down {
                border-top: 1px solid #d9d9d9;
                top: -1px;
            }

            .mine-input-number-down-inner {
                width: 12px;
                height: 12px;
                line-height: 12px;
                font-size: 14px;
                color: #999;
                user-select: none;
                position: absolute;
                right: 5px;
                transition: all .2s linear;

                &:hover {
                    color: #00c8d7;
                }
            }

            .mine-input-number-up-inner {
                width: 12px;
                height: 12px;
                line-height: 12px;
                font-size: 14px;
                color: #999;
                user-select: none;
                position: absolute;
                right: 5px;
                transition: all .2s linear;

                &:hover {
                    color: #00c8d7;
                }
            }
        }
    }
</style>