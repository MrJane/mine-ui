<template>
    <div class="mine-input-wrap">
        <input :disabled="disabled" type="text" class="mine-input">
    </div>
</template>

<script>
  export default {
    name: "mine-input",
    props: {
      //用于v-model绑定
      value: {
        type: [Boolean, String, Number]
      },
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      //头部Icon
      prefixIcon: {
        type: String,
        default: ''
      },
      //尾部Icon
      suffixIcon: {
        type: String,
        default: ''
      },
      //是否清空
      clearable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>
