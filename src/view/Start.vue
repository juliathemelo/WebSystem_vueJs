<template>
  <main>
    <div class="text_screen">
        <div>
            <h1 class="title_start">Welcome to system custom</h1>
            <p>Make your service style and change your <b>world</b></p>
            <router-link to="/home"><button class="button_start">Home</button></router-link>
        </div>
    </div>
    <div class="img_git">
         <img src="../assets/astro.png" class="astro" />
         <p class="warning"> New Experience! </p>
    </div>
    <footer>
        <p><i>Logo ©</i>  - 0.1v</p>
    </footer>
  </main>
</template>

<script>

export default {
  name: 'Start',
  data: () => ({
    routes: [
      {name: 'Home', path: { path: '/home'}}
    ]
  })
}
</script>
<style lang="scss">
  @import "../scss/start.scss";
</style>