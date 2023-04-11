<template>
  <div class="category">
    <div>
      <h3>{{ title }}</h3>
      <slot name="center">默认值</slot>
      <slot name="footer">默认值</slot>
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
