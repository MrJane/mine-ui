<template>
    <label class="mine-checkbox-wrap">
        <span class="mine-checkbox" :class="currentValue?'mine-checkbox-checked':''">
            <span class="mine-checkbox-inner"></span>
            <!--
                如果是一组的话，checkbox在vue里使用需要绑定一个数组并且要使用value属性，
                意思checkbox被选中就会自动把value值添加到那个数组里
            -->
            <input
                    v-if="isGroup"
                    type="checkbox"
                    class="mine-checkbox-input"
                    :value="label"
                    v-model="model"
                    :disabled="disabled"
                    :name="name"
                    @change="change"
                    @focus="handlerFocus"
                    @blur="handlerBlur"
            >
            <!--model数据来自父元素checkGroup，-->
            <input
                    v-else
                    type="checkbox"
                    class="mine-checkbox-input ddd "
                    :disabled="disabled"
                    :name="name"
                    :checked="currentValue"
                    @change="change"
                    @focus="handlerFocus"
                    @blur="handlerBlur"
            >
        </span>
    </label>
</template>

<script>
  export default {
    name: "mine-checkbox",
    data() {
      return {
        //老套路
        currentValue: this.value,
        //是否在checkGroup里面
        isGroup: false,
        model: ['1321'],
      }
    },
    props: {
      value: {
        type: [Number, String, Boolean]
      },
      label: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      name: {
        type: String
      }

    },
    mounted() {
      const hasParent = this.$parent.$options.name === 'mine-checkbox-group';
      console.log('hasParent', hasParent)
      if (hasParent) {
        this.isGroup = true
        this.$parent.updateChildValue()
      }
    },
    methods: {
      change(e) {
        if (this.disabled) return;

        let checked = e.target.checked;
        this.currentValue = checked;
        if (this.isGroup) {
          //如果是checkboxGroup
          this.$parent.change(this.model);
          console.log(this.model, '子元素')
        }
        console.log(checked, 'yyyyyyyyyyyy')

      },
      handlerFocus() {

      },
      handlerBlur() {

      }
    }
  }
</script>

<style scoped>

</style>