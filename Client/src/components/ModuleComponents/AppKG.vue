<template>
  <div id="kg_main">
    <div id="kg-container"></div>
    <div class="kg-toggle">
      <ButtonGroup type="button" size="small">
        <Button label="large" @click="toggle_2d"><icon type="ios-albums-outline"></icon>2D</Button>
        <Button label="default" @click="toggle_3d"><icon type="ios-cube-outline"></icon>3D</Button>
      </ButtonGroup>
      <!--        <Button label="large" icon="ios-albums-outline">2D</Button>-->
      <!--        <Button label="small" icon="ios-cube-outline">3D</Button>-->
    </div>
  </div>
</template>

<script>
  import DataManager from "../../data-manager/data-manager";
  import ForceGraph3D from "3d-force-graph";
  import cytoscape from 'cytoscape'
  import * as d3 from 'd3'
  import img_1 from '../../assets/男生.png'
  import img_0 from '../../assets/女生.png'
  export default {
    name: "AppKG",
    data(){
      return {
        Graph:null,
        $3DView:false,
        cards_data:[],
        score_data:[
          {
            "card_id": 1,
            "mor_level": 66.1,
            "aca_level": 80.2,
            "hea_level": 84.7,
            "art_level": 69,
            "sol_level": 80.2
          },
          {
            "card_id": 2,
            "mor_level": 60.5,
            "aca_level": 93.2,
            "hea_level": 81.8,
            "art_level": 80.8,
            "sol_level": 77
          },
          {
            "card_id": 3,
            "mor_level": 63.9,
            "aca_level": 76.8,
            "hea_level": 74.5,
            "art_level": 67.4,
            "sol_level": 74.9
          },
          {
            "card_id": 4,
            "mor_level": 86.3,
            "aca_level": 90.6,
            "hea_level": 68.7,
            "art_level": 78.2,
            "sol_level": 84.1
          },
          {
            "card_id": 5,
            "mor_level": 63.5,
            "aca_level": 80.4,
            "hea_level": 78.4,
            "art_level": 66.6,
            "sol_level": 79.5
          },
          {
            "card_id": 6,
            "mor_level": 76.6,
            "aca_level": 91.4,
            "hea_level": 85.3,
            "art_level": 81.9,
            "sol_level": 76.7
          },
          {
            "card_id": 7,
            "mor_level": 65.8,
            "aca_level": 89.4,
            "hea_level": 85.2,
            "art_level": 79.9,
            "sol_level": 77.1
          },
          {
            "card_id": 8,
            "mor_level": 63.3,
            "aca_level": 84.2,
            "hea_level": 61.2,
            "art_level": 75.4,
            "sol_level": 79.8
          },
          {
            "card_id": 9,
            "mor_level": 91.2,
            "aca_level": 81.6,
            "hea_level": 76.9,
            "art_level": 71.8,
            "sol_level": 84.9
          },
          {
            "card_id": 10,
            "mor_level": 66.2,
            "aca_level": 87,
            "hea_level": 75.4,
            "art_level": 70.4,
            "sol_level": 82.9
          },
          {
            "card_id": 11,
            "mor_level": 63.1,
            "aca_level": 81.6,
            "hea_level": 71.5,
            "art_level": 73.3,
            "sol_level": 68.5
          },
          {
            "card_id": 12,
            "mor_level": 74.2,
            "aca_level": 89.6,
            "hea_level": 84.9,
            "art_level": 79.3,
            "sol_level": 78.6
          },
          {
            "card_id": 13,
            "mor_level": 74.8,
            "aca_level": 91.6,
            "hea_level": 81.9,
            "art_level": 82.8,
            "sol_level": 81.1
          },
          {
            "card_id": 14,
            "mor_level": 63.1,
            "aca_level": 77.8,
            "hea_level": 51.8,
            "art_level": 63.2,
            "sol_level": 71.7
          },
          {
            "card_id": 15,
            "mor_level": 68.5,
            "aca_level": 77.2,
            "hea_level": 73.4,
            "art_level": 69.6,
            "sol_level": 81.1
          },
          {
            "card_id": 16,
            "mor_level": 64,
            "aca_level": 84.4,
            "hea_level": 83.5,
            "art_level": 68.7,
            "sol_level": 82.5
          },
          {
            "card_id": 17,
            "mor_level": 83.1,
            "aca_level": 93.6,
            "hea_level": 76.9,
            "art_level": 79.5,
            "sol_level": 75.7
          },
          {
            "card_id": 18,
            "mor_level": 68,
            "aca_level": 90,
            "hea_level": 72.3,
            "art_level": 85.5,
            "sol_level": 79.3
          },
          {
            "card_id": 19,
            "mor_level": 62.2,
            "aca_level": 87,
            "hea_level": 79.8,
            "art_level": 74.4,
            "sol_level": 74.4
          },
          {
            "card_id": 20,
            "mor_level": 87.1,
            "aca_level": 87.4,
            "hea_level": 69,
            "art_level": 75,
            "sol_level": 84.2
          },
          {
            "card_id": 21,
            "mor_level": 79.3,
            "aca_level": 83.8,
            "hea_level": 64.2,
            "art_level": 73.8,
            "sol_level": 81.7
          },
          {
            "card_id": 22,
            "mor_level": 43.3,
            "aca_level": 79.2,
            "hea_level": 0,
            "art_level": 65.1,
            "sol_level": 59.8
          },
          {
            "card_id": 23,
            "mor_level": 73.5,
            "aca_level": 80,
            "hea_level": 80.1,
            "art_level": 66.1,
            "sol_level": 84.6
          },
          {
            "card_id": 24,
            "mor_level": 62,
            "aca_level": 90.2,
            "hea_level": 77.9,
            "art_level": 81.2,
            "sol_level": 75
          },
          {
            "card_id": 25,
            "mor_level": 69.4,
            "aca_level": 91.2,
            "hea_level": 78,
            "art_level": 78.3,
            "sol_level": 84.8
          },
          {
            "card_id": 26,
            "mor_level": 63,
            "aca_level": 75.2,
            "hea_level": 82,
            "art_level": 62.5,
            "sol_level": 81.5
          },
          {
            "card_id": 27,
            "mor_level": 63.1,
            "aca_level": 84.4,
            "hea_level": 65.5,
            "art_level": 71,
            "sol_level": 78.3
          },
          {
            "card_id": 28,
            "mor_level": 68.1,
            "aca_level": 80.2,
            "hea_level": 86.1,
            "art_level": 68.3,
            "sol_level": 86.2
          },
          {
            "card_id": 29,
            "mor_level": 64.6,
            "aca_level": 85.6,
            "hea_level": 66.6,
            "art_level": 70.6,
            "sol_level": 77.9
          },
          {
            "card_id": 30,
            "mor_level": 67.1,
            "aca_level": 82.2,
            "hea_level": 0,
            "art_level": 67.7,
            "sol_level": 84.2
          },
          {
            "card_id": 31,
            "mor_level": 65.6,
            "aca_level": 76.8,
            "hea_level": 63,
            "art_level": 69.8,
            "sol_level": 80.2
          },
          {
            "card_id": 32,
            "mor_level": 52,
            "aca_level": 90,
            "hea_level": 77.3,
            "art_level": 77.2,
            "sol_level": 58.3
          },
          {
            "card_id": 33,
            "mor_level": 80,
            "aca_level": 85.2,
            "hea_level": 77,
            "art_level": 76.2,
            "sol_level": 83
          },
          {
            "card_id": 34,
            "mor_level": 71.8,
            "aca_level": 91.6,
            "hea_level": 79.1,
            "art_level": 93.9,
            "sol_level": 77.1
          },
          {
            "card_id": 35,
            "mor_level": 71.5,
            "aca_level": 82.6,
            "hea_level": 61.9,
            "art_level": 75.7,
            "sol_level": 80.1
          },
          {
            "card_id": 36,
            "mor_level": 79.1,
            "aca_level": 89.8,
            "hea_level": 75.8,
            "art_level": 79.3,
            "sol_level": 81.2
          },
          {
            "card_id": 37,
            "mor_level": 70,
            "aca_level": 80.8,
            "hea_level": 73.5,
            "art_level": 76.1,
            "sol_level": 82.5
          },
          {
            "card_id": 38,
            "mor_level": 67.5,
            "aca_level": 77.6,
            "hea_level": 73,
            "art_level": 70.1,
            "sol_level": 79.5
          },
          {
            "card_id": 39,
            "mor_level": 68.5,
            "aca_level": 76.8,
            "hea_level": 82.5,
            "art_level": 64.7,
            "sol_level": 81
          },
          {
            "card_id": 40,
            "mor_level": 72.1,
            "aca_level": 84.8,
            "hea_level": 81,
            "art_level": 87.6,
            "sol_level": 94.2
          },
          {
            "card_id": 41,
            "mor_level": 63.5,
            "aca_level": 74,
            "hea_level": 70.5,
            "art_level": 65,
            "sol_level": 87.3
          },
          {
            "card_id": 42,
            "mor_level": 65.5,
            "aca_level": 92.8,
            "hea_level": 73.8,
            "art_level": 80.2,
            "sol_level": 74
          },
          {
            "card_id": 43,
            "mor_level": 61.1,
            "aca_level": 82.2,
            "hea_level": 20.2,
            "art_level": 72,
            "sol_level": 73.5
          },
          {
            "card_id": 44,
            "mor_level": 66.1,
            "aca_level": 84.2,
            "hea_level": 77.6,
            "art_level": 73.8,
            "sol_level": 83.2
          },
          {
            "card_id": 45,
            "mor_level": 71,
            "aca_level": 87.8,
            "hea_level": 83.9,
            "art_level": 74.6,
            "sol_level": 76
          },
          {
            "card_id": 46,
            "mor_level": 72.9,
            "aca_level": 77.6,
            "hea_level": 78.2,
            "art_level": 68.6,
            "sol_level": 81.8
          },
          {
            "card_id": 47,
            "mor_level": 63.3,
            "aca_level": 80.2,
            "hea_level": 71.4,
            "art_level": 68.8,
            "sol_level": 74.1
          },
          {
            "card_id": 48,
            "mor_level": 69.7,
            "aca_level": 90,
            "hea_level": 82.4,
            "art_level": 80.3,
            "sol_level": 85.9
          },
          {
            "card_id": 49,
            "mor_level": 63.2,
            "aca_level": 84.8,
            "hea_level": 75.6,
            "art_level": 74.7,
            "sol_level": 79.4
          },
          {
            "card_id": 50,
            "mor_level": 71.4,
            "aca_level": 93.4,
            "hea_level": 76.8,
            "art_level": 78.9,
            "sol_level": 76.8
          },
          {
            "card_id": 51,
            "mor_level": 66,
            "aca_level": 87.4,
            "hea_level": 67.8,
            "art_level": 74.2,
            "sol_level": 77.5
          },
          {
            "card_id": 52,
            "mor_level": 60.4,
            "aca_level": 74,
            "hea_level": 77.7,
            "art_level": 59.8,
            "sol_level": 73.5
          },
          {
            "card_id": 53,
            "mor_level": 67,
            "aca_level": 75.8,
            "hea_level": 65.2,
            "art_level": 61.5,
            "sol_level": 77.5
          },
          {
            "card_id": 54,
            "mor_level": 65.2,
            "aca_level": 88.4,
            "hea_level": 61.5,
            "art_level": 73.8,
            "sol_level": 83.9
          },
          {
            "card_id": 55,
            "mor_level": 64.7,
            "aca_level": 77.8,
            "hea_level": 84.8,
            "art_level": 70.6,
            "sol_level": 77.4
          },
          {
            "card_id": 56,
            "mor_level": 43.1,
            "aca_level": 77.4,
            "hea_level": 79.1,
            "art_level": 66.6,
            "sol_level": 51.4
          },
          {
            "card_id": 57,
            "mor_level": 64.2,
            "aca_level": 73,
            "hea_level": 83.9,
            "art_level": 57.8,
            "sol_level": 81.7
          },
          {
            "card_id": 58,
            "mor_level": 61,
            "aca_level": 92.4,
            "hea_level": 70.5,
            "art_level": 79,
            "sol_level": 78
          },
          {
            "card_id": 59,
            "mor_level": 79.6,
            "aca_level": 92.2,
            "hea_level": 68.4,
            "art_level": 81.5,
            "sol_level": 79.2
          },
          {
            "card_id": 60,
            "mor_level": 57.7,
            "aca_level": 67.8,
            "hea_level": 81.7,
            "art_level": 54.7,
            "sol_level": 67.3
          },
          {
            "card_id": 61,
            "mor_level": 63.6,
            "aca_level": 74.6,
            "hea_level": 74.7,
            "art_level": 62,
            "sol_level": 78.7
          },
          {
            "card_id": 62,
            "mor_level": 64.9,
            "aca_level": 80.6,
            "hea_level": 75.4,
            "art_level": 68.8,
            "sol_level": 80.4
          },
          {
            "card_id": 63,
            "mor_level": 56.1,
            "aca_level": 77.2,
            "hea_level": 82.9,
            "art_level": 66.1,
            "sol_level": 68.5
          },
          {
            "card_id": 64,
            "mor_level": 62.6,
            "aca_level": 73.8,
            "hea_level": 75.5,
            "art_level": 59.8,
            "sol_level": 83
          },
          {
            "card_id": 65,
            "mor_level": 62.7,
            "aca_level": 76.8,
            "hea_level": 83.6,
            "art_level": 67.6,
            "sol_level": 74.2
          },
          {
            "card_id": 66,
            "mor_level": 82.6,
            "aca_level": 83.4,
            "hea_level": 75,
            "art_level": 75,
            "sol_level": 79.2
          },
          {
            "card_id": 67,
            "mor_level": 58.7,
            "aca_level": 74,
            "hea_level": 76,
            "art_level": 64.4,
            "sol_level": 75.5
          },
          {
            "card_id": 68,
            "mor_level": 0,
            "aca_level": 0,
            "hea_level": 0,
            "art_level": 0,
            "sol_level": 0
          },
          {
            "card_id": 69,
            "mor_level": 61.5,
            "aca_level": 79,
            "hea_level": 65.8,
            "art_level": 66.6,
            "sol_level": 77
          },
          {
            "card_id": 70,
            "mor_level": 84.6,
            "aca_level": 86.4,
            "hea_level": 65.2,
            "art_level": 76.7,
            "sol_level": 84.2
          },
          {
            "card_id": 71,
            "mor_level": 64.6,
            "aca_level": 79.4,
            "hea_level": 63,
            "art_level": 66.3,
            "sol_level": 83.2
          },
          {
            "card_id": 72,
            "mor_level": 70.7,
            "aca_level": 91.6,
            "hea_level": 81.8,
            "art_level": 76.5,
            "sol_level": 77.4
          },
          {
            "card_id": 73,
            "mor_level": 72.1,
            "aca_level": 82.6,
            "hea_level": 62.9,
            "art_level": 67.3,
            "sol_level": 85.2
          },
          {
            "card_id": 74,
            "mor_level": 60,
            "aca_level": 78.4,
            "hea_level": 68.4,
            "art_level": 64.6,
            "sol_level": 77
          },
          {
            "card_id": 75,
            "mor_level": 61.1,
            "aca_level": 74.8,
            "hea_level": 65.7,
            "art_level": 62.9,
            "sol_level": 74
          },
          {
            "card_id": 76,
            "mor_level": 61.9,
            "aca_level": 72.8,
            "hea_level": 75.2,
            "art_level": 61.7,
            "sol_level": 74.5
          },
          {
            "card_id": 77,
            "mor_level": 72.1,
            "aca_level": 83.8,
            "hea_level": 81,
            "art_level": 71.3,
            "sol_level": 81.2
          },
          {
            "card_id": 78,
            "mor_level": 72.6,
            "aca_level": 89.8,
            "hea_level": 68.7,
            "art_level": 77.9,
            "sol_level": 81.2
          },
          {
            "card_id": 79,
            "mor_level": 56.1,
            "aca_level": 83.4,
            "hea_level": 77.4,
            "art_level": 71.7,
            "sol_level": 61
          },
          {
            "card_id": 80,
            "mor_level": 68.4,
            "aca_level": 77.2,
            "hea_level": 81.1,
            "art_level": 71.3,
            "sol_level": 78.8
          },
          {
            "card_id": 81,
            "mor_level": 86.4,
            "aca_level": 88.4,
            "hea_level": 75.9,
            "art_level": 76.6,
            "sol_level": 79.8
          },
          {
            "card_id": 82,
            "mor_level": 73,
            "aca_level": 73.6,
            "hea_level": 77.4,
            "art_level": 65.2,
            "sol_level": 79.9
          },
          {
            "card_id": 83,
            "mor_level": 77.4,
            "aca_level": 92.2,
            "hea_level": 76.6,
            "art_level": 83,
            "sol_level": 82.9
          },
          {
            "card_id": 84,
            "mor_level": 68.1,
            "aca_level": 81.4,
            "hea_level": 81.8,
            "art_level": 66.1,
            "sol_level": 88.2
          },
          {
            "card_id": 85,
            "mor_level": 61.2,
            "aca_level": 81,
            "hea_level": 76.2,
            "art_level": 64.9,
            "sol_level": 76.6
          },
          {
            "card_id": 86,
            "mor_level": 73.3,
            "aca_level": 83.6,
            "hea_level": 69.5,
            "art_level": 74.6,
            "sol_level": 72.9
          },
          {
            "card_id": 87,
            "mor_level": 99.5,
            "aca_level": 77.4,
            "hea_level": 82.2,
            "art_level": 68.6,
            "sol_level": 90.5
          },
          {
            "card_id": 88,
            "mor_level": 60,
            "aca_level": 83.6,
            "hea_level": 72.5,
            "art_level": 70.3,
            "sol_level": 76
          },
          {
            "card_id": 89,
            "mor_level": 63.4,
            "aca_level": 71.8,
            "hea_level": 62.8,
            "art_level": 60.5,
            "sol_level": 78.8
          },
          {
            "card_id": 90,
            "mor_level": 64.1,
            "aca_level": 80.6,
            "hea_level": 67.5,
            "art_level": 67,
            "sol_level": 82.2
          },
          {
            "card_id": 91,
            "mor_level": 73.2,
            "aca_level": 78,
            "hea_level": 74.8,
            "art_level": 71.7,
            "sol_level": 86.9
          },
          {
            "card_id": 92,
            "mor_level": 64,
            "aca_level": 85.6,
            "hea_level": 83.3,
            "art_level": 72.4,
            "sol_level": 84.5
          },
          {
            "card_id": 93,
            "mor_level": 84.4,
            "aca_level": 83.6,
            "hea_level": 67.1,
            "art_level": 72.2,
            "sol_level": 85.8
          },
          {
            "card_id": 94,
            "mor_level": 67.4,
            "aca_level": 79.6,
            "hea_level": 68.7,
            "art_level": 68.5,
            "sol_level": 79.8
          },
          {
            "card_id": 95,
            "mor_level": 65.1,
            "aca_level": 73.6,
            "hea_level": 78.1,
            "art_level": 64.3,
            "sol_level": 76.1
          },
          {
            "card_id": 96,
            "mor_level": 73.8,
            "aca_level": 79.8,
            "hea_level": 83.2,
            "art_level": 77.4,
            "sol_level": 89.1
          },
          {
            "card_id": 97,
            "mor_level": 71.1,
            "aca_level": 90.6,
            "hea_level": 77.2,
            "art_level": 82.4,
            "sol_level": 80.2
          },
          {
            "card_id": 98,
            "mor_level": 62,
            "aca_level": 87.2,
            "hea_level": 79,
            "art_level": 78.5,
            "sol_level": 75
          },
          {
            "card_id": 99,
            "mor_level": 75.2,
            "aca_level": 92.6,
            "hea_level": 74.3,
            "art_level": 83,
            "sol_level": 81.9
          },
          {
            "card_id": 100,
            "mor_level": 69.2,
            "aca_level": 87.8,
            "hea_level": 82.2,
            "art_level": 72.6,
            "sol_level": 81.4
          }
        ],
        new_score:[]
      }
    },
    mounted() {
      DataManager.get_kg().then(res=> {
        // this.kg_init(res.data)
        let data = res.data;

        // data.links = data.links.filter(d=>(''+d.target).indexOf('三好学生') !== -1);
        // data.nodes = data.nodes.filter(d=>(''+d.name).indexOf('三好学生') !== -1 || data.links.map(d=>d.source).includes(d.name));

        // data.nodes = data.nodes.filter(d => ['card_id'].includes(d.type)).sort((a,b)=>a.name - b.name);
        // data.nodes = data.nodes.filter(d=>d.name === 'S100')
        // data.links = data.links.filter(d => [].includes(d.relation))
        // data.links = data.links.filter(d=>d.source)
        // data.links = data.links.filter(d=>d.source === 'S100' || d.target === 'S100')
        data.links = data.links.filter(d=>['S100','S1'].includes(d.source) || ['S100','S1'].includes(d.target))
        let nodes = []
        data.links.forEach(s=>{

          if(nodes.findIndex(t=>t.name === s.target) === -1){
            nodes.push(data.nodes[data.nodes.findIndex(t=>t.name === s.target)])
          }
          if(nodes.findIndex(t=>t.name === s.source) === -1) {
            nodes.push(data.nodes[data.nodes.findIndex(t => t.name === s.source)])
          }

        })
        console.log(nodes)
        // this.kg_d3(data);
        // this.kg_init(data)
        // this.kg_init(res.data)
        let mapping = {};
        // //
        this.kg_cy(nodes.map((d, i) => {
            mapping[d.name] = i
            return {
              data: {id: i,name:d.name,type:d.type}
            }
          }).concat(data.links.map(d=>{
            return {
              data:{
                source:mapping[d.source],
                target:mapping[d.target]
              }
            }
          }))
        );
      })
    },
    methods:{
      toggle_2d(){
        console.log('2d')
        this.$3DView = false
        d3.select('#kg-container').html('')
        DataManager.get_kg().then(res=> {
          // this.kg_init(res.data)
          let data = res.data;

          // data.links = data.links.filter(d=>(''+d.target).indexOf('三好学生') !== -1);
          // data.nodes = data.nodes.filter(d=>(''+d.name).indexOf('三好学生') !== -1 || data.links.map(d=>d.source).includes(d.name));

          data.nodes = data.nodes.filter(d => ['card_id'].includes(d.type)).sort((a,b)=>a.name - b.name);
          data.links = data.links.filter(d => [].includes(d.relation))
          // this.kg_d3(data);
          // this.kg_init(data)
          // this.kg_init(res.data)
          let mapping = {};
          // //
          this.kg_cy(data.nodes.map((d, i) => {
              mapping[d.name] = i
              return {
                data: {id: i,name:d.name,type:d.type}
              }
            }).concat(data.links.map(d=>{
              return {
                data:{
                  source:mapping[d.source],
                  target:mapping[d.target]
                }
              }
            }))
          );
        })
      },
      toggle_3d(){
        console.log('3d')
        this.$3DView = true
        d3.select('#kg-container').html('')
        DataManager.get_kg().then(res=> {
          // this.kg_init(res.data)
          let data = res.data;

          // data.links = data.links.filter(d=>(''+d.target).indexOf('三好学生') !== -1);
          // data.nodes = data.nodes.filter(d=>(''+d.name).indexOf('三好学生') !== -1 || data.links.map(d=>d.source).includes(d.name));

          // data.nodes = data.nodes.filter(d => ['card_id'].includes(d.type)).sort((a,b)=>a.name - b.name);
          // data.links = data.links.filter(d => [].includes(d.relation))
          // this.kg_d3(data);
          // this.kg_init(data)
          this.kg_init(res.data)
        })
      },
      kg_init(data){
        this.Graph = ForceGraph3D()
        (document.getElementById('kg-container'))
          .width(document.getElementById('kg-container').offsetWidth)
          .graphData(data)
          .nodeId('name')
          .nodeLabel('name')
          .nodeColor(d => color(d))
          // .linkColor("#ddd")
          .linkAutoColorBy('relation')
          .backgroundColor("#232322")
          .linkDirectionalArrowLength(3.5)
          .linkDirectionalArrowRelPos(1)
          .linkCurvature(0.25);

        let compute = d3.interpolate('#ffffff','#53ff47')

        let linear = d3.scaleLinear()
          .domain(d3.extent(data.nodes.filter(d=>d.type === 'credit'),d=>d.name))
          .range([0,1]);

        let color = (d,value)=>{
          if (d.type === 'card_id')
            return '#0e0dcc';
          if (d.type === 'nation')
            return d.name === '汉族'?"#dd2c09":"#dd7815";
          else if(d.type === 'gender')
            return d.name === '男'?"#4865dd":"#f06b83";
          else if(d.type === 'age')
            return '#96d7ff';
          else if(d.type === 'nation')
            return '#98ff48';
          else if(d.type === 'health_status')
            return '#35a32b';
          else if(d.type === 'politics_status')
            return '#a33a28';
          else if(d.type === 'duty')
            return '#cc4802';
          else if(d.type === 'credit')
            return compute(linear(d.name));
          else
            return '#fff'
        }
      },
      kg_cy(data){
        let gender = {
          S1: "男",
          S2: "女",
          S3: "女",
          S4: "男",
          S5: "女",
          S6: "男",
          S7: "男",
          S8: "男",
          S9: "女",
          S10: "女",
          S11: "男",
          S12: "女",
          S13: "女",
          S14: "女",
          S15: "男",
          S16: "女",
          S17: "男",
          S18: "男",
          S19: "女",
          S20: "女",
          S21: "男",
          S22: "男",
          S23: "男",
          S24: "男",
          S25: "男",
          S26: "女",
          S27: "女",
          S28: "女",
          S29: "男",
          S30: "女",
          S31: "男",
          S32: "女",
          S33: "男",
          S34: "男",
          S35: "男",
          S36: "男",
          S37: "女",
          S38: "女",
          S39: "女",
          S40: "女",
          S41: "男",
          S42: "男",
          S43: "女",
          S44: "女",
          S45: "男",
          S46: "女",
          S47: "女",
          S48: "男",
          S49: "女",
          S50: "女",
          S51: "男",
          S52: "男",
          S53: "男",
          S54: "男",
          S55: "女",
          S56: "男",
          S57: "男",
          S58: "女",
          S59: "男",
          S60: "女",
          S61: "男",
          S62: "女",
          S63: "女",
          S64: "女",
          S65: "男",
          S66: "女",
          S67: "男",
          S68: "女",
          S69: "男",
          S70: "男",
          S71: "女",
          S72: "女",
          S73: "男",
          S74: "男",
          S75: "女",
          S76: "女",
          S77: "男",
          S78: "男",
          S79: "女",
          S80: "男",
          S81: "女",
          S82: "女",
          S83: "女",
          S84: "女",
          S85: "女",
          S86: "男",
          S87: "女",
          S88: "女",
          S89: "女",
          S90: "男",
          S91: "女",
          S92: "女",
          S93: "男",
          S94: "男",
          S95: "男",
          S96: "女",
          S97: "女",
          S98: "女",
          S99: "女",
          S100: "女"
        }
        let that = this



        let cy  = window.cy = cytoscape({
          container: document.getElementById('kg-container'),
          elements: data,

          style: [ // the stylesheet for the graph
            {
              selector: 'node',
              style: {
                'background-color':'#48c3ac',
                // 'width':(d)=>{
                //   if(that.new_score.length && d.data('type') === 'card_id'){
                //     console.log(that.new_score[that.new_score.findIndex(s=>s.card_id === d.data('name'))].value)
                //     return scale(that.new_score[that.new_score.findIndex(s=>s.card_id === d.data('name'))].value)
                //   }
                //   else{
                //     return '80'
                //   }
                // },
                // 'height':'80',
                // 'background-color': (d)=>{
                //   return d.data('type') === 'card_id'?'rgba(255,255,255)':'green'
                // },
                // 'background-fit': 'cover',
                // 'background-image': (d)=>{
                //   if(d.data('type') === 'card_id'){
                //     return gender[d.data('name')] === '男'?img_1:img_0
                //   }
                // },
                'label': d=>d.data('name'),
                'color':'#fff'
              }
            },
            {
              selector: 'edge',
              style: {
                'width': .4,
                'line-color': '#ccc',
                'target-arrow-color': '#ddd',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
              }
            },
            {
              selector: 'node.highlight',
              style: {
                'border-color': '#707070',
                'border-width': '2px',
                // 'background-color':(d,i)=>{
                //     if(i === 0)
                //         return '#ddd'
                //     else
                //       return '#a33a28'
                // }
              }
            },
            {
              selector: 'node.semitransp',
              style:{ 'opacity': '0.3' }
            },
            {
              selector: 'edge.highlight',
              style: { 'mid-target-arrow-color': '#FFF' }
            },
            {
              selector: 'edge.semitransp',
              style:{ 'opacity': '0.2' }
            }
          ],

          layout: {
            name: 'cose',
            // idealEdgeLength: 100,
            nodeOverlap: 40,
            refresh: 20,
            fit: true,
            // padding: 30,
            randomize: false,
            componentSpacing: 20,
            nodeRepulsion: 400000,
            edgeElasticity: 100,
            nestingFactor: 5,
            gravity: 80,
            numIter: 1000,
            initialTemp: 200,
            coolingFactor: 0.95,
            minTemp: 1.0
          }
        })

        cy.on('click', 'node', (evt)=>{
          let node = evt.target;
          let temp = this.$store.state.cards_data;
          if(!temp.includes(node.data('name'))){
            temp.unshift(node.data('name'))
            this.$store.commit('cards_data',temp)
          }

          // console.log(this.cards_data);
        });

        // cy.on('tap', 'node', function(e) {
        //     var node = e.cyTarget;
        //     var directlyConnected = node.neighborhood();
        //     directlyConnected.nodes().addClass('connectednodes');
        // });

        cy.on('mouseover', 'node', function(e) {
          var sel = e.target;
          cy.elements()
            .difference(sel.outgoers()
              .union(sel.incomers()))
            .not(sel)
            .addClass('semitransp');
          sel.addClass('highlight')
            .outgoers()
            .union(sel.incomers())
            .addClass('highlight');
        });

        cy.on('mouseout', 'node', function(e) {
          var sel = e.target;
          cy.elements()
            .removeClass('semitransp');
          sel.removeClass('highlight')
            .outgoers()
            .union(sel.incomers())
            .removeClass('highlight');
        });
      },
      kg_d3(data){

        console.log(data);

        let kg_chart = {};

        kg_chart.width = document.getElementById('kg_main').offsetWidth;
        kg_chart.height = document.getElementById('kg_main').offsetHeight;

        let margin = {top: 25, right: 20, bottom: 30, left: 30}

        function zoomed() {
          // kg_chart.graph_g.attr("transform", "translate(" + 0 + ")scale(" + d3.event.transform.k + ")");
          kg_chart.graph_g.attr("transform", dd.event.transform);
        }

        let zoom = dd.zoom()
          .scaleExtent([0, 32])
          .extent([[margin.left, 0], [kg_chart.width - margin.right, kg_chart.height]])
          // .translateExtent([[margin.left, -Infinity], [width - margin.right, Infinity]])
          .on("zoom", zoomed);

        kg_chart.svg = dd.select('#kg_main').append('svg')
          // .attr('width',width)
          // .attr('height',height)
          .attr("viewBox", [0, 0, kg_chart.width, kg_chart.height-margin.top])
          // .attr("viewBox", [-width / 2, -height / 2, width, height])
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr('transform','translate(0,'+margin.top+')')
          .call(zoom)

        let simulation = dd.forceSimulation(data.nodes)
          .force("link", dd.forceLink(data.links).id(d => d.name).distance(0).strength(1))
          .force("charge", dd.forceManyBody())
          .force("collide", dd.forceCollide(20).strength(0.2).iterations(5))
          .force("center", dd.forceCenter(kg_chart.width / 2, kg_chart.height / 2))
          .force("x", dd.forceX())
          .force("y", dd.forceY());

        let drag = simulation => {

          function dragstarted(d) {
            if (!dd.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(d) {
            d.fx = dd.event.x;
            d.fy = dd.event.y;
          }

          function dragended(d) {
            if (!dd.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }

          return dd.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
        }

        kg_chart.graph_g = kg_chart.svg.append('g')

        kg_chart.links = kg_chart.graph_g.append("g")
          .attr("stroke", "#999")
          .attr("stroke-opacity", 0.6)
          .selectAll("line")
          .data(data.links)
          .join("line")
          .attr("stroke-width", 1)

        kg_chart.nodes = kg_chart.graph_g.append('g')
          .selectAll('circle')
          .data(data.nodes)
          .join('circle')
          .attr('cx',d=>d.x)
          .attr('cy',d=>d.y)
          .attr('r',10)
          .call(drag(simulation));




        simulation.on("tick", () => {
          // node
          //   .attr('transform',(d)=>{
          //     return `translate(${Math.max(radius, Math.min(width - radius, d.x))},
          //       ${Math.max(radius, Math.min(height - radius, d.y))})`
          //   })

          // node.attr('transform',d=>{
          //     return `translate(${d.x},${d.y})`
          // })

          kg_chart.links
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y)

          kg_chart.nodes
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);


        });


      }
    },
    computed:{
      relations(){
        return this.$store.state.relations;
      },
      modelSetting(){
        return this.$store.state.modelSetting;
      }
    },
    watch:{
      relations:{
        handler(condition){
          // this.data = this.data.filter(d=>relations.includes(d.name))
          // // console.log(this.data);
          DataManager.get_kg().then(res=>{
            // this.kg_init(res.data)
            let data = res.data;
            data.nodes = data.nodes.filter(d=>d.name !== "" )
            data.nodes = data.nodes.filter(d=> d.type === 'card_id'|| condition.map(d=>d.name).includes(d.type))
            data.links = data.links.filter(d=>condition.map(d=>d.relation).includes(d.relation))
            // console.log(data);

            if(this.$3DView)
              this.Graph.graphData(data)
            else{
              let mapping = {}
              this.kg_cy(data.nodes.map((d, i) => {
                  mapping[d.name] = i
                  return {
                    data: {id: i,name:d.name,type:d.type}
                  }
                }).concat(data.links.map(d=>{
                  return {
                    data:{
                      source:mapping[d.source],
                      target:mapping[d.target]
                    }
                  }
                }))
              );
            }

          })
        }
      },
      modelSetting:{
        handler(values){
          this.new_score = this.score_data.map(d=>{
            return {
              'card_id':'S'+ d.card_id,
              'value':values[0]*d.mor_level + values[1]*d.aca_level
                + values[2]*d.hea_level+values[3]*d.art_level
                +values[4]*d.sol_level
            }
          })
        }
      }
    },

  }
</script>

<style scoped>
  #kg_main{
    position: absolute;
    width: 100%;
    height: 84.5%;
    top:15.5%
    /*background-color: #ddd;*/
  }

  #kg_main #kg-container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .scene-nav-info{
    display: none;
  }

  .kg-toggle{
    position:absolute;
    z-index: 999;
    width: 200px;
    height: 50px;
    bottom: 10px;
    left: 25%;
  }
</style>
