<template>
  <input class="myinput" @input="handleInput" @focus="focusInput" @blur="blurInput"/>
</template>

<script>

export default {
  props: ['rules','msg'],
  data() {
    return {
      status: true
    };
  },
  methods: {
    handleInput(event) {
      //   console.log(this.rules); 判断从父组件传入的正则 做出相应的程序
      //   console.log(this.rules.test());
      //   console.log(event.target.value);
      let value = event.target.value;
      if (this.rules && this.rules.test(value)) {
        this.status = false;
      } else {
        this.status = true;
      }
      //   把变化的值传给父组件
      this.$emit('input', value);
    },
    focusInput(event) {
      this.$emit('focus',event)
    },
    blurInput(event) {
      this.$emit('blur',event)
    }
  }
};
</script>

<style lang="less">
.myinput {
  outline: none;
  // outline-
  border-bottom: 2px solid#ffe2bd;
  border: none;
  border-bottom: 2px solid rgb(240, 237, 237);
  width: 200 * 100vw/360;
  height: 40px;
  font-size: 22px;
  // font-weight: 700;
  line-height: 40px;
}
input::-webkit-input-placeholder { /* WebKit browsers */ 
color: #bababa; 
font-size:18px;
font-weight: normal;
} 

</style>
