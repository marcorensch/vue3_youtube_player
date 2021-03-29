<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li>
          <router-link :to="{name:'Home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name:'Video', params:{videoId:'Ouu-nwdKPiQ'}}">Rimini</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
