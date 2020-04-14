<template>
  <div class="insertPro text-left">
    <b-form>
      <b-form-group id="input-group-1" label="Tên sản phẩm:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="namePro"
          required
          placeholder="Nhập tên sản phẩm"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Giá sản phẩm:" label-for="input-1">
        <b-form-input
          id="input-2"
          type="number"
          v-model="pricepro"
          required
          placeholder="Nhập giá sản phẩm"
        ></b-form-input>
      </b-form-group>

      <label class="mr-sm-2" for="inline-form-custom-select-pref">Loại sản phẩm</label>
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="selected"
        :options="listCategory"
        id="cat"
      >
        <template v-slot:first>
          <option :value="null">Choose...</option>
        </template>
      </b-form-select>
      <b-button type="button" variant="primary" @click="editproduct">Cập nhật</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import {dev_domain} from "../../vueconfig";

export default {
  name: "insertProduct",
  props: {
    msg: String
  },
  data() {
    return {
      detailpro: null,
      namePro: "",
      pricepro: 0,
      listCategory: "{",
      selected: null
    };
  },
  methods: {
    editproduct() {
      axios
        .put(`${dev_domain}/product/${this.$route.params.id}`, {
          CatID: Number(this.selected),
          ProName: this.namePro,
          Price: Number(this.pricepro)
        })
        .then(res => {
          console.log(res);
        })
        .catch(() => {
          // console.log(err);
        });
    },

    getDetailpro(idPro) {
      axios
        .get(`${dev_domain}/product/${idPro}`)
        .then(res => {
          this.namePro = res.data[0].ProName
          this.pricepro = res.data[0].Price
          this.selected = res.data[0].CatID
        })
        .catch(() => {
          // console.log(err);
        });
    }
  },
  created() {
    axios
      .get(`${dev_domain}/cat`)
      .then(res => {
        res.data.map(item => {
          this.listCategory += `"${JSON.stringify(item.CatID)}":"${
            item.CatName
          }",`;
        });
        this.listCategory =
          this.listCategory.substring(0, this.listCategory.length - 1) + "}";
        this.listCategory = JSON.parse(this.listCategory);
      })
      .catch(() => {
        // console.log(err);
      });
  },
  mounted() {
      this.getDetailpro(this.$route.params.id)
  },
  watch: {
    $route(to) {
      this.getDetailpro(to.params.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
