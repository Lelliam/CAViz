<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-view/>-->
    <AppLayout></AppLayout>
  </div>
</template>

<script>
  import AppLayout from './components/AppLayout';
  export default {
    name: 'App',
    components:{
      AppLayout
    }
  }
</script>

<style>
  html,body{
    font-family: "Helvetica Neue";
    margin: 0;
    padding: 0;
    background-color: rgb(35,35,34);
    color: #fff;
    overflow: hidden;
    /*-moz-user-select:none;!*火狐*!*/
    /*-webkit-user-select:none;!*webkit浏览器*!*/
    /*-ms-user-select:none;!*IE10*!*/
    /*-khtml-user-select:none;!*早期浏览器*!*/
    /*user-select:none;*/
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: #f6f6f6;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #747474;
  }
  ::-webkit-scrollbar-corner {
    background: #f6f6f6;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  .ivu-divider-inner-text{
    font-size: 14px;
  }


  .ivu-slider-bar {
    background: rgba(163, 58, 40, 0.7);
  }
  .ivu-slider-button:hover, .ivu-slider-button{
    /*border: rgba(163, 58, 40, 0.7);*/
    border-color: rgba(163, 58, 40, 0.7);
  }

  .ivu-slider-marks-item {
    position: absolute;
    transform: translateX(-50%);
    font-size: 12px;
    color: #808695;
    margin-top: -5px;
  }

  .ivu-slider-marks-item:nth-child(1){
    margin-left: -10px;
  }

  .ivu-slider-marks-item:nth-child(2){
    margin-left: 10px;
  }

  .ivu-form-item {
    margin-bottom: 10px;
  }

  .ivu-select {
    float: right;
  }

  .ivu-card{
    background: rgba(60,60,60,0.5);
    filter: blur(20);
  }

  .ivu-card-bordered {
    border: 0;
  }
  .ivu-card {
    border-radius: 0;
  }

  .ivu-card-head {
    border-bottom: 1px solid #e8eaec;
    padding: 10px 16px;
    line-height: 1;
  }

  .ivu-card-head p, .ivu-card-head-inner {
    color: #fff;
  }
  .ivu-card-body {
    padding: 0;
  }


  .ivu-collapse {
    background-color: transparent;
    border-radius: 3px;
    border: none;
    color: #fff;
  }

  .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header {
    color: #fff;
  }

  .ivu-collapse-content {
    color: #fff;
    padding: 0 16px;
    background-color: transparent;
  }

  .ivu-divider-horizontal {
    margin: 4px 0;
    clear: both;
  }

  .ivu-divider-horizontal.ivu-divider-with-text-center, .ivu-divider-horizontal.ivu-divider-with-text-left, .ivu-divider-horizontal.ivu-divider-with-text-right {
    color: #fff;
  }

  .ivu-progress {
    display: block;
  }

  .ivu-tag {
    display: inline-block;
    height: 16px;
    line-height: 16px;
  }
  .ivu-cell{
    overflow: visible;
    color: #fff;
  }

  .ivu-cell:hover {
    /*background: rgba(221, 120, 21, 0.3);*/
    background: transparent;
  }

  .ivu-cell-main {
    display: block;
    vertical-align: middle;
  }

  .ivu-drawer-content{
    height: 94%;
    width: 250px;
    top: 6%;
  }

  .ivu-drawer-content a{
    color: #646464;
  }
  .ivu-layout-header{
    height: 6%;
    background-color: #753f3f;
    color: slategray;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    background-color: #fff;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #646464;
    background: rgba(255, 78, 108, 0.13);
    z-index: 2;
  }

  .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #753f3f;
  }

  .ivu-menu-horizontal {
    height: 6%;
    line-height: inherit;
    position: absolute;
    right: 0;
    top: 0;
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #fff;
    background: rgba(255, 255, 255, .1);
    z-index: 2;
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    height: inherit;
    line-height: inherit;
    border-bottom: 2px solid transparent;
    color: #fff;
  }

  .ivu-menu-light{
    background: transparent;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    background: transparent;
  }

  .layout-nav{
    width: 100%;
    margin: 0 auto;
    margin-right: 20px;
    background-color: transparent;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 32px;
  }
  .ivu-breadcrumb{
    text-align: left;
  }
</style>
