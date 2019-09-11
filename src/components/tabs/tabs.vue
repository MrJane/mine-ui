<template>
    <div class="mine-tabs">
        <!--头部区域-->
        <div class="mine-tabs-header" ref="navList">
            <!-- 激活的panel下面的边框线条，不能设置mine-tabs-tab border-bottom否则没有动效-->
            <div class="mine-active-bar" :style="barStyle"></div>
            <div
                    :key="nav.name"
                    class="mine-tabs-tab"
                    v-for="nav in tabNavList"
                    :class="nav.name===activeKey?'mine-tabs-tab-active':''"
                    @click="toggle(nav)"
            >
                {{nav.label}}
            </div>
        </div>
        <!--内容区域-->
        <div class="mine-tab-content" ref="content">
            <slot></slot>
        </div>
    </div>

</template>

<script>
  export default {
    name: "mine-tabs",
    data() {
      return {
        tabNavList: [],
        activeKey: this.value,
        barWidth: 0,
        barOffset: 0 //滚动条偏移量
      }
    },
    props: {
      value: [String, Number]
    },
    computed: {
      //激活面板下面线条样式
      barStyle() {
        let style = {width: `${this.barWidth}px`, left: `${this.barOffset}px`};
        return style
      }
    },
    mounted() {
      this.updateNav();
    },
    methods: {
      getChildren() {
        //获取所有的mine-panel子元素
        const allChild = this.$children.filter((child) => {
          return child.$options.name = 'mine-panel'
        });
        return allChild
      },
      getTabIndex(name) {
        return this.tabNavList.findIndex((nav) => {
          return nav.name === name
        });
      },
      updateNav() {
        this.tabNavList = [];
        this.getChildren().forEach((item, index) => {
          this.tabNavList.push({
            label: item.label,
            name: item.currentName || index,
          });
          //第一个panel
          if (index === 1) {
            console.log(item, 'childer000000000000000000');
            //没有设置当前激活的panel,就设置第一个为激活panel
            if (!this.activeKey) {
              this.activeKey = item.currentName
            }
          }
        });
        this.updateBar();
        this.updateContent();
      },
      //更新激活面板的滚动条的宽度及距离
      updateBar() {
        this.$nextTick(() => {
          //获取当前激活面板在所有面板中的索引
          // console.log(this.activeKey, 'updateBAR_activeKey')
          const index = this.getTabIndex(this.activeKey);
          // console.log(index, 'findeIndex');
          //获取素有mine-tabs-tab元素
          const tabElements = this.$refs.navList.querySelectorAll('.mine-tabs-tab');
          const tab = tabElements[index]; //当前激活面板元素
          //bar 的宽度设置tab 当前激活元素的宽度
          this.barWidth = tab ? tab.offsetWidth : 0;
          if (index > 0) {
            //不是第一个：left值等于前面的元素的offsetWidth 加上margin-right 值得累计
            let offset = 0;
            for (let i = 0; i < index; i++) {
              offset += parseFloat(tabElements[i].offsetWidth) + 16;
            }
            this.barOffset = offset;
          } else {
            this.barOffset = 0
          }
        })
      },
      //更新面板内容
      updateContent() {
        //获取面板所有mine-tabs-panel元素和获取mine-tabs-tab一样
        const panelElements = this.$refs.content.querySelectorAll('.mine-tabs-panel');
        const index = this.getTabIndex(this.activeKey);
        panelElements.forEach((el, i) => {
          if (i === index) {
            el.style.display = 'block'
          }else {
            el.style.display = 'none'
          }
        });
        console.log(panelElements, 'panelElements');
      },
      toggle(bar) {
        // const index = this.getTabIndex(bar.name);
        this.activeKey = bar.name;
        // console.log(bar, 'bar---------')
      }
    },
    watch: {
      activeKey(newVal, oldVal) {
        this.updateBar();
        this.updateContent();
        console.log(newVal, oldVal, 'watch')
      }
    }
  }
</script>

<style lang="scss">
    .mine-tabs {
        .mine-tabs-header {
            padding-left: 0;
            margin: 0;
            /*float: left;*/
            list-style: none;
            box-sizing: border-box;
            position: relative;
            transition: transform .5s ease-in-out, -webkit-transform .5s ease-in-out;
            border-bottom: 1px solid #dcdee2;
            margin-bottom: 16px;

            .mine-active-bar {
                position: absolute;
                height: 2px;
                background: #00c8d7;
                /*width: 50px;*/
                bottom: -1px;
                transition: left .3s ease-in-out, -webkit-transform .3s ease-in-out;
            }

            .mine-tabs-tab {
                display: inline-block;
                height: 100%;
                padding: 8px 16px;
                margin-right: 16px;
                box-sizing: border-box;
                cursor: pointer;
                text-decoration: none;
                position: relative;
                transition: color .3s ease-in-out;

                &.mine-tabs-tab-active {
                    color: #00c8d7;
                }
            }
        }

        .mine-tab-content {
            display: flex;
            flex-direction: row;
            transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
        }
    }
</style>