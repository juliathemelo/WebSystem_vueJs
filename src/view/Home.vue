<template>
  <main>
    <div class="cards">
      <h1 class="title">Cadastrar</h1>
      <img src="../assets/eat well.png" class="icon" />
      <p class="legend"> cadastro de novos produtos</p>
      <button class="button cadastro"> cadastrar </button>
    </div>
    <div class="cards">
      <h1 class="title">Consultar</h1>
      <img src="../assets/eat well.png" class="icon" />
      <p class="legend"> consultar produtos no estoque </p>
      <button class="button consulta"> consultar </button>
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
}
</script>
<style lang="scss">
  @import "../scss/home.scss";
</style>
