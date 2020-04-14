<template>
  <div class="insertPro text-left">
    <b-form>
      <b-form-group id="input-group-1" label="Tên sản phẩm:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="nameCat"
          required
          placeholder="Nhập tên loại sản phẩm"
        ></b-form-input>
      </b-form-group>

      <b-button type="button" variant="primary" @click="insertCategory">Thêm</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import {dev_domain} from "../../vueconfig";

export default {
  name: "insertCategory",
  props: {
    msg: String
  },
  data() {
    return {
      listCategory: "{",
      nameCat: "",
    };
  },
  methods: {
    insertCategory() {
      axios
        .post(`${dev_domain}/cat`, {
          CatName: this.nameCat,
        })
        .then(res => {
          this.$store.state.categories.push(res.data)
        })
        .catch(() => {
        });
    }
  },
  created() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
