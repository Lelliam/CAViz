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
    /*overflow: hidden;*/
    /*-moz-user-select:none;!*火狐*!*/
    /*-webkit-user-select:none;!*webkit浏览器*!*/
    /*-ms-user-select:none;!*IE10*!*/
    /*-khtml-user-select:none;!*早期浏览器*!*/
    /*user-select:none;*/
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
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

  .ivu-select {
    float: right;
  }

  .ivu-card{
    background: rgba(255,255,255,0.8);
    filter: blur(10);
  }

  .ivu-card-head {
    border-bottom: 1px solid #e8eaec;
    padding: 10px 16px;
    line-height: 1;
  }
  .ivu-card-body {
    padding: 0;
  }

  .ivu-cell{
    overflow: visible;
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
