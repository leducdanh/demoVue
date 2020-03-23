<template>
  <div id="app">
    <b-container class="mt-5">
      <b-row>
        <b-col col lg="3">
          <Category :listCategory="$store.state.categories" @insert-cat="InsertNewCat()"/>
          <hr />
          <b-button to="/product/insert">Thêm sản phẩm</b-button>
        </b-col>
        <b-col col lg="9">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import axios from "axios";
import dev_domain from "../vueconfig";

export default {
  components: {
    Category
  },
  data() {
    return {
      // categories: []
    };
  },
  mounted() {
    axios
      .get(`${dev_domain}/cat`)
      .then(res => {
        this.$store.state.categories = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  method: {
    InsertNewCat(newCat) {
      console.log("InsertNewCat",newCat)
      this.$store.state.categories.push(newCat)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
