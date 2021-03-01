<template>
  <div id="module">
      <div id="module-container">
        <AppModelSetting></AppModelSetting>
        <AppControler></AppControler>
        <AppKG></AppKG>
        <AppCards></AppCards>
      </div>
  </div>
</template>
<script>

  import AppModelSetting from "./ModuleComponents/AppModelSetting";
  import AppControler from "./ModuleComponents/AppControler";
  import AppKG from "./ModuleComponents/AppKG";
  import AppCards from "./ModuleComponents/AppCards";
    export default {
        name: "AppModule",
        mounted(){
        },
        methods:{
        },
        components:{
            AppModelSetting,
            AppControler,
            AppKG,
            AppCards
        }
    }
</script>

<style scoped>
  #module{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #module-container{
    width: 100%;
    height: 100%;
  }
</style>
