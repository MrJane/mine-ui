<template>
    <div class="mine-step-item" :style="styles">
        <div class="mine-step-line">
            <i></i>
        </div>
        <div class="mine-step-tag">
            <div class="mine-step-tag-inner"></div>
        </div>
        <div class="mine-step-main">
            <div class="mine-step-title">
                {{title}}
            </div>
            <div v-if="content" class="mine-step-content">
                <slot>{{content}}</slot>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "mine-step",
    data() {
      return {
        total: 1
      }
    },
    props: {
      //状态
      status: {
        type: String,
        default: ''
      },
      //标题
      title: {
        type: String,
        default: ''
      },
      //内容
      content: {type: String},
      //图标
      icon: {
        type: String
      }
    },
    computed: {
      styles() {
        return {
          width: `${1 / this.total * 100}%`
        }

      }
    }
  }
</script>

<style lang="scss">

</style>