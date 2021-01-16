<template>
  <div id="module4">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module4-container">
        <AppModule4Test></AppModule4Test>
      </div>
    </Card>
  </div>
</template>
<script>

    import AppModule4Test from "./Module4/AppModule4Test";
    export default {
        name: "AppModule4",
        mounted(){
        },
        methods:{
        },
        components:{
            AppModule4Test
        }
    }
</script>

<style scoped>
  #module4{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #module4-container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
