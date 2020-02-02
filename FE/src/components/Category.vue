<template>
  <div class="hello">
    <b-list-group>
      <b-list-group-item
        v-for="item in listCategory"
        :key="item.CatID"
        :to="`/cat/${item.CatID}/product`"
      >{{item.CatName}}</b-list-group-item>
    </b-list-group>
    <hr />
    <b-button variant="primary" to="/cat/insert">Thêm loại sản phẩm</b-button>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listCategory"],
  data() {
    return {
      // listCategory:[]
    };
  },
  created() {},
  mouted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
