<template>
  <main class="View">
  <h1 class="title_product"> Products Available: </h1>
    <div class="components">
      <div class="cards_product" v-for=" item in product" :key="item.name">
        <li >{{ item.name }}</li>
      </div>
    </div>
  </main>
</template>

<script>
import Product from '../services/productService';

export default {
  name: 'View',
  data: () => ({
    product: []
  }),
  mounted () {
    Product.get_all_product().then(res => {
        this.product = res.data
    })
  },
}
</script>
<style lang="scss">
@import "../scss/view.scss";
</style>
