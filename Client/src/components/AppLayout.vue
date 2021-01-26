<template>
  <div id="layout">
<!--    <div id="slide-mask" @mouseover="sliderStatus=true"></div>
    <Drawer title="功能界面选择" placement="left" :closable="sliderStatus" v-model="sliderStatus">
      <Menu active-name="1-2" theme="light" width="auto">
        <router-link  to="/module1" >
          <MenuItem name="1-1">
            <Icon type="ios-navigate-outline" />
            <span>综合素质评估</span>
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
            <span>档案知识图谱</span>
          </MenuItem>
        </router-link>
        <router-link  to="/module5" >
          <MenuItem name="1-5">
            <Icon type="md-git-branch" />
            <span>学科关联分析</span>
          </MenuItem>
        </router-link>
      </Menu>
    </Drawer>-->
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <div class="layout-title">
          <p >CAViz<span class="system-name">高 校 生 源 综 合 能 力 可 视 化 评 估 系 统 <Icon type="ios-ionic-outline" /></span><span class="datetime"> <span>登录 | 注册</span> <Icon type="ios-timer-outline" /> <Time :time="datetime" type="datetime" /></span></p>
        </div>

<!--        <Menu mode="horizontal" active-name="1">
          <div class="layout-nav">
            <router-link  to="/module1" >
            <MenuItem name="1">
              <Icon type="ios-navigate-outline" />
              综测评估
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
              知识图谱
            </MenuItem>
            </router-link>
            <router-link  to="/module5" >
            <MenuItem name="5">
              <Icon type="md-git-branch" />
              关联分析
            </MenuItem>
            </router-link>
          </div>
        </Menu>-->
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
                sliderStatus:false,
                datetime:(new Date()).getTime() - 86400 * 3 * 1000
            }
        },
        mounted(){
            setInterval(()=>{
                this.datetime = (new Date()).getTime() - 86400 * 3 * 1000
            },1000)
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

  .system-name{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin-left: 27%;
    font-weight: 400;
  }

  .datetime{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 16px;
    margin-left: 23%;
  }
  .layout-title{
    font-family: Monoton,monospace;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 100;
  }
  #slide-mask{
    position: absolute;
    z-index: 999;
    width: 10px;
    height: 100%;
  }
</style>
