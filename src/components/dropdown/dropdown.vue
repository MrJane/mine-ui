<template>
    <div
            class="mine-dropdown"
            @mouseenter="handlerMouseEnter"
            @mouseleave="handlerMouseLeave">
        <div
                class="mine-dropdown-link"
                @click="handlerClick"
        >
            <slot></slot>
        </div>
        <div class="mine-dropdown-menu-wrapper" v-show="currentVisible">
            <slot name="dropdown"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "mine-dropdown",
    props: {
      //触发方式，可选值为 hover（悬停）click（点击）contextMenu（右键）custom（自定义），使用 custom 时，需配合 visible 一起使用
      trigger: {
        type: String,
        default: "hover"
      },
      //下拉菜单出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end,
      placement: {
        type: String,
      }
    },
    data() {
      return {
        currentVisible: false
      }
    },
    methods: {
      handlerClick() {
        //不是点击事件
        if (this.trigger !== 'click') {
          return false;
        }
        this.currentVisible = !this.currentVisible;
      },
      //mouse移动事件要放在最外层不能绑定在mine-dropdown-link元素上
      handlerMouseEnter() {
        if (this.trigger !== 'hover') {
          return false
        }
        this.currentVisible = true;
      },
      handlerMouseLeave() {
        this.currentVisible = false;
      }
    }
  }
</script>

<style lang="scss">
    .mine-dropdown {
        display: inline-block;

        .mine-dropdown-menu-wrapper {
            width: inherit;
            max-height: 200px;
            overflow: auto;
            /*margin: 5px 0;*/
            padding: 5px 0;
            background-color: #fff;
            box-sizing: border-box;
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
            position: absolute;
            z-index: 900;
            .mine-dropdown-menu {
                min-width: 100px;
                .mine-dropdown-item {
                    margin: 0;
                    line-height: normal;
                    padding: 7px 16px;
                    clear: both;
                    color: #515a6e;
                    font-size: 12px !important;
                    white-space: nowrap;
                    list-style: none;
                    cursor: pointer;
                    transition: background .2s ease-in-out;
                    &:hover {
                        background: #eafcfd;
                    }
                }
            }
        }
    }

    .mine-dropdown-link {
        position: relative;
    }
</style>