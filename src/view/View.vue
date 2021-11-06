<template>
  <main class="View">
  <h1 class="title_product"> Products Available: </h1>
    <div class="components">
      <div class="cards_product" v-for=" item in product" :key="item._id" v-bind="get_team_name()">
        <h1 >{{ item.name }}</h1>
        <p> {{ team_name }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import Product from '../services/productService';

export default {
  name: 'View',
  data: () => ({
    product: [],
    team: [],
    team_name: []
  }),
  mounted () {
    Product.get_all_product().then(res => {
      this.product = res.data
    }),
    Product.get_all_teams().then(res => {
      this.team = res.data
    })
    this
  },
  methods: {
      get_team_name () {
          for (var i = 0; i < this.team.lenght ; i++) {
            if (this.team[i]._id == this.product[i].team) {
              this.team_name = 'aaa'
            }
          }
      }
  }
}
</script>
<style lang="scss">
@import "../scss/view.scss";
</style>
