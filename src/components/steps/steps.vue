<template>
    <div class="mine-steps" :class="`mine-steps-${direction}`">
        <slot>

        </slot>
    </div>
</template>

<script>
  export default {
    name: "mine-steps",
    props: {
      //当前步骤
      current: {
        type: Number,
        default: 0
      },
      //当前状态
      status: {
        type: String,
        default:"process"
      },
      //方向:horizontal 水平 vertical垂直
      direction: {
        type: String,
        default: 'horizontal'
      },
      size: {
        type: String,
        default: 'small'
      }

    },
    mounted() {
      this.updateChildProps();
      this.updateCurrent(true);
    },
    methods: {
      updateChildProps() {
        const total = this.$children.length;
        this.$children.forEach((child, index) => {
          child.stepNumber = index + 1;
          if (this.direction === 'horizontal') {
            //水平方向的设置宽度百分比
            child.total = total;
          }
        });
        console.log(this.$children.length, '-------------------------')
      },
      updateCurrent(){
        if (this.current < 0 || this.current >= this.$children.length ) {
          return;
        }
        this.$children[this.current].currentStatus = this.status;
      }
    }

  }
</script>

<style lang="scss">
    .mine-steps {
        font-size: 0;
        width: 100%;
        line-height: 1.5;

    }
</style>