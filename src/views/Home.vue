<template>
    <div class="home">
        <div class="card">
            <icon type="iconcheck"></icon>
            <icon type="iconfavorfill"></icon>
            <icon size="24" color="red" type="iconclose"></icon>
            <icon custom="iconfont iconlocationfill" size="24"/>
        </div>
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
  import Icon from '../components/icon/icon'
  import MineMenu from '../components/menu/menu'
  import MineMenuGroup from '../components/menu/menu-group'
  import MineMenuItem from '../components/menu/menu-item'

  export default {
    name: 'home',
    components: {
      Icon, MineMenu, MineMenuItem, MineMenuGroup
    }
  }
</script>
<style lang="scss" scoped>
    .home {
        margin-bottom: 20px;
    }
</style>

