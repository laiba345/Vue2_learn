<template>
  <div class="category">
    <div>
      <h3>{{ title }}</h3>
      <!-- 下方就是将games传给了插槽的使用者 -->
      <!-- 插槽的目的就是等着别人往里面塞结构进来，谁往里面塞的结构，这个games就传给了谁 -->
      <!-- 前面的那个games是随意取值的 -->
      <slot :games="games">我是默认的一些内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
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
