<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.png" alt="meituan" />
    </div>
    <div class="phone" :class="{'focusBorder':status}">
      <myinput placeholder="请输入手机号" @focus="focused" @blur="blured" v-model="users.username"></myinput>
    </div>
    <!-- 验证码登录 -->
    <div class="password" :class="{'focusBorder':flag}" v-show="!isShow">
      <myinput placeholder="请输入手机验证码" @focus="focusedf" @blur="bluredf" v-model="users.password"></myinput>
      <span>获取验证码</span>
    </div>
    <!-- 密码登录 -->
    <div class="password" v-show="isShow">
      <myinput placeholder="请输入密码" type="password" @focus="focusedf" @blur="bluredf" v-model="users.password"></myinput>
      <span>忘记密码</span>
    </div>
    <mybutton class="btn" @click="login">登录</mybutton>
    <div class="tips">
        <p>未注册的手机号验证后自动创建美团账户</p>
        <span @click="isShow=!isShow">账号密码登录</span>
    </div>
  </div>
</template>

<script>
import myinput from "../components/myinput";
import mybutton from "../components/mybutton";
import {login} from '../apis/users.js'
export default {
  data() {
    return {
        users: {
            username: '10086',
            password: '123'
        },
      status: false,
      flag: false,
      isShow: false
    };
  },
  components: {
    myinput,
    mybutton
  },
  methods: {
    focused() {
      this.status = true;
      // console.log(123);
    },
    blured() {
      this.status = false;
    },
    focusedf() {
      this.flag = true;
      // console.log(123);
    },
    bluredf() {
      this.flag = false;
    },
    async login() {
        // console.log(this.users);
        let res = await login(this.users)
        // console.log(res);
        if(res.data.message == '用户不存在') {
            // console.log(123);
            this.$toast({
                message:res.data.message,
                duration: 3000
            })
        }else {
            this.$router.push({name:'index'})
        }
        
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  padding: 30px;
}
.logo {
  width: 100 * 100vw/375;
  margin: 30px auto;
  img {
    width: 80 * 100vw/375;
  }
}
.phone {
  border-bottom: 2px solid rgb(240, 237, 237);
}
.focusBorder {
  border-bottom: 2px solid #fbc001;
}
.btn {
    margin-top: 30px;
}
.tips {
    width: 260*100vw/360;
    margin: 20px auto;
    font-size: 14px;
    
    p {
        color: #ccc;
        margin-bottom: 20px;
    }
    span {
       font-size: 16px;
       transform: translate(-50%,-50%);
    }
   
}
</style>