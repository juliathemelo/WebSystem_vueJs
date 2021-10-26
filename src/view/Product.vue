<template>
  <main class="product-form">
    <form>
        <div class="title">
            <h1 id="title"> Cadastro Produto </h1>
            <h1 id="subtitle"> Preencha as informações corretamente do produto </h1>
        </div>
        <v-form>
            <div class="field">
                <label> Selecione o Time </label>
                <select class="team-form" v-model="selected">
                    <option v-for="item in items" :value="item.val" :key="item.id">
                    {{ item.val }}
                    </option>
                </select>
            </div>
            <div class="field">
                <label> Nome do produto</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="field">
                <label> Quantidade de produtos </label>
                <input type="number" name="name" id="quantidade" required>
            </div>
            <div class="field">
                <label> Descrição do produto </label>
                <input type="text" name="name" id="descricao" required>
            </div>
            <div class="field">
                <label> Preço do produto </label>
                <input type="number" min="1" step="any" id="preco"/>
            </div>
        </v-form>
        <div>
            <img src="../assets/astrodab.png" class="dab" />
        </div>
    </form>
    
  </main>

</template>

<script>

export default {
  name: 'Product', 
  data: () => ({
    selected: 'ihuuu',
      items: {
          1: {id: 1, val:'ihuuu'},
          2: {id: 2, val: 'testando2'}
      }
  })
}
</script>
<style lang="scss">
  @import "../scss/product.scss";
</style>