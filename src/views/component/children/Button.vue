<template>
    <div class="main-container">
        <mine-card class="box-card">
            <mine-button size="large" type="primary" class="primary">大号按钮</mine-button>
            <mine-button size="large" type="primary" class="primary" shape="round">大号按钮</mine-button>
            <mine-button size="large" type="primary" class="primary" shape="circle">大</mine-button>
            <mine-button>默认按钮</mine-button>
            <mine-button disabled>默认按钮失效</mine-button>
            <mine-button size="small">幽灵按钮</mine-button>
            <mine-button type="dashed" shape="round">虚线按钮</mine-button>
            <mine-button-group>
                <mine-button disabled>默认按钮失效</mine-button>
                <mine-button size="small">幽灵按钮</mine-button>
            </mine-button-group>
        </mine-card>
        <Page :total="100"/>
        <div>
            <mine-input-number>

            </mine-input-number>
        </div>
        <div>
            <mine-dropdown>
                <span>hover触发</span>
                <mine-dropdown-menu slot="dropdown">
                    <mine-dropdown-item>驴打滚</mine-dropdown-item>
                    <mine-dropdown-item>炸酱面</mine-dropdown-item>
                    <mine-dropdown-item>豆汁儿</mine-dropdown-item>
                    <mine-dropdown-item>冰糖葫芦</mine-dropdown-item>
                </mine-dropdown-menu>
            </mine-dropdown>
        </div>
        <div>
            <mine-tabs value="">
                <mine-tab-panel label="标签一标签一" name="tab01">
                    标签内容01
                </mine-tab-panel>
                <mine-tab-panel label="标签二" name="tab02">
                    标签内容02
                </mine-tab-panel>
                <mine-tab-panel label="标签三" name="tab03">
                    标签内容033333
                </mine-tab-panel>
            </mine-tabs>
        </div>
        <!--        <Collapse :value="['1','2']">-->
        <!--            <Panel name="1">-->
        <!--                史蒂夫·乔布斯-->
        <!--                <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>-->
        <!--            </Panel>-->
        <!--            <Panel name="2">-->
        <!--                斯蒂夫·盖瑞·沃兹尼亚克-->
        <!--                <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary-->
        <!--                    Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC-->
        <!--                    Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>-->
        <!--            </Panel>-->
        <!--            <Panel name="3">-->
        <!--                乔纳森·伊夫-->
        <!--                <p slot="content">-->
        <!--                    乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>-->
        <!--            </Panel>-->
        <!--        </Collapse>-->
        <br>
        <mine-collapse @change="handlerChange" v-model="value" :accordion="true">
            <mine-collapse-item name="1">
                斯蒂夫·盖瑞·沃兹尼亚克 {{value}}
                <div slot="content">
                    乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                </div>
            </mine-collapse-item>
            <mine-collapse-item name="2">

            </mine-collapse-item>
            <mine-collapse-item name="3">

            </mine-collapse-item>
        </mine-collapse>
        <br>

        <mine-rate v-model="value3"></mine-rate>
        <br>
        <mine-rate :value="3" allow-half></mine-rate>
        <br>
        <el-rate v-model="value3"
                 show-text>
        </el-rate>
    </div>
</template>

<script>
  import MineCard from '@/components/card/card';
  import MineButton from '@/components/button/button';
  import MineButtonGroup from '@/components/button/button-group';
  import MineCollapse from '../../../components/collapse/collapse';
  import MineCollapseItem from '../../../components/collapse/collapse-item';
  import MineRate from '../../../components/rate/rate';
  import MineTabs from '../../../components/tabs/tabs';
  import MineTabPanel from '../../../components/tabs/panel';
  import MineDropdown from '../../../components/dropdown/dropdown';
  import MineDropdownMenu from '../../../components/dropdown/dropdown-menu';
  import MineDropdownItem from '../../../components/dropdown/dropdown-item';
  import MineSelect from '../../../components/select/select';
  import MineInputNumber from '../../../components/input-number/input-number';

  export default {
    name: "Button",
    components: {
      MineButton,
      MineCard,
      MineButtonGroup,
      MineCollapse,
      MineCollapseItem,
      MineRate,
      MineTabPanel,
      MineTabs,
      MineDropdown,
      MineDropdownMenu,
      MineDropdownItem,
      MineSelect,
      MineInputNumber
    },
    methods: {
      handlerChange(value) {
        // alert(value + 'hello')
      }
    },

    data() {
      return {
        value: ['2', '3'],
        value3: 2
      }
    }
  }
</script>

<style lang="scss" scoped>
    .main-container {
        margin-left: 240px;
        padding-left: 20px;
    }
</style>
