<template>
    <div class="mine-input-wrap">
        <input :disabled="disabled" type="text" class="mine-input">
    </div>
</template>

<script>
  export default {
    name: "mine-input",
    props: {
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>
