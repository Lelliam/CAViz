<template>
  <div id="kg_control">
    <Card :style="{minHeight: '100%',minWidth: '100%'}">
      <p slot="title">图谱过滤</p>
      <Divider orientation="left">连续型-度量</Divider>
      <CellGroup>
        <Cell>
          <Slider v-model="value" show-input></Slider>
        </Cell>
      </CellGroup>
      <Divider orientation="left">离散型-维度</Divider>
      <CellGroup>
        <CheckboxGroup v-model="kg_relation" @on-change="test">
          <Cell>
            <Checkbox label="gender">
              <Icon type="md-ionic" />
              <span>性别</span>
            </Checkbox>
            <label>
              <Select v-model="model16" multiple :max-tag-count="2" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </label>
          </Cell>
          <Cell>
            <Checkbox label="nation">
              <Icon type="ios-people-outline" />
              <span>民族</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="politics_status">
              <Icon type="ios-people-outline" />
              <span>政治面貌</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="duty">
              <Icon type="ios-people-outline" />
              <span>任职</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="reward">
              <Icon type="ios-people-outline" />
              <span>荣誉</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="moral">
              <Icon type="ios-people-outline" />
              <span>思想品德</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="courses">
              <Icon type="ios-people-outline" />
              <span>校本研修</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="innovation">
              <Icon type="ios-people-outline" />
              <span>研究与创新</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="sports_speciality">
              <Icon type="ios-people-outline" />
              <span>体育特长</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="artistic_accomplishment">
              <Icon type="ios-people-outline" />
              <span>艺术修养</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="social_practice">
              <Icon type="ios-people-outline" />
              <span>社会实践</span>
            </Checkbox>
          </Cell>
        </CheckboxGroup>
      </CellGroup>
    </Card>
  </div>
</template>

<script>
    export default {
        name: "AppControler",
        data () {
            return {
                kg_relation: [],
                relation_pairs:{
                    'gender':'性别',
                    'nation':'民族',
                    'age':'年龄',
                    'politics_status':'政治面貌',
                    'duty':'任职',
                    'reward':'荣誉',
                    'moral':'思想品德',
                    'courses':'校本研修',
                    'innovation':'研究与创新',
                    'sports_speciality':'体育特长',
                    'artistic_accomplishment':'艺术修养',
                    'social_practice':'社会实践',
                    'credit':'GPA'
                },
                value:[20,50],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    }
                ],
                model16: []
            }
        },
        mounted(){

        },
        methods:{
            maxTagPlaceholder (num) {
                return 'more '+ num;
            },
            test(x){
                this.$store.commit('relations',x.map(d=>{
                    return {
                        name:d,
                        relation:this.relation_pairs[d]
                    }
                }))
            }
        }
    }
</script>

<style scoped>
  #kg_control{
    position: absolute;
    width: 17%;
    height: 80%;
    top: 20%;
    /*color: #646464;*/
    /*background-color: #fff;*/
    z-index: 1;
  }
</style>
