<template>
    <button :disabled="disabled" class="mine-button"
            :class="[
                type ? 'mine-button-' + type : '',
                size?'mine-button-'+size:''
                 ]"
      >
        <span><slot></slot></span>
    </button>
</template>

<script>
  export default {
    name: "mine-button",
    props: {
      //按钮大小
      size: String,
      //按钮类型 default primary success info warning danger
      type: {
        type: String,
        default: 'default'
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
      //圆形
      round: Boolean,
      circle: Boolean
    },
    mounted () {
    console.log(this.disabled)
    }
  }
</script>

<style lang="scss" scoped>
    .mine-button {
        display: inline-block;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        line-height: 1.5;
        padding: 4px 15px;
        font-size: 12px;
        border-radius: 100px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        position: relative;
        color: #666;
        background-color: #f4f4f4;
        border-color: #d9d9d9;
        &.mine-button[disabled]{
            color: #ccc;
            background-color: red;
            border-color: #d9d9d9;
            cursor: cell;
        }
        &.mine-button-large{
            padding: 4px 15px 5px 15px;
            font-size: 14px;
            border-radius: 100px;
        }
        &.mine-button-small{
            padding: 1px 7px;
            font-size: 12px;
            border-radius: 100px;
        }
        &.mine-button-default {
            color: #666;
            background-color: #fff;
            border-color: #d9d9d9;

            &:hover {
                color: #57c5f7;
                background-color: white;
                border-color: #57c5f7;
            }
        }
        &.mine-button-primary {
            color: #fff;
            background-color: #2db7f5;
            border-color: #2db7f5;

            &:hover {
                color: #ffffff;
                background-color: #57c5f7;
                border-color: #57c5f7;
            }
        }
        &.mine-button.success{}
        &.mine-button.success{}
    }
</style>
