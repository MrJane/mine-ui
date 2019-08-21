<template>
    <div class="mine-collapse-item">
        <div class="mine-collapse-header">
            <slot></slot>
        </div>
        <div class="mine-collapse-body"></div>
    </div>
</template>

<script>
  export default {
    name: "mine-collapse-item",
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>