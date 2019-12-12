<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>
