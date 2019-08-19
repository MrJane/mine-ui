<template>
    <div class="mine-menu">
        <slot></slot>
    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "mine-menu",
    props: {
      activeName: {
        type: [String, Number]
      },
      vertical: {type: Boolean, default: false}
    },
    data() {
      return {
        eventBus: new Vue(),
        currentIndex: '',
        currentActiveName: this.activeName,
        currentPath: ''
      }
    },
    methods: {
      broadcast() {
        this.$children.forEach(item => {
          console.log(item.$options.name, 'item===============')
        })
      }
    },
    mounted(){
      this.broadcast()
      this.eventBus.$emit('on-update-active-name',this.currentActiveName)
    },
    provide() {
      return {eventBus: this.eventBus}
    },
  }
</script>

<style lang="scss" scoped>
    .mine-menu {
        display: block;
        margin: 0;
        padding: 0;
        outline: 0;
        list-style: none;
        color: #515a6e;
        font-size: 14px;
        position: relative;
        z-index: 900;

        &:after {
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            background: #dcdee2;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 1;
        }
    }
</style>