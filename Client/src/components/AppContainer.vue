<template>
  <div id="module">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module-container">
        <AppControler></AppControler>
        <AppKG></AppKG>
        <AppCards></AppCards>
      </div>
    </Card>
  </div>
</template>
<script>

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
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
