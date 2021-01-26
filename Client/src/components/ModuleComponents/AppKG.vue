<template>
  <div id="kg_main"></div>
</template>

<script>
    import DataManager from "../../data-manager/data-manager";
    import ForceGraph3D from "3d-force-graph";
    import cytoscape from 'cytoscape'
    import * as dd from 'd3'
    export default {
        name: "AppKG",
        data(){
            return {
                Graph:null,
                cards_data:[]
            }
        },
        mounted() {
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
        methods:{
            kg_init(data){
                this.Graph = ForceGraph3D()
                (document.getElementById('kg_main'))
                    .width(document.getElementById('kg_main').offsetWidth)
                    .graphData(data)
                    .nodeId('name')
                    .nodeLabel('name')
                    .nodeColor(d => color(d))
                    // .linkColor("#ddd")
                    .linkAutoColorBy('relation')
                    .backgroundColor("#000000")
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

                console.log(data);
                let cy  = window.cy = cytoscape({
                    container: document.getElementById('kg_main'),
                    elements: data,

                    style: [ // the stylesheet for the graph
                        {
                            selector: 'node',
                            style: {
                                'background-color': (d)=>{
                                    return d.data('type') === 'card_id'?'#4865dd':'green'
                                },
                                'label': 'data(name)'
                            }
                        },

                        {
                            selector: 'edge',
                            style: {
                                'width': 1,
                                'line-color': '#ccc',
                                'target-arrow-color': '#ddd',
                                'target-arrow-shape': 'triangle',
                                'curve-style': 'bezier'
                            }
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
                        console.log(data);
                        let mapping = {}
                        // this.Graph.graphData(data)
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
                }
            }
        },

    }
</script>

<style scoped>
  #kg_main{
    position: absolute;
    width: 100%;
    height: 100%;
    /*background-color: #ddd;*/
  }

</style>
