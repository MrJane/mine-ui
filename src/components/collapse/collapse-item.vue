<template>
    <div class="mine-collapse-item" @click="toggle">
        <div class="mine-collapse-header" :style="styles">
            <icon type="iconcheck"></icon>
            <slot></slot>
        </div>
        <div class="mine-collapse-content" v-show="isActive">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
  import Icon from '../../components/icon/icon'

  export default {
    name: "mine-collapse-item",
    components: {
      Icon
    },
    data() {
      return {
        index: 0,
        isActive: false
      }
    },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed:{
      styles(){
        return this.isActive?{borderBottom:'1px solid #dcdee2'}:{}
      }
    },
    methods: {
      toggle() {
        this.$parent.toggle({
          name: this.name,
          isActive:this.isActive
        })
        console.log(this.$parent, 'parent==========')
      }
    }
  }
</script>

<style scoped>

</style>
