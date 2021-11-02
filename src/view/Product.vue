<template>
  <main class="product-form">
    <form  @submit.prevent="save">
        <div class="title">
            <h1 id="title"> Cadastro Produto </h1>
            <h1 id="subtitle"> Preencha as informações corretamente do produto </h1>
        </div>
            <div class="field">   
                <label> Selecione o Time </label>
                <select class="team-form" v-model="product.team">
                    <option v-for="item in items" :value="item._id" :key="item._id">
                    {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="field">
                <label> Nome do produto</label>
                <input type="text" name="name" id="name" v-model="product.name" required>
            </div>
            <div class="field">
                <label> Quantidade de produtos </label>
                <input type="number" name="name" id="quantidade" v-model="product.quantidade" required>
            </div>
            <div class="field">
                <label> Descrição do produto </label>
                <input type="text" name="name" id="descricao" v-model="product.descricao" required>
            </div>
            <div class="field">
                <label> Preço do produto </label>
                <input type="number" min="1" step="any" v-model="product.preco" id="preco"/>
            </div>
            <button id="save_product" @submit.prevent="save">
                Save
            </button>
        <div>
            <img src="../assets/astrodab.png" class="dab" />
        </div>
    </form>
    
  </main>

</template>

<script>
import Product from '../services/productService';

export default {
  name: 'Product', 

  data: () => ({
    product: {
        team: '',
        name: '',
        quantidade: 0,
        descricao: '',
        preco: 0

    },
    items: []
  }),
  mounted () {
      Product.get_all_product().then(res => {
          console.log(res)
      }),
      Product.get_all_teams().then(res => {
          this.items = res.data
      })
  },
  methods: {
      save () {
          Product.create_product(this.product).then(res => {
              alert("Salvo Com Sucesso")
              console.log(res)
          }).catch(err => {
              alert(err)
          }) 
      }

  }
}
</script>
<style lang="scss">
  @import "../scss/product.scss";
</style>