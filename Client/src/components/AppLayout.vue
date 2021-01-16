<template>
  <div id="layout">
    <div id="slide-mask" @mouseover="sliderStatus=true"></div>
    <Drawer title="功能界面选择" placement="left" :closable="sliderStatus" v-model="sliderStatus">
      <Menu active-name="1-2" theme="light" width="auto">
        <router-link  to="/module1" >
          <MenuItem name="1-1">
            <Icon type="ios-navigate-outline" />
            <span>综测量化分析</span>
          </MenuItem>
        </router-link>
        <router-link  to="/module2" >
          <MenuItem name="1-2">
            <Icon type="ios-contacts-outline" />
            <span>精准人物画像</span>
          </MenuItem>
        </router-link>
        <router-link  to="/module3" >
          <MenuItem name="1-3">
            <Icon type="md-checkmark-circle-outline" />
            <span>生源-院校推荐</span>
          </MenuItem>
        </router-link>
        <router-link  to="/module4" >
          <MenuItem name="1-4">
            <Icon type="ios-analytics-outline" />
            <span>教学能力评估</span>
          </MenuItem>
        </router-link>
        <router-link  to="/module5" >
          <MenuItem name="1-5">
            <Icon type="md-git-branch" />
            <span>学科关联分析</span>
          </MenuItem>
        </router-link>
      </Menu>
    </Drawer>
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <h2 class="layout-title">CAViz 高校生源综合能力可视化评估系统</h2>
        <Menu mode="horizontal" active-name="1">
          <div class="layout-nav">
            <router-link  to="/module1" >
            <MenuItem name="1">
              <Icon type="ios-navigate-outline" />
              量化分析
            </MenuItem>
            </router-link>
            <router-link  to="/module2" >
            <MenuItem name="2">
              <Icon type="ios-contacts-outline" />
              人物画像
            </MenuItem>
            </router-link>
            <router-link  to="/module3" >
            <MenuItem name="3">
              <Icon type="md-checkmark-circle-outline" />
              双向推荐
            </MenuItem>
            </router-link>
            <router-link  to="/module4" >
            <MenuItem name="4">
              <Icon type="ios-analytics-outline" />
              教学评估
            </MenuItem>
            </router-link>
            <router-link  to="/module5" >
            <MenuItem name="5">
              <Icon type="md-git-branch" />
              关联分析
            </MenuItem>
            </router-link>
          </div>
        </Menu>
      </Header>
      <Content>
        <router-view></router-view>
        <!--        <AppContainer></AppContainer>-->
      </Content>
<!--      <Footer class="layout-footer-center">2019-2020 &copy; DATA-VIS</Footer>-->
    </Layout>
  </div>
</template>

<script>
    import router from '../router/index'
    export default {
        name: "APPLayout",
        data(){
            return {
                sliderStatus:false
            }
        },
        methods: {
        },
        components: {
        },
        router
    }
</script>

<style scoped>
  .layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }
  .layout-title{
    font-family: Monoton,monospace;
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 100;
  }
  #slide-mask{
    position: absolute;
    z-index: 999;
    width: 10px;
    height: 100%;
  }
</style>
