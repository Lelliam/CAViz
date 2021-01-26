<template>
  <div id="kg_control">
    <Card :style="{minHeight: '92vh',minWidth: '300px'}">
      <p slot="title">The standard card</p>
      <Divider orientation="left">关系选择</Divider>
      <CellGroup>
        <CheckboxGroup v-model="kg_relation" @on-change="test">
          <Cell>
            <Checkbox label="gender">
              <Icon type="md-ionic" />
              <span>性别</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="nation">
              <Icon type="ios-people-outline" />
              <span>民族</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="age">
              <Icon type="ios-people-outline" />
              <span>年龄</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="politics_status">
              <Icon type="ios-people-outline" />
              <span>政治面貌</span>
            </Checkbox>
          </Cell>
          <Cell>
            <Checkbox label="credit">
              <Icon type="ios-people-outline" />
              <span>绩点</span>
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
      <Divider orientation="left">信息查询</Divider>
      <CellGroup>
        <Cell>
          <Input search placeholder="Enter something..." />
        </Cell>
      </CellGroup>
      <!--      <cell-group>-->
      <!--        <Cell>-->
      <!--          <Form>-->
      <!--            <FormItem label="">-->
      <!--              <Input  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>-->
      <!--            </FormItem>-->
      <!--            <FormItem>-->
      <!--              <Button type="primary">Submit</Button>-->
      <!--              <Button style="margin-left: 8px">Cancel</Button>-->
      <!--            </FormItem>-->
      <!--          </Form>-->
      <!--        </Cell>-->
      <!--      </cell-group>-->

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
                }

            }
        },
        mounted(){

        },
        methods:{
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
    width: 15%;
    height: 100%;
    /*color: #646464;*/
    /*background-color: #fff;*/
    z-index: 1;
  }
</style>
