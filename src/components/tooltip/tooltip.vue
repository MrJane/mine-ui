<template>
    <div class="mine-tooltip">
        <div class="mine-tooltip-target">
            <slot></slot>
        </div>
        <div class="mine-tooltip-content">
            <slot name="content"></slot>
        </div>

    </div>
</template>

<script>
  export default {
    name: "mine-tooltip"
  }
</script>

<style>

</style>