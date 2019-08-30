<template>
    <div class="mine-table-wrap">
        <div class="mine-table" :class="{'mine-table-border':border,'mine-table-stripe':stripe}">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                <tr class="mine-table-row">
                    <th>
                        <div class="mine-table-cell">
                            <span>#</span>
                        </div>
                    </th>
                    <th v-for="column in columns">
                        <div class="mine-table-cell">
                            {{column.title}}
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody class="mine-table-tbody">
                <tr v-for="(item,index) in data" class="mine-table-row">
                    <td>
                        <div class="mine-table-cell">
                            <span>
                                {{index}}
                            </span>
                        </div>
                    </td>
                    <td v-for="column in columns">
                        <div class="mine-table-cell">
                            <span>{{item[column.key]}}</span>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: "mine-table",
    props: {
      //
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      //带边框 #
      border: {
        type: Boolean,
        default: false
      },
      //是否显示斑马线
      stripe: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
    .mine-table-wrap {
        position: relative;
        border: 1px solid #dcdee2;
        border-bottom: 0;
        border-right: 0;
        overflow: hidden;

    }

    .mine-table {
        width: inherit;
        height: 100%;
        max-width: 100%;
        overflow: hidden;
        color: #515a6e;
        font-size: 12px;
        background-color: #fff;
        box-sizing: border-box;

        &:after {
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background-color: #dcdee2;
            z-index: 3;
        }

        > table {
            table-layout: fixed;
            width: 100%;
        }

        th {
            background-color: #f8f8f9;
        }

        th, td {
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

        .mine-table-tbody > tr {
            &:hover {
                td {
                    background: #ebf7ff;
                }
            }
        }

        .mine-table-row {
            .mine-table-cell {
                padding-left: 18px;
                padding-right: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                word-break: break-all;
                box-sizing: border-box;
            }
        }
    }

    /*边框线样式*/
    .mine-table-border {
        td, th {
            border-right: 1px solid #e8eaec;
        }
    }

    /*    斑马线样式 */
    .mine-table-stripe {
        .mine-table-tbody {

            tr:nth-child(2n) {
                td {
                    background: #f8f8f9;
                }
            }
            tr{
                &:hover {
                    td {
                        background: #ebf7ff;
                    }
                }
            }
        }
    }
</style>
