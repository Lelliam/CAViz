<template>
    <div id="module3-cards">
      <Card :style="{minHeight: '92vh'}">
        <p slot="title">The standard card</p>
        <CellGroup>
          <Cell  v-for=" (i,j) in test" :key="'key'+j">
            <Card class="cards">
              <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                Classic film
              </p>
              <a href="#" slot="extra" @click.prevent="test_fun(j)">
                <Icon type="ios-loop-strong"></Icon>
                X
              </a>
              <ul>
                <li>{{i}}</li>
              </ul>
            </Card>
          </Cell>
        </CellGroup>
      </Card>
    </div>
</template>

<script>
    export default {
        name: "AppCards",
        data(){
            return {
                test:[]
            }
        },
        methods:{
            test_fun(index){
                this.test.splice(index,1)
                this.$store.commit('cards_data',this.test)
            }
        },
        computed:{
            cards_data(){
                return this.$store.state.cards_data;
            }
        },
        watch: {
            cards_data: {
                handler(res) {
                    this.test = res;
                }
            }
        }
    }
</script>

<style scoped>
#module3-cards{
  position: absolute;
  right: 0;
  width: 20%;
  height: 100%;
  overflow-y: scroll;
}

/*#module3-cards::before{*/
/*  content:'';*/
/*  position:absolute;*/
/*  top:0;*/
/*  left:0;*/
/*  right:0;*/
/*  bottom:0;*/
/*  filter:blur(10px) contrast(.8);*/
/*  z-index:-1;*/
/*}*/

.cards{
  /*position: relative;*/
  /*width: 100%;*/
  margin-bottom: 5px;
}

</style>
