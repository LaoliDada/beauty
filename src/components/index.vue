<template>
  <div class="home-page-wrapper">
     <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            退出登录
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu @on-select="jumpTo" active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                股东管理
                            </template>
                            <MenuItem name="shareholders">股东概览</MenuItem>
                            <MenuItem name="situationShareOutBonus">分红情况</MenuItem>
                            <MenuItem name="investmentShareholders">投资股东</MenuItem>
                            <MenuItem name="consumptionShareholders">消费股东</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                活动管理
                            </template>
                            <MenuItem name="2-1">优惠消费</MenuItem>
                            <MenuItem name="2-1">活动列表</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                数据大盘
                            </template>
                            <MenuItem name="3-1">数据大盘</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                会员管理
                            </template>
                            <MenuItem name="3-1">会员列表</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <p class="home-page-wrapper-title">{{$route.meta}}</p>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
   
  },
  methods:{
    jumpTo(name){
      this.$router.push(`/index/${name}`);
    }
  }
}
</script>
<style scoped lang="scss">
.home-page-wrapper{
  height:100%;
  .home-page-wrapper-title{
      padding:16px;
      font-size:16px;
      color:#333;
  }
}
.ivu-layout{
  height:100%;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-nav{
  float:right;
}
</style>