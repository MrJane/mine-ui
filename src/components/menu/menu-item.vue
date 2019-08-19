<template>
    <div class="mine-menu-item" :class="active?'mine-menu-item-active':''" @click="handleClickItem">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-menu-item",
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    inject: ['eventBus'],
    methods: {
      handleClickItem() {
        if (this.disabled) return;
        console.log(this.$parent, 'parent=========')
        this.active = true
        this.eventBus.$emit('on-update-active-name',this.name)
        // if (new_window || this.target === '_blank') {
        //   // 如果是 new_window，直接新开窗口就行，无需发送状态
        //   this.handleCheckClick(event, new_window);
        //   let parentMenu = findComponentUpward(this, 'Menu');
        //   if (parentMenu) parentMenu.handleEmitSelectEvent(this.name);
        // } else {
        //   let parent = findComponentUpward(this, 'Submenu');
        //   if (parent) {
        //     this.dispatch('Submenu', 'on-menu-item-select', this.name);
        //   } else {
        //     this.dispatch('Menu', 'on-menu-item-select', this.name);
        //   }
        //   this.handleCheckClick(event, new_window);
        // }
      }

    },
    mounted() {
      console.log(this.name)
      let self = this; //缓存实例
      this.eventBus.$on('on-update-active-name', function (data) {
        if (data == self.name) {
          self.active = true
        }else {
          self.active =false;
        }
        console.log(self.active,'000000000000000000000')
      })
      // this.eventBus.$on('click-item', this.listenItem)
      // this.eventBus.$on('vertical-prop', this.listenVertical)
      // this.eventBus.$on('update-menu', this.listenRefresh)
      // this.$nextTick(() => {
      //   this.getNames(this)
      // })
    }
  }
</script>

<style lang="scss" scoped>
    .mine-menu-item {
        padding: 14px 24px;
        position: relative;
        cursor: pointer;
        z-index: 1;
        transition: all .2s ease-in-out;

        &:hover {
            color: #2db7f5;
        }

        &.mine-menu-item-active {
            color: #2db7f5;
            background: #f0faff;
            z-index: 2;

            &:after {
                content: "";
                display: block;
                width: 2px;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                background: #2db7f5;
            }
        }
    }
</style>