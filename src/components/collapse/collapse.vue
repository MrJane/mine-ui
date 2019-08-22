<template>
    <div class="mine-collapse" :class="simple?'mine-collapse-simple':''">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "collapse",
    data() {
      return {
        currentValue: this.value
      }
    },
    props: {
      //是否开启手风琴 开启手风琴只展示一个，默认false
      accordion: {
        type: Boolean,
        default: false
      },
      simple: {
        type: Boolean,
        default: false
      },
      //当前激活的面板的name
      value: {
        type: [String, Array]
      }
    },
    computed: {
      classes() {
        return ''
      }
    },
    methods: {
      setActive() {
        let activeKey = this.getActiveKey().toString();
        //遍历子元素获取子元素的name值，判断name值是否在activeKey中，也就是currentValue
        this.$children.forEach((child, index) => {
          const name = child.name;
          child.isActive = activeKey.indexOf(name) > -1 //存在isActive true 展开
        })

      },
      getActiveKey() {
        //先获取当前的value，collapse外界不传value值 设置为空数组，value可以传字符串或数组
        let activeKey = this.currentValue || [];
        let accordion = this.accordion;
        // console.log(Array.isArray(activeKey), '8888888888888888888')
        //判断不是数组
        if (!Array.isArray(activeKey)) {
          //把activeKey设置数组
          activeKey = [activeKey]
        }
        //如果外界传的是一个非空数组且开启手风琴模式
        if (accordion && activeKey.length > 1) {
          activeKey = [activeKey[0]]
        }
        for (let i = 0; i < activeKey.length; i++) {
          activeKey[i] = activeKey[i].toString();
        }
        // console.log(activeKey, 'activeKey---')
        return activeKey
      },
      toggle(data) {
        let name = data.name.toString();
        let newActiveKey = [];
        if (this.accordion) { //手风琴模式，只展开一个
          if (!data.isActive) {
            newActiveKey.push(name)//点击的时候不是展开的 添加到newActiveKey中
            // this.currentValue = [name]
          } else {
            // this.currentValue =[]
          }
        } else {
          let activeKey = this.getActiveKey();
          let index = activeKey.indexOf(name); //判断collapse-item name值是否在activeKey中
          if (data.isActive) { //当前是展开的
            activeKey.splice(index, 1)
          } else {
            activeKey.push(name)
          }
          newActiveKey = activeKey
          // this.currentValue = newActiveKey;
        }
        this.currentValue = newActiveKey;
        //双向绑定 只要发送$emit input 即可;
        this.$emit('input', newActiveKey);
        //绑定change事件
        this.$emit('change', newActiveKey);
        // console.log(name, '来自儿子de ============')

      }
    },
    mounted() {
      this.setActive()
    },
    watch: {
      currentValue() {
        this.setActive()
      }
    }
  }
</script>

<style scoped>

</style>
