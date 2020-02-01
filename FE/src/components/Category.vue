<template>
  <div class="hello">
    <b-list-group>
      <b-list-group-item v-for="item in listCategory" :key="item.CatID" :to="`/cat/${item.CatID}/product`">{{item.CatName}}</b-list-group-item>
    </b-list-group>
    <hr>
    <b-button to="/product/insert">Thêm sản phẩm</b-button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Category",
  props: {
    msg: String
  },
  data() {
    return {
      listCategory:[]
    }
  },
  mounted(){
    axios.get("http://localhost:3000/cat")
    .then(res => {
      this.listCategory = res.data;
    })
    .catch(err => {
      console.log(err)
    })
  }
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
