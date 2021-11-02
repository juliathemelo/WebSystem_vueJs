<template>
  <div id="app"> 
  <header>
    <nav>
      <div>
        <router-link to="/"> <a id="logo"> Logo </a> </router-link>
      </div>
      <ul>
        <li>test</li>
        <li>
          <button id="helpbutton"> test </button>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    routes: [
      {name: 'Home', path: { path: '/home'}},
      {name: 'Start', path: {path: '/'}},
      {name: 'Product', path: {path: '/product'}}
    ]
  })
}
</script>

<style lang="scss">
  @import "./scss/navbar.scss";
</style>
