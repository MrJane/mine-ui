<template>
    <div class="mine-tabs-panel">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-panel",
    data() {
      return {
        currentName: this.name
      }
    },
    props: {
      name: {
        type: String,
      },
      label: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>