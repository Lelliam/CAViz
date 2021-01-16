<template>
  <div id="module5">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module5-container">
        <AppModule5Test></AppModule5Test>
      </div>
    </Card>
  </div>
</template>
<script>
    import AppModule5Test from "./Module5/AppModule5Test";
    export default {
        name: "AppModule5",
        mounted(){
        },
        methods:{
        },
        components:{
            AppModule5Test
        }
    }
</script>

<style scoped>
  #module5{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #module5-container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
