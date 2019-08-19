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
        <mine-card class="box-card">
            <mine-radio label="hello">label</mine-radio>
        </mine-card>

        <div class="card">
            <icon type="iconcheck"></icon>
            <icon type="iconfavorfill"></icon>
            <icon size="24" color="red" type="iconclose"></icon>
            <icon custom="iconfont iconlocationfill" size="24"/>
        </div>

        <mine-card class="box-card">
            <div>
                <mine-radio-group>
                    <mine-radio label="hello">label</mine-radio>
                    <mine-radio label="hello">label</mine-radio>
                </mine-radio-group>
            </div>
            <div>
                <mine-radio-group type="button">
                    <mine-radio label="hello">label</mine-radio>
                    <mine-radio label="hello">label</mine-radio>
                </mine-radio-group>
            </div>
        </mine-card>
        <mine-card class="box-card">
            <mine-switch></mine-switch>
            <mine-switch checked="true">ddd</mine-switch>
        </mine-card>
        <mine-card class="box-card">
           <mine-badge></mine-badge>
        </mine-card>
        <div class="card" style="width: 240px">
            <mine-menu active-name="3">
                <mine-menu-group title="家庭住址">
                    <mine-menu-item name="1">
                        <icon type="iconlocationfill"></icon>
                        文章管理
                    </mine-menu-item>
                    <mine-menu-item name="2">
                        <icon type="iconfavorfill"></icon>
                        分类管理
                    </mine-menu-item>
                </mine-menu-group>
                <mine-menu-item name="3">
                    <icon type="iconlocationfill"></icon>
                    评论管理
                </mine-menu-item>
                <mine-menu-item name="4">
                    <icon type="iconlocationfill"></icon>
                    用户留存
                </mine-menu-item>
            </mine-menu>
        </div>
    </div>
</template>

<script>
  import MineButton from '../components/button/button'
  import MineButtonGroup from '../components/button/button-group'
  import MineCard from '../components/card/main'
  import Icon from '../components/icon/icon'
  import MineMenu from '../components/menu/menu'
  import MineMenuGroup from '../components/menu/menu-group'
  import MineMenuItem from '../components/menu/menu-item'
  import MineRadioGroup from '../components/radio/radio-group'
  import MineRadio from '../components/radio/radio'
  import MineSwitch from '../components/switch/switch';
  import MineBadge from '../components/badge/badge'

  export default {
    name: 'home',
    components: {
      MineButton,
      MineButtonGroup,
      MineCard,
      Icon,
      MineMenu,
      MineMenuItem,
      MineMenuGroup,
      MineRadioGroup,
      MineRadio,
      MineSwitch,
      MineBadge
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

    .home {
        margin-bottom: 20px;
    }
</style>


