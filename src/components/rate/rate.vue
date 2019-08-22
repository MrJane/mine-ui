<template>
    <div class="mine-rate">
        <span
                class="mine-rate-item" v-for="(item,key) in max"
                :style="{color:textColor}"

                :key="item"
                @mousemove="handleMousemove($event,item)"
                @click="handleClick($event,item)"
                @mouseleave="handleResetValue"
        >
            <i class="mine-rate-star" :class="item<=currentIndex?'mine-rate-star-active':''">
                <i></i>
            </i>
        </span>
        <span v-show="showText" class="mine-rate-text">{{showText}}</span>
    </div>
</template>

<script>
  export default {
    name: "mine-rate",
    data() {
      return {
        currentValue: this.value,
        hoverIndex: -1,
        isHover: false,
      }
    },
    props: {
      //最大分值
      max: {
        type: Number,
        default: 5
      },
      value: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      textColor: {
        type: String,
        default: 'rgb(247, 186, 42)'
      },
      allowHalf:{
        type:Boolean,
        default:true
      },
      showText:{
        type:Boolean,
        default:false
      }
    },
    computed: {
      currentIndex() {
        //点击事件就去currentValue移动事件取hoverIndex值
        return this.isHover ? this.hoverIndex : this.currentValue
      }
    },
    methods: {
      handleMousemove(e, value) {
        if (this.disabled) return; //禁用的话直接return
        // this.currentValue = value;
        //标志移动事件
        this.isHover = true;
        this.hoverIndex = value;
        console.log(e, value, '99999999999999')
      },
      handleClick(e, value) {
        if (this.disabled) return;
        this.currentValue = value;
        console.log(e, value, '点击事件')
      },
      handleResetValue() {
        if (this.disabled) return;
        this.hoverIndex = -1;
        this.isHover = false;
        // this.currentValue = this.value;
        // this.hoverIndex = -1;
      }
    },
    mounted(){
      console.log(this.allowHalf,'对半')
    },
    watch: {
      value() {
        this.currentValue = this.value;
      }
    }
  }
</script>

<style scoped>

</style>