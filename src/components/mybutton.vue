<template>
  <div class="btn" @click="login">
    <span></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    login(event) {
      this.$emit('click', event);
    }
  }
};
</script>

<style lang="less">
.btn {
    margin: 0 auto;
  width: 300 * 100/360vw;
  height: 50px;
  background-color: #ffc100;
  opacity: 0.4;
  // border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: #666;
  font-size: 20px;
}
</style>
