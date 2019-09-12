<template>
    <div class="mine-pager">
        <ul>
            <li class="mine-page-item" :class="{'mine-page-item-active':currentPage===page}" v-for="page in pages" :key="page">{{page}}</li>
        </ul>

    </div>
</template>

<script>
  export default {
    name: "mine-pager",
    data () {
      let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2];
      // let pages = [];
      // for (let i = 1; i < this.totalPage; i++) {
      //   pages.push(i)
      // }
      let u = unique(pages.sort((a, b) => a - b));
      //添加...处理
      let u2 = u.reduce((pre, cur, index) => {
        if (u[index + 1] != undefined && u[index + 1] - u[index] > 1) {
          pre.push(cur);
          pre.push('...')
        } else {
          pre.push(cur)
        }
        return pre
      }, []);
      return {
        pages: u2
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

  //去重
  function unique (ary) {
    // return [...new Set(ary)];
    let obj = {};
    ary.map((item) => {
      obj[item] = true
    });
    console.log(Object.keys(obj));
    /*Object.keys(obj).map(parseInt) =>Object.keys返回的数组的元素是字符串，需要map遍历转为number，map参数这不能直接放parseInt
    * 解析
    *let arry = ['1', '2', '3'];
    * arry.map(function (item, index, self) {});
    * 不管往map函数传什么参数函数都会向参数函数里传三个参数，第一个元素item，第二个索引index，第三个数组本身self
    * 所以当我们直接在map里写parseInt会自动往parseInt传三个参数
    * arry.map(parseInt);
    * 相当于parseInt执行以下三次:parseInt('1',0,arry)parseInt('2',1,arry)parseInt('3',2,arry)
    * 而parseInt函数接收两个参数分别表示第二个参数表示进制
    * */
    return Object.keys(obj).map(item => parseInt(item, 10))
  }
</script>

<style scoped>

</style>
