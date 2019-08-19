<template>
    <div class="home">
        <mine-card class="box-card">
            <mine-button size="large" type="primary" class="primary">大号按钮</mine-button>
            <mine-button>默认按钮</mine-button>
            <mine-button disabled>默认按钮失效</mine-button>
            <mine-button size="small">幽灵按钮</mine-button>
        </mine-card>
        <mine-card class="box-card">
            <mine-button-group>
                <mine-button>默认按钮</mine-button>
                <mine-button>默认按钮</mine-button>
            </mine-button-group>
            <mine-button-group>
                <mine-button>默认按钮</mine-button>
                <mine-button>默认按钮</mine-button>
                <mine-button>默认按钮</mine-button>
                <mine-button>默认按钮</mine-button>
                <mine-button>默认按钮</mine-button>
            </mine-button-group>
            <mine-button-group>
                <mine-button size="large" type="primary">默认按钮</mine-button>
                <mine-button size="large" type="primary">默认按钮</mine-button>
                <mine-button size="large" type="primary">默认按钮</mine-button>
                <mine-button size="large" type="primary">默认按钮</mine-button>
            </mine-button-group>
        </mine-card>
        <mine-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <a size="large" type="primary">默认按钮</a>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </mine-card>
    </div>
</template>

<script>
  import MineButton from '../components/button/button'
  import MineButtonGroup from '../components/button/button-group'
  import MineCard from '../components/card/main'

  export default {
    name: 'home',
    components: {
      MineButton,
      MineButtonGroup,
      MineCard
    }
  }
</script>
<style lang="scss" scoped>
    .card {
        margin: 20px;
        border-bottom: 1px solid #d9d9d9;
    }

    .box-card {
        width: 980px;
        margin: auto;
        margin-bottom: 5px;
    }
</style>
