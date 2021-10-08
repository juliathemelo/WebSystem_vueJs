<template>
  <div id="app"> 
  <header>
    <nav>
      <div>
        <a href="#" id="logo"> Logo </a>
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
      {name: 'Start', path: {path: '/'}}
    ]
  })
}
</script>

<style lang="scss">
  @import "./scss/navbar.scss";
</style>
