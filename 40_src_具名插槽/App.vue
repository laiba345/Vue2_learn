<template>
  <div class="container">
    <Category title="美食">
      <!-- 自己指定的默认插槽是什么名字 -->
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <div class="foot" slot="footer">
        <a href="www.baidu.com">更多美食</a>
      </div>
    </Category>
    <Category title="游戏">
      <!-- slot具名插槽在任意标签属性中都是可以书写的 -->
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <!-- 如果要写样式的话，可以包裹div -->
      <div class="foot" slot="footer">
        <a href="www.baidu.com">单机游戏</a>
        <!-- 可以追加很多插槽，不会产生覆盖现象 -->
        <a href="www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <!-- <div class="foot" slot="footer">
        <a href="www.baidu.com">经典</a>
        <a href="www.baidu.com">热门</a>
        <a href="www.baidu.com">推荐</a>
      </div>
      <h4 slot="footer">欢迎前来观影</h4> -->
      <!-- <template slot="footer">
        <div class="foot">
          <a href="www.baidu.com">经典</a>
          <a href="www.baidu.com">热门</a>
          <a href="www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template> -->

      <!-- 使用了template书写以后，就有第二种写法了 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="www.baidu.com">经典</a>
          <a href="www.baidu.com">热门</a>
          <a href="www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
// import 'bootstrap'
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style lang="css">
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
