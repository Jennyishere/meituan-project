<template>
  <div id="app">
    <div class="add">
      <!-- reference -->
      编号:
      <input type="text" v-model="newbrand.id" ref="bid" v-myFocus v-setcolor="'red'"/>
      品牌名称:
      <input type="text" v-model="newbrand.bname" ref="bname"/>
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:
      <!-- input可以监听当前文本框的内容变化，只要内容有变化就会触发 -->
      <input type="text" placeholder="请输入搜索条件" v-model="userkey" @input='searchdata'/>
    </div>
    <div>
      <table class="tb">
        <tbody>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="(value,index) in searchdata()" :key="value.id">
            <td>{{value.id}}</td>
            <td>{{value.bname}}</td>
            <td>{{value.btime | dateformat}}</td>
            <td>
              <a href="#" @click.prevent="del(index)">删除</a>
            </td>
          </tr>
          <tr v-if="searchdata().length === 0">
            <td colspan="4">没有任何的数据，请先添加</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { myFocus, setcolor } from '../utils/mydirectives.js'
import { dateformat } from '../utils/myfilters.js'
export default {
  data () {
    return {
      userkey: '', // 搜索关键字
      newbrand: {
        id: '',
        bname: '',
        btime: new Date()
      },
      brandList: [
        {
          id: 1,
          bname: 'HTML',
          btime: new Date()
        },
        {
          id: 2,
          bname: 'css',
          btime: new Date()
        },
        {
          id: 3,
          bname: 'javascript',
          btime: new Date()
        }
      ]
    }
  },
  methods: {
    // 搜索
    searchdata () {
      // let arr = []
      // for (var i = 0; i < this.brandList.length; i++) {
      //   // 判断用户关键字是否包含在bname属性中
      //   if (this.brandList[i].bname.indexOf(this.userkey) !== -1) {
      //     arr.push(this.brandList[i])
      //   }
      // }
      // return arr
      return this.brandList.filter((v) => {
        return v.bname.indexOf(this.userkey) !== -1
      })
    },
    // 数据的添加
    add () {
      // this.brandList.push({ id: this.id, bname: this.bname })
      this.brandList.push({ ...this.newbrand })
    },
    // 数据的删除
    del (index) {
      this.brandList.splice(index, 1)
    }
  },
  // 注册指令
  directives: {
    myFocus: myFocus,
    setcolor
  },
  // 添加过滤器
  // 注册过滤器
  filters: {
    dateformat
  }
}
</script>

<style lang='less' scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
