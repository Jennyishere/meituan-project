<template>
  <div id="app">
    <div class="add">
      <!-- reference -->
      编号:
      <input type="text" v-model="newbrand.id" ref="bid" v-myfocus v-setcolor="'red'"/>
      品牌名称:
      <input type="text" v-model="newbrand.bname" ref="bname"/>
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" />
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
          <tr v-for="(value,index) in brandList" :key="value.id">
            <td>{{value.id}}</td>
            <td>{{value.bname}}</td>
            <td>{{value.btime | dateFormat('/')}}</td>
            <td>
              <a href="#" @click.prevent="del(index)">删除</a>
            </td>
          </tr>
          <tr v-if="brandList.length === 0">
            <td colspan="4">没有任何的数据，请先添加</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { myfocus, setcolor } from '../utils/mydirectives.js'
export default {
  data () {
    return {
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
    myfocus: myfocus,
    setcolor
  },
  // 添加过滤器
  filters: {
    dateFormat: (data, spe) => {
      var year = data.getFullYear()
      var month = data.getMonth() + 1
      var day = data.getDate()
      return year + spe + month + spe + day
    }
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
