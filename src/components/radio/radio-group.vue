<template>
    <div class="mine-radio-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-radio-group",
    data () {
      return {
        currentValue: this.value
      }
    },
    props: {
      value:{
      type:[Number,String,Boolean]},
      type: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.updateValue()
    },
    methods: {
      updateValue () {
        let children = this.$children;
        if (children) {
          children.forEach(child => {

            if (child.$options.name === 'mine-radio') {
              //判断currentValue是等于哪个child的label值，就把这个child的currentValue设置为true
              child.currentValue = this.currentValue===child.label;
              child.isGroup = true;
              console.log(child.currentValue,'name')
            }
          })
        }
      },
      change (data) {

      }
    },
    watch: {
      value () {
        if (this.currentValue !== this.value) {
          this.currentValue = this.value;
          this.$nextTick(() => {
            // this.updateValue();
          });
        }
      }
    }
  }
</script>

<style lang="scss">
    .mine-radio-group {
        display: inline-block;
        font-size: 12px;
        vertical-align: middle;

        &.mine-radio-group-button {
            .mine-radio-wrap {
                height: 36px;
                line-height: 34px;
                font-size: 14px;
                display: inline-block;
                height: 32px;
                line-height: 30px;
                margin: 0;
                padding: 0 15px;
                font-size: 12px;
                color: #515a6e;
                transition: all .2s ease-in-out;
                cursor: pointer;
                border: 1px solid #dcdee2;
                border-left: 0;
                background: #fff;
                position: relative;

                &:first-child {
                    border-radius: 4px 0 0 4px;
                    border-left: 1px solid #dcdee2;
                }

                &:last-child {
                    border-radius: 0 4px 4px 0;
                }

                .mine-radio {
                    width: 0;
                    margin-right: 0;

                    .mine-radio-inner {
                        opacity: 0;
                        width: 0;
                        height: 0;
                    }
                }
            }
        }
    }
</style>
