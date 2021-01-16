<template>
  <div id="module3">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module3-container">
      </div>
    </Card>
  </div>
</template>
<script>

    export default {
        name: "AppModule3",
        mounted(){
        },
        methods:{
        },
        components:{
        }
    }
</script>

<style scoped>
  #module3{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #module3-container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
