<template>
    <div class="mine-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "mine-checkbox-group",
    data() {
      return {
        currentValue:this.value
      }
    },
    props: {
      //用于v-model双向绑定
      value: {
        type: Array,
        default () {
          return [];
        }
      },
      size: {
        type: String
      }
    },
    mounted(){
      this.updateChildValue()
    },
    methods: {
      updateChildValue() {
        let children = this.$children;
        // const {value} = this;
        // console.log(value,'卧槽卧槽')
        children.forEach(child => {
          if (child.$options.name === 'mine-checkbox') {
            //this.value是checkboxGroup 外界传进来的也可以是v-model双向绑定的，找到子元素把子元素的model值复制于value
            child.model = this.value;
            child.currentValue = this.value.indexOf(child.label) >= 0;
            child.isGroup = true;
          }
        })
      },
      change(data){
        // console.log(data,'子传来的');
        this.$emit('input',data)
        //这个要配合下面的watch value,子组件checkbox选中不选中改变绑定的数组model并传过来，checkboxGroup拿到这个mode通过$emit()l改变外界的v-model的value,
        //然后watch value 再重新给子组件设置model值 子组件的model值其实就是外界的value
      }
    },
    watch:{
      value(){
        this.updateChildValue(true);
      }
    }
  }
</script>

<style scoped>

</style>