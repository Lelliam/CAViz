<template>
  <div id="module">
    <Card id="card" :style="{margin: '70px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module-container">
        <AppModelSetting></AppModelSetting>
        <AppControler></AppControler>
        <AppKG></AppKG>
        <AppCards></AppCards>
      </div>
    </Card>
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
    position: relative;
    width: 100%;
    height: 100%;
  }
  #module-container{
    width: 100%;
    height: 100%;
  }
</style>
