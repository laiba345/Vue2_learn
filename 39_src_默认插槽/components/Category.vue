<template>
  <div class="category">
    <div>
      <h3>{{ title }}</h3>
      <!-- <ul>
        <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
      </ul> -->
      <!-- 我们的要求是不同的Category展示不同的东西 -->

      <!-- 定义一个插槽(挖个坑，等着组件的使用者进行填充) -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
};
</script>

<style>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>
