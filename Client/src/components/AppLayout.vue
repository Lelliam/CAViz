<template>
  <div id="layout">
    <div class="slide-img"></div>
    <div class="slide-img"></div>
    <div class="head-img"></div>
    <div class="header">
      <div class="logo">
        <svg>
          <g data-v-1e121de1="" fill="#fff"><g transform="translate(0.001708984375,0)"><rect fill="#fff" width="53.3651008605957" height="1" fill-opacity="1" x="0" y="14.5"></rect> <g transform="translate(56.3651008605957,0)"><!----> <svg filter="url(#colors7186791444)" x="0" y="0" width="25.981055480378892" height="30" filtersec="colorsf3878930210" class="image-svg-svg primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 107.4"><path d="M61.9 96.2L17.4 70.5V36.9l29.1-16.8 29.1 16.8v33.6L31.1 96.2M2 28v51.4l44.5 25.7L91 79.4V28L46.5 2.3 2 28zm89 51.4L2 28m89 0L2 79.4" fill="none" stroke="#202121" stroke-width="4" stroke-miterlimit="10"></path></svg></svg> <defs><filter id="colors7186791444"><feColorMatrix type="matrix" values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0" class="icon-fecolormatrix"></feColorMatrix></filter> <filter id="colorsf3878930210"><feColorMatrix type="matrix" values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0" class="icon-fecolormatrix"></feColorMatrix></filter> <filter id="colorsb4482388077"><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" class="icon-fecolormatrix"></feColorMatrix></filter></defs></g> <rect fill="#fff" width="53.3651008605957" height="1" fill-opacity="1" x="85.34615707397461" y="14.5"></rect></g> <g transform="translate(0,31.715085983276367)"><g fill-rule="" class="tp-name" transform="translate(0,0)"><g><path d="M4.68-2.70L4.68-2.70Q4.05-2.70 3.51-2.92Q2.97-3.15 2.59-3.55Q2.21-3.96 2.07-4.52Q1.93-5.08 2.11-5.71L2.11-5.71L5.13-28.17L32.35-28.17L31.90-23.85L12.91-23.85L10.75-7.02L27.58-7.02L29.74-8.73L28.89-2.70L4.68-2.70ZM44.73-28.17L62.46-28.17L65.88-2.70L58.14-2.70L57.24-9.63L46.44-9.63L43.42-2.70L36.09-2.70L46.03-26.91L44.73-28.17ZM55.53-23.85L52.52-23.85L48.20-13.95L56.84-13.95L55.53-23.85ZM87.34-2.70L75.24-2.70L70.47-26.91L69.61-28.17L78.70-28.17L82.13-10.48L90.77-28.17L99.41-28.17L87.34-2.70ZM115.11-28.17L114.25-22.99L106.02-22.99L106.47-28.17L115.11-28.17ZM104.31-21.69L114.25-21.69L111.64-2.70L103.00-2.70L105.61-20.43L104.31-21.69ZM130.77-17.37L119.52-17.37L120.42-21.69L140.72-21.69L140.26-17.37L128.16-7.02L138.96-7.02L138.10-2.70L117.81-2.70L118.26-7.02L130.77-17.37Z" transform="translate(-2.0121679687499996, 28.169999999999998)"></path></g> <!----> <!----> <!----> <!----> <!----> <!----> <!----></g> <rect fill="#fff" width="138.7112579345703" height="1" x="0" y="32.46999931335449"></rect></g></g>
        </svg>
      </div>
      <div class="title">
        <h2>高校生源综合能力可视化评估平台</h2>
        <p class="sub-title">Comprehensive Assessment Visualization Platform</p>
        <div class="title-bg-img"></div>
      </div>
      <div class="title-datetime">
        <div class="datetime-graph">
          <canvas id="dateTime" width="100px" height="100px"></canvas>
        </div>
        <div class="datetime-text">
          <h2 v-model="datetime">{{datetime}}</h2>
          <h4> <Icon type="ios-timer-outline" /> {{datetime_time}}</h4>
        </div>

      </div>
    </div>
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
<!--      <Header :style="{position: 'fixed', width: '100%'}">
        <div class="layout-title">
          <p >CAViz<span class="system-name">高 校 生 源 综 合 能 力 可 视 化 评 估 系 统 <Icon type="ios-ionic-outline" /></span><span class="datetime"> <span>登录 | 注册</span> <Icon type="ios-timer-outline" /> <Time :time="datetime" type="datetime" /></span></p>
        </div>

