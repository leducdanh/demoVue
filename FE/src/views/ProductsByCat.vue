<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.ProID">
          <td>{{index + 1}}</td>
          <td>{{item.ProName}}</td>
          <td>{{item.Price}}</td>
          <td><b-button variant="success" :to="`/product/${item.ProID}`">Edit</b-button>
          <b-button variant="danger" @click="Delproduct(item)">Del</b-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {dev_domain} from "../../vueconfig";

export default {
  name: "home",
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.fetchProducts(this.$route.params.catID);
  },
  methods: {
    fetchProducts(catId) {
      axios
        .get(`${dev_domain}/cat/${catId}/product`)
        .then(res => {
          this.items = res.data;
        })
        .catch(() => {
          // console.log(err);
        });
    },
    Delproduct(item){
      axios
        .delete(`${dev_domain}/product/${item.ProID}`)
        .then(res => {
          console.log(res)
          this.items.splice(this.items.indexOf(item), 1)
        })
        .catch(() => {
          // console.log(err);
        });
    }
  },
  watch: {
    $route(to) {
      this.fetchProducts(to.params.catID);
    }
  }
};
</script>

<style>
a.list-group-item.router-link-exact-active.router-link-active.list-group-item-action {
    background: cyan;
    font-weight: 700;
}
</style>
