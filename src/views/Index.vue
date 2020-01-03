<template>
  <div class="index">
    <div class="head">
      <div class="address">
        广州
        <img src="../assets/xia.png" alt />
      </div>
      <div class="search">
        <img src="../assets/search.png" alt />
        <span>请输入商家名、品类或者商圈</span>
      </div>
      <div class="login">
        <img src="../assets/user.png" alt />
      </div>
    </div>
    <div class="ad">
      <div class="meituan">美团</div>
      <div class="save">
        <p>省钱利器 购物超划算</p>
        <p>吃喝玩乐尽在美团</p>
      </div>
      <div class="app">去APP</div>
    </div>
    <div class="list">
      <ul>
        <li>
          <span class="iconfont">&#xe62b;</span>
          <span>美食</span>
        </li>
        <li>
          <span class="iconfont">&#xe60f;</span>
          <span>電影</span>
        </li>
        <li>
          <span class="iconfont">&#xe645;</span>
          <span>酒店</span>
        </li>
        <li>
          <span class="iconfont">&#xe61e;</span>
          <span>休闲</span>
        </li>
        <li>
          <span class="iconfont">&#xe615;</span>
          <span>外卖</span>
        </li>
        <li>
          <span class="iconfont">&#xe60b;</span>
          <span>KTV</span>
        </li>
        <li>
          <span class="iconfont">&#xe61d;</span>
          <span>周边游</span>
        </li>
        <li>
          <span class="iconfont">&#xe600;</span>
          <span>丽人</span>
        </li>
        <li>
          <span class="iconfont">&#xe61c;</span>
          <span>小吃快餐</span>
        </li>
        <li>
          <span class="iconfont">&#xe60c;</span>
          <span>全部分类</span>
        </li>
      </ul>
    </div>
    <div class="maylike">
      <h2>猜你喜欢</h2>
      <ul>
        <li>
          <div class="left">
            <img src="../assets/uploads/chicken.jpg" alt="">
          </div>
          <div class="right">
            <p>稻香迎囍皇宫</p>
            <p>[3店通用]盐焗手撕鸡1份，提供免费WiFi</p>
            <div class="price">
              <span><em>1</em>元<i>门市价</i><del>68元</del></span>
              <span class="sold">已售2222</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* project id 1596691 */
  src: url("//at.alicdn.com/t/font_1596691_m7q0wj09sa.eot");
  src: url("//at.alicdn.com/t/font_1596691_m7q0wj09sa.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1596691_m7q0wj09sa.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1596691_m7q0wj09sa.woff") format("woff"),
    url("//at.alicdn.com/t/font_1596691_m7q0wj09sa.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1596691_m7q0wj09sa.svg#iconfont") format("svg");
}
.head {
  display: flex;
  height: 50px;
  line-height: 50px;
  background: #ffc000;
  font-size: 14px;
  color: #a39d89;
  padding: 0 10px;
  .address {
    flex: 2;
    color: #222;
    img {
      width: 14px;
    }
  }
  .search {
    flex: 7;
    background-color: #fff;
    height: 35px;
    line-height: 35px;
    margin-top: 8px;
    border-radius: 10px;
    img {
      width: 14px;
      margin: 0 10px;
      vertical-align: middle;
    }
  }
  .login {
    flex: 1;

    img {
      width: 20px;
      margin: 15px 10px;
    }
  }
}
.ad {
  height: 30px;
  background-color: #000;
  color: #fff;
  display: flex;
  padding: 10px;
  font-size: 14px;
  .meituan {
    flex: 1;
    background-color: #ffc000;
    color: #000;
    border-radius: 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .save {
    flex: 6;
    padding-left: 30px;
    & :last-child {
      color: #666;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .app {
    flex: 1.5;
    background-color: #ffc000;
    color: #000;
    border-radius: 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
.list {
  padding: 10px;
  background-color: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 20%;
      // background: pink;
      span {
        margin: 5px;
        font-size: 14px;
        color: #666;
      }
      .iconfont {
        width: 30px;
        height: 30px;
        background-color: #fd9d21;
        border-radius: 30px;
        font-size: 30px;
        padding: 10px;
        color: #fff;
        margin: 5px;
      }
      
    }
  }
}
.maylike {
  margin-top: 15px;
  padding: 10px;
  background-color: #fff;
  color: #333;
  h2 {
    margin-bottom: 20px;
    font-size: 18px;
  }
  ul li {
    display: flex;
    .left {
      flex: 3;
      img {
        width: 100px;
      }
    }
    .right {
      flex: 7;
      p {
        margin-bottom: 10px;
      }
    }
    .price {
      em {
        color: #fd9d21;
        font-weight: 700;
        font-size: 20px;
      }
      span.sold {
        float: right;
      }
    }
  }
}
</style>
