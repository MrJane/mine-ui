<template>
    <div>
        <mine-card>
            <div class="demo-col">
                <mine-row>
                    <mine-col span="8">hh</mine-col>
                    <mine-col span="8">hh</mine-col>
                    <mine-col span="8">hh</mine-col>
                </mine-row>
            </div>
            <br>
            <div class="demo-col">
                <mine-row>
                    <mine-col span="5" offset="2">hh</mine-col>
                    <mine-col span="6" offset="1">hh</mine-col>
                    <mine-col span="8" offset="2">hh</mine-col>
                </mine-row>
            </div>
            <br>
            <div class="demo-col">
                <mine-row>
                    <mine-col span="5">hh</mine-col>
                    <mine-col span="3">hh</mine-col>
                    <mine-col span="4">hh</mine-col>
                    <mine-col span="2">hh</mine-col>
                </mine-row>
            </div>
            <br>
            <div class="demo-col">
                <mine-row gutter="20">
                    <mine-col span="5">hh</mine-col>
                    <mine-col span="5">hh</mine-col>
                    <mine-col span="4">hh</mine-col>
                    <mine-col span="10">hh</mine-col>
                </mine-row>
            </div>
        </mine-card>
        <mine-card>
            <mine-input></mine-input>
            <mine-input disabled></mine-input>
        </mine-card>
    </div>
</template>

<script>
  import MineCard from '../../../components/card/card';
  import MineRow from '../../../components/grid/row';
  import MineCol from '../../../components/grid/col';
  import MineInput from '../../../components/input/input'

  export default {
    name: "Grid",
    components: {
      MineCard, MineRow, MineCol,MineInput
    }
  }
</script>

<style lang="scss">
    .demo-col {
        .mine-col {
            color: #fff;
            padding: 10px 0;
            text-align: center;
            /*background: rgba(0, 153, 229, .9);*/
        }

        .mine-col:nth-child(odd) {
            /*background: rgba(0, 153, 229, .7);*/
            padding: 10px 0px;
            color: #fff;
        }
    }
</style>
