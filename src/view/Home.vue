<template>
  <main class="home">
    <div class="cards">
      <h1 class="title">Cadastrar</h1>
      <img src="../assets/eat well.png" class="icon" />
      <p class="legend"> cadastro de novos produtos</p>
      <router-link to="/product"><button class="button cadastro">Cadastrar</button></router-link>
    </div>
    <div class="cards">
      <h1 class="title">Consultar</h1>
      <img src="../assets/eat well.png" class="icon" />
      <p class="legend"> consultar produtos no estoque </p>
      <router-link to="/view"><button class="button consulta"> consultar </button></router-link>
    </div>
    <div class="cards">
      <h1 class="title">Deletar</h1>
      <img src="../assets/eat well.png" class="icon" />
      <p class="legend"> deletar produtos no estoque </p>
      <button class="button delete"> deletar </button>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    routes: [
      {name: 'Product', path: { path: '/product'}},
      {name: 'View', path: { path: '/view'}},
    ]
  })
}
</script>
<style lang="scss">
  @import "../scss/home.scss";
</style>
