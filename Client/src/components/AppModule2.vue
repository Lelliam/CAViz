<template>
  <div id="module2">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module2-container">
        <AppModule2Test></AppModule2Test>
      </div>
    </Card>
  </div>
</template>
<script>

    import AppModule2Test from "./Module2/AppModule2Test";
    export default {
        name: "AppModule2",
        mounted(){
        },
        methods:{
        },
        components:{
            AppModule2Test
        }
    }
</script>

<style scoped>
  #module2{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #module2-container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
