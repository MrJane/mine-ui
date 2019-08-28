<template>
    <div class="mine-table">
        <table cellpadding="0" cellspacing="0" border="0">
            <thead>
            <tr>
                <th>#</th>
                <th v-for="column in columns">{{column.title}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in data">
                <td>{{index}}</td>
                <td v-for="column in columns">{{item[column.key]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name: "mine-table",
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
.mine-table{
    width: inherit;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    color: #515a6e;
    font-size: 12px;
    background-color: #fff;
    box-sizing: border-box;
    position: relative;
    border: 1px solid #dcdee2;
    border-bottom: 0;
    border-right: 0;
    overflow: hidden;
    th{
        background-color: #f8f8f9;}
    th,td{
        height: 40px;
        white-space: nowrap;
        overflow: hidden;

        min-width: 0;
        box-sizing: border-box;
        text-align: left;
        text-overflow: ellipsis;
        vertical-align: middle;
        border-bottom: 1px solid #e8eaec;
    }
}
</style>
