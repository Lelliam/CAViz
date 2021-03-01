<template>
  <div id="model-setting">
    <Card :style="{minHeight: '100%',minWidth: '100%'}">
      <p slot="title"><Tag color="warning"></Tag>模型设置</p>
      <!--      <CellGroup>-->
      <!--        <Cell>-->
      <div style="height: 100px;width: 100%;">

        <!-- 左侧调节数轴起 -->
        <div style="height: 100%;width: 12%;float: left;">
          <div id="lineDiv" class="lineDiv">
            <div id="minDiv" class="minDiv" style="background: #4EDAAE;">
            </div>
          </div>
        </div>

        <div style="height: 100%;width: 12%;float: left;">
          <div id="lineDiv1" class="lineDiv">
            <div id="minDiv1" class="minDiv" style="background: #D84646;">
            </div>
          </div>
        </div>

        <div style="height: 100%;width: 12%;float: left;">
          <div id="lineDiv2" class="lineDiv">
            <div id="minDiv2" class="minDiv" style="background: #FDC444;">
            </div>
          </div>
        </div>

        <div style="height: 100%;width: 12%;float: left;">
          <div id="lineDiv3" class="lineDiv">
            <div id="minDiv3" class="minDiv" style="background: #188AE0;">
            </div>
          </div>
        </div>

        <div style="height: 100%;width: 12%;float: left;">
          <div id="lineDiv4" class="lineDiv">
            <div id="minDiv4" class="minDiv" style="background: #FB8A64;">
            </div>
          </div>
        </div>
        <!-- 左侧调节数轴终 -->

        <div style="height: 100%;width: 40%;float: left;" id="demo"></div>
        <!-- 右侧饼图 -->
      </div>
      <!--        </Cell>-->
      <!--      </CellGroup>-->
    </Card>
  </div>
</template>

