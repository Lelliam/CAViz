<template>
  <div id="kg_control">
    <Card :style="{minHeight: '100%',minWidth: '100%'}">
      <p slot="title">图谱过滤</p>
      <Divider orientation="left">连续型-度量</Divider>
      <CellGroup>
        <Cell>
          <Icon type="ios-people-outline" />
          <span>测试指标1</span>
          <Slider style="width: 65%; float: right;margin-right:5px;margin-top: -5px" v-model="value" range :marks="marks"></Slider>
        </Cell>
        <Cell>
          <Icon type="ios-people-outline" />
          <span>测试指标2</span>
          <Slider style="width: 65%; float: right;margin-right:5px;margin-top: -5px" v-model="value" range :marks="marks"></Slider>
        </Cell>
        <Cell>
          <Icon type="ios-people-outline" />
          <span>测试指标3</span>
          <Slider style="width: 65%; float: right;margin-right:5px;margin-top: -5px" v-model="value" range :marks="marks"></Slider>
        </Cell>
        <Cell>
          <Icon type="ios-people-outline" />
          <span>测试指标4</span>
          <Slider style="width: 65%; float: right;margin-right:5px;margin-top: -5px" v-model="value" range :marks="marks"></Slider>
        </Cell>
        <Cell>
          <Icon type="ios-people-outline" />
          <span>测试指标5</span>
          <Slider style="width: 65%; float: right;margin-right:5px;margin-top: -5px" v-model="value" range :marks="marks"></Slider>
        </Cell>
      </CellGroup>
      <Divider orientation="left">离散型-维度</Divider>
      <CellGroup>
        <CheckboxGroup v-model="kg_relation" @on-change="test">
          <Cell>
            <Row>
              <Col span="12">
                <Checkbox label="gender">
                  <Icon type="ios-people-outline" />
                  <span>学生性别</span>
                </Checkbox>
              </Col>
              <Col span="12">
                <Checkbox label="age">
                  <Icon type="ios-people-outline" />
                  <span>学生年龄</span>
                </Checkbox>
              </Col>
            </Row>
          </Cell>
          <Cell>
            <Row>
              <Col span="12">
                <Checkbox label="nation">
                  <Icon type="ios-people-outline" />
                  <span>学生民族</span>
                </Checkbox>
              </Col>
              <Col span="12">
                <Checkbox label="politics_status">
                  <Icon type="ios-people-outline" />
                  <span>政治面貌</span>
                </Checkbox>
              </Col>
            </Row>
          </Cell>
          <Cell>
            <Row>
              <Col span="12">
                <Checkbox label="duty">
                  <Icon type="ios-people-outline" />
                  <span>任职情况</span>
                </Checkbox>
              </Col>
              <Col span="12">
                <Checkbox label="reward">
                  <Icon type="ios-people-outline" />
                  <span>荣誉情况</span>
                </Checkbox>
              </Col>
            </Row>
          </Cell>
          <Cell>
            <Row>
              <Col span="12">
                <Checkbox label="moral">
                  <Icon type="ios-people-outline" />
                  <span>思想品德</span>
                </Checkbox>
              </Col>
              <Col span="12">
                <Checkbox label="courses">
                  <Icon type="ios-people-outline" />
                  <span>校本研修</span>
                </Checkbox>
              </Col>
            </Row>
          </Cell>
          <Cell>
            <Row>
              <Col span="12">
                <Checkbox label="innovation">
                  <Icon type="ios-people-outline" />
                  <span>研究创新</span>
                </Checkbox>
              </Col>
              <Col span="12">
                <Checkbox label="artistic_accomplishment">
                  <Icon type="ios-people-outline" />
                  <span>体育特长</span>
                </Checkbox>
              </Col>
            </Row>
          </Cell>
          <Cell>
            <Row>
              <Col span="12">
                <Checkbox label="artistic_accomplishment">
                  <Icon type="ios-people-outline" />
                  <span>艺术修养</span>
                </Checkbox>
              </Col>
              <Col span="12">
                <Checkbox label="social_practice">
                  <Icon type="ios-people-outline" />
                  <span>社会实践</span>
                </Checkbox>
              </Col>
            </Row>
          </Cell>
        </CheckboxGroup>
      </CellGroup>
      <Divider orientation="left">条件过滤</Divider>
      <CellGroup>
        <Cell>
          <Form ref="formDynamic" :model="formDynamic" style="width: 300px">
            <FormItem
              v-for="(item, index) in formDynamic.items"
              v-if="item.status"
              :key="index"
              :prop="'items.' + index + '.value'">
              <Row>
                <Col  span="9">
                  <Select v-model="model1">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </Col>
                <Col span="12" offset="1">
                  <Select v-model="model16" multiple :max-tag-count="1">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </Col>
                <Col span="1" offset="1">
                  <Icon @click="handleRemove(index)" type="ios-remove-circle-outline" style="font-size: 20px"/>
<!--                  <Button @click="handleRemove(index)">—</Button>-->
                </Col>
              </Row>
            </FormItem>
            <FormItem>
              <Row>
                <Col span="12">
                  <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </Cell>

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
                model1: '',
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Beijing',
                        label: 'Beijing'
                    }
                ],
                model16: [],
                model11: '',
                model12: [],
                marks:{
                    0:'0',
                    100:'1'
                },
                index: 1,
                formDynamic: {
                    items: [
                        {
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ]
                }
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
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.formDynamic.items[index].status = 0;
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
