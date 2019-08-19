<template>
    <div class="mine-btn-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-button-group",
    props: {}
  }
</script>

<style lang="scss" scoped>
    .mine-btn-group {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        & > .mine-button:first-child:not(:last-child){
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            padding-right: 8px;
        }
        & >.mine-button:not(:first-child):not(:last-child){
            margin-left: -1px;
            border-radius: 0;
        }
        & > .mine-button:last-child:not(:first-child){
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            padding-left: 8px;
            margin-left: -1px;
        }


        & > .mine-button-primary:first-child:not(:last-child){
            border-right-color: #2baee9;
        }
        & >.mine-button-primary:not(:first-child):not(:last-child){
            border-left-color: #2baee9;
        }
        & > .mine-button-primary:last-child:not(:first-child){
            border-left-color: #2baee9;
        }
    }
</style>