<script>
  import * as echarts4 from '../../../static/echarts4.js'
  import * as d3 from 'd3'
  export default {
    name: "AppModelSetting",
    mounted() {
      this.init()
    },
    methods: {
      init() {
        var simple = [20, 20, 20, 20, 20]
        this.drawStudent(simple)
        var lineDiv = document.getElementById('lineDiv');
        var minDiv = document.getElementById('minDiv');
        var minDiv1 = document.getElementById('minDiv1');
        var minDiv2 = document.getElementById('minDiv2');
        var minDiv3 = document.getElementById('minDiv3');
        var minDiv4 = document.getElementById('minDiv4');
        var mouseauto = document.getElementById('minDiv');
        var ifBool = false;
        var start = function (e) {
          e.stopPropagation();
          ifBool = true;
          mouseauto = document.getElementById(e.target.id);
        }

        var move = function (e) {
          if (ifBool) {
            if (!e.touches) {
              var y = e.clientY;
            }
            var lineDiv_bottom = getPosition(lineDiv).bottom;
            var minDiv_bottom = y - 190;
            // console.log(minDiv_bottom)
            if (minDiv_bottom >= lineDiv.offsetHeight - 8) {
              minDiv_bottom = lineDiv.offsetHeight - 8;
            }
            if (minDiv_bottom < 0) {
              minDiv_bottom = 0;
            }
            mouseauto.style.top = minDiv_bottom + "px";
            // console.log(mouseauto.offsetTop)
            Count();
          }
        }
        var end = function (e) {
          ifBool = false;
        }

        let  Count = ()=> {  //计算用户调节占比,可添加返回值获取
          var n = []
          var count_0 = parseInt(100 - (minDiv.offsetTop / (lineDiv.offsetHeight)) * 100);
          var count_1 = parseInt(100 - (minDiv1.offsetTop / (lineDiv.offsetHeight)) * 100);
          var count_2 = parseInt(100 - (minDiv2.offsetTop / (lineDiv.offsetHeight)) * 100);
          var count_3 = parseInt(100 - (minDiv3.offsetTop / (lineDiv.offsetHeight)) * 100);
          var count_4 = parseInt(100 - (minDiv4.offsetTop / (lineDiv.offsetHeight)) * 100);
          n.push(Math.floor(((count_0 / (count_0 + count_1 + count_2 + count_3 + count_4)) * 100) * 100) / 100);
          n.push(Math.floor(((count_1 / (count_0 + count_1 + count_2 + count_3 + count_4)) * 100) * 100) / 100);
          n.push(Math.floor(((count_2 / (count_0 + count_1 + count_2 + count_3 + count_4)) * 100) * 100) / 100);
          n.push(Math.floor(((count_3 / (count_0 + count_1 + count_2 + count_3 + count_4)) * 100) * 100) / 100);
          n.push(Math.floor(((count_4 / (count_0 + count_1 + count_2 + count_3 + count_4)) * 100) * 100) / 100);

          // console.log(count_0,count_1,count_2,count_3,count_4)
          this.$store.commit('modelSetting',n.map(s=>parseFloat((s/d3.sum(n)).toFixed(2))));
          this.drawStudent(n);
        }

        minDiv.addEventListener("mousedown", start);
        minDiv1.addEventListener("mousedown", start);
        minDiv2.addEventListener("mousedown", start);
        minDiv3.addEventListener("mousedown", start);
        minDiv4.addEventListener("mousedown", start);

        window.addEventListener("mousemove", move);

        window.addEventListener("mouseup", end);

        //获取元素的绝对位置
        function getPosition(node) {
          var top = node.offsetTop;
          var current = node.offsetParent; // 取得元素的offsetParent
          // console.log(node.offsetHeight)
          return {
            "bottom": node.offsetHeight,
            "top": top
          };
        }
      },
      drawStudent(n) {
        var image = '../../../static/student.svg'
        var myChart = echarts4.init(document.getElementById("demo"))        //echarts版本需要更改
        var type = [2, 3, 4, 5, 6]
        var list = [{
          axlesTypeRate: 10,
          axlesType: "思想品德"
        }, {
          axlesTypeRate: 20,
          axlesType: "学业水平"
        }, {
          axlesTypeRate: 30,
          axlesType: "身心健康"
        }, {
          axlesTypeRate: 30,
          axlesType: "艺术素养"
        }, {
          axlesTypeRate: 10,
          axlesType: "社会实践"
        }]
        var colors = ['#4EDAAE', '#D84646', '#FDC444', '#188AE0', '#FB8A64']       //五个模块对应颜色
        var index = 0,
          timer = null
        var rich = {
          white: {
            color: '#ddd',
            align: 'center',
            padding: [6, 0]
          }
        }
        var placeHolderStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        }
        var data = []
        for (var i = 0; i < list.length; i++) {
          data.push({
            value: n[i],
            name: list[i].axlesType,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 10,
                color: colors[+type[i] - 2],
                borderColor: colors[+type[i] - 2],
                shadowColor: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }, {
            value: 3,
            name: '',
            itemStyle: placeHolderStyle
          })
        }
        var series = [{
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [38, 40],
          hoverAnimation: true,
          avoidLabelOverlap: true,
          hoverOffset: 10,
          label: {
            show: false,
            position: 'inside',
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '5',
              fontWeight: 'bold'
            }
          },
          data: data
        }]
        var option = {
          backgroundColor: 'transparent',
          graphic: {
            elements: [{
              type: "image",
              style: {
                image: image,
                width: 50,
                height: 50
              },
              left: 'center',
              top: "23%",
              position: [100, 100]
            }]
          },

          tooltip: {
            show: true,
            trigger: 'item',
            formatter: '{b}: {c}%'
          },
          legend: {
            show: false
          },
          toolbox: {
            show: false
          },
          series: series
        }
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
        myChart.on('mouseover', function (params) {
          if (params.dataIndex % 2 !== 0) return
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index - 2
          })
          if (params.dataIndex !== index) {
            index = params.dataIndex + 2
          }
        })
      }
    }
  }
</script>

<style scoped>
  #model-setting{
    position: absolute;
    width: 20%;
    height: 15%;
    left: 2%;
    top: 15.5%;
    z-index: 1;
  }
  .lineDiv {
    position: relative;
    height: 70%;
    background: rgb(232, 234, 236);
    width: 4px;
    margin: auto;
    top: 15%;
  }

  .lineDiv .minDiv {
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 8px;
    height: 8px;
    /* background: rgb(183, 111, 98); */
    cursor: pointer
  }

</style>
