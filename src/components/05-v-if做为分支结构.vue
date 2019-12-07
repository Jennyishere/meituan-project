<template>
  <div class="if">
      <h1>这个文件主要说明v-if分支结构的使用</h1>
      <!-- 成绩的等级 -->
      <input type="number" v-model='score'>
      <!-- 如果满足条件，就创建下面这个结构 -->
      <p v-if='score>=90'>A</p>
      <p v-else-if="score>=80">B</p>
      <p v-else-if="score>=70">C</p>
      <p v-else-if="score>=60">D</p>
      <p v-else>E</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: 0
    }
  }
}
</script>

<style>

</style>
