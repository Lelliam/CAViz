<template>
  <div id="model-setting">
    <Card :style="{minHeight: '100%',minWidth: '100%'}">
      <p slot="title"><Tag color="warning"></Tag>模型设置</p>
      <CellGroup>
        <Cell>
          评价模型可视化（调参、加权、添加\移除评估因子）
        </Cell>
        <Cell>
          Leader: H.Wu
        </Cell>
      </CellGroup>


    </Card>
  </div>
</template>

<script>
    export default {
        name: "AppModelSetting"
    }
</script>

<style scoped>
  #model-setting{
    position: absolute;
    width: 17%;
    height: 15%;
    left: 2%;
    top: 11%;
    z-index: 1;
  }
</style>
