<template>
    <div class="mine-drawer">
        <transition name="fade">
            <div class="mine-drawer-mask" v-show="true" v-if="true" @click="handleMask"></div>
        </transition>
    </div>
</template>

<script>
  export default {
    name: "mine-drawer",
  }
</script>

<style lang="scss">
    .mine-drawer {
        .mine-drawer-mask {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(55, 55, 55, .6);
            z-index: 1000;
        }
    }
</style>