&lt;!&ndash;        <Menu mode="horizontal" active-name="1">
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
        </Menu>&ndash;&gt;
      </Header>-->
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
                // sliderStatus:false,
                datetime:'',
                datetime_time:''
            }
        },
        mounted(){
            setInterval(()=>{
                this.datetime = new Date().toDateString()
                this.datetime_time = new Date().toTimeString().replace('(China Standard Time)','').replace('(中国标准时间)','')
            },1000)
            // this.set_dateTime()
        },
        methods: {
            set_dateTime(){

                let canvas = document.getElementById("dateTime");
                let ctx = canvas.getContext("2d");

                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1;
                ctx.shadowBlur = 1;
                ctx.shadowColor = '#ffffff'

                function degToRad(degree) {
                    let factor = Math.PI / 180;
                    return degree * factor;
                }

                function renderTime() {
                    let now = new Date();
                    let today = now.toDateString();
                    let time = now.toLocaleTimeString();
                    let hrs = now.getHours();
                    let min = now.getMinutes();
                    let sec = now.getSeconds();
                    let mil = now.getMilliseconds();
                    let smoothsec = sec + (mil / 1000);
                    let smoothmin = min + (smoothsec / 60);

                    //Background
                    // let gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
                    // gradient.addColorStop(0, "#03303a");
                    // gradient.addColorStop(1, "black");
                    // ctx.fillStyle = gradient;
                    ctx.fillStyle = 'transparent';
                    // ctx.fillStyle = 'rgb(0,0,0)';
                    ctx.fillRect(0, 0, 100, 100);
                    //Hours
                    ctx.beginPath();
                    ctx.arc(50, 50, 35, degToRad(270), degToRad((hrs * 30) - 90));
                    ctx.stroke();
                    //Minutes
                    ctx.beginPath();
                    ctx.arc(50, 50, 30, degToRad(270), degToRad((smoothmin * 6) - 90));
                    ctx.stroke();
                    //Seconds
                    ctx.beginPath();
                    ctx.arc(50, 50, 25, degToRad(270), degToRad((smoothsec * 6) - 90));
                    ctx.stroke();
                    // //Date
                    // ctx.font = "12px Helvetica";
                    // ctx.fillStyle = 'rgba(255, 255, 255, 1)'
                    // ctx.fillText(today, 20, 50);
                    // //Time
                    // ctx.font = "25px Helvetica Bold";
                    // ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                    // ctx.fillText(time + ":" + mil, 175, 280);

                }
                setInterval(renderTime, 40);
            }
        },
        components: {
        },
        router
    }
</script>

<style scoped>
  #layout{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: rgb(35,35,34);
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

  .slide-img:nth-child(1){
    position: absolute;
    z-index: 1;
    width: 20px;
    height: 95%;
    top: 2%;
    pointer-events: auto;
    background-image: url('../assets/slide-img.png');
    border-radius: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slide-img:nth-child(2){
    position: absolute;
    right: 0;
    z-index: 1;
    width: 20px;
    height: 95%;
    top: 2%;
    pointer-events: auto;
    background-image: url('../assets/slide-img.png');
    border-radius: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: rotateY(180deg);
  }
  .head-img{
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100px;
    pointer-events: auto;
    background-image: url('../assets/head-img.png');
    border-radius: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 35px -35px;
  }

  .header{
    position: absolute;
    width: 97%;
    height: 8%;
    left: 45px;
    top: 40px;
  }
  .logo{
    position: absolute;
    width: 30%;
    height: 100%;
    z-index: 1;
  }

  .title{
    color: #fff;
    position: absolute;
    left: 13%;
    z-index: 1;
    font-size: 20px;
  }

  .title .sub-title{
    font-size: 17px;
  }

  .title .title-bg-img{
    position: absolute;
    width: 100%;
    transform: translateY(-10px);
    height: 16px;
    z-index: 2;
    background-image: url('../assets/head-img1.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .title-datetime{
    position: absolute;
    right: 2%;
    width: 20%;
    height: 100%;
  }

  .title-datetime .datetime-graph{
    position: absolute;
    z-index: 1;
    top: -15px;
  }
  .title-datetime .datetime-text{
    position: absolute;
    z-index: 3;
    left: 120px;
    top: -15px;
    color: #fff;
    padding-top: 20px;
  }
</style>
