<template>
  <div id="module1">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module1-container">
        <AppModule1Test></AppModule1Test>
      </div>
    </Card>
  </div>
</template>
<script>

    import AppModule1Test from "./Module1/AppModule1Test";
    export default {
        name: "AppModule1",
        mounted(){
        },
        methods:{
        },
        components:{
            AppModule1Test
        }
    }
</script>

<style scoped>
  #module1{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #module1-container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
