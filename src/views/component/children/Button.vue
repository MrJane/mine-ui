<template>
    <div class="main-container">
        <mine-card class="box-card">
            <mine-button size="large" type="primary" class="primary">大号按钮</mine-button>
            <mine-button>默认按钮</mine-button>
            <mine-button disabled>默认按钮失效</mine-button>
            <mine-button size="small">幽灵按钮</mine-button>
        </mine-card>
    </div>
</template>

<script>
  import MineCard from '@/components/card/main';
  import MineButton from '@/components/button/button'
  import MineButtonGroup from '@/components/button/button-group'

  export default {
    name: "Button",
    components: {
      MineButton, MineCard, MineButtonGroup
    }
  }
</script>

<style lang="scss" scoped>
    .main-container {
        margin-left: 240px;
        padding-left: 20px;
    }
</style>
