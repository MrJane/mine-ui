<template>
    <div class="mine-pager">
        <ul>
            <li class="mine-page-item" v-for="page in pages" :key="page">{{page}}</li>
        </ul>

    </div>
</template>

<script>
  export default {
    name: "mine-pager",
    data () {
      // let pages = [1,this.totalPage,this.currentPage,this.currentPage-1,this.currentPage-2,this.currentPage+1,this.currentPage+2];
      let pages = []
      for (let i = 1; i < this.totalPage; i++) {
        pages.push(i)
      }
      return {
        pages
      }
    },
    props: {
      //总页数
      totalPage: {
        type: Number,
        required: true
      },
      //当前页码
      currentPage: {
        type: Number,
        required: true
      },
      //只有一页是否隐藏
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>

</style>
