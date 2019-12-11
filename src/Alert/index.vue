<template>
<div class="alert">
  {{ message }}
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'this is a alert component'
    }
  }
}
</script>

<style lang="scss">
.alert {
  color: red;
}
</style>