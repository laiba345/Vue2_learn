<template>
  <div class="container">
    <!-- 
      1、App组件是Category组件的使用者
      2、数据也是在APP组件中
      - 但是现在我们将数据放到 Category 中
      - 但是结构要由App组件生成

      3、但是现在已经有了新的需求
        - 就是在不同的组件中对于不同的数据有着不同的要求处理
        - 数据还是那些数据，但是数据的结构是根据使用者生成而定的
        - 如果再把结构写在Category组件中，意味着那些结构就是固定的了
      4、现在要处理的是：通过某种方式将Category里的games传给App组件即可
      5、插槽的使用者往插槽里面塞东西，但是数据是由定义插槽的那个反着传过来
        - 对于作用域插槽，外部必须通过template包裹住即可
      6、主要的原因是因为当前组件中的数据拿不到

      !!! 数据都是一个数据，但是结构是由使用者决定
    -->
    <Category title="游戏">
      <!-- 此处scope后面的名字可以自己定义 -->
      <template scope="atguigu">
        <!-- 收到的数据就是保存在atguigu这个变量中 -->
        <!-- 为什么要写一个这样的对象，主要是因为别的定义了多个插槽的组件可能传入了多个数据 -->
        <!-- {{ atguigu.games }} -->
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <!-- 第二种写法 -->
    <Category title="游戏">
      <!-- 此处还支持解构赋值 -->
      <template scope="{ games }">
        <ol>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <!-- 第三种写法 -->
    <Category title="游戏">
      <!-- 此处还支持解构赋值 -->
      <template slot-scope="{ games }">
        <ol>
          <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
        </ol>
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
/* h4 {
  text-align: center;
} */
</style>
