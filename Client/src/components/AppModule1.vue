<template>
  <div id="module1">
    <Card id="card" :style="{margin: '80px 10px 0 10px', background: '#fff', minHeight: '92vh'}">
      <div id="module1-container">
      </div>
    </Card>
  </div>
</template>
<script>

  import DataManager from "../data-manager/data-manager";
    export default {
        name: "AppModule1",
        mounted(){
            console.log(DataManager.get_test().then(res=>{
                console.log(res.data);
            }));
        },
        methods:{
        },
        components:{
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
