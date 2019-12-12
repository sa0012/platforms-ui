<template>
<div class="confirm">
  {{ message }}
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'this is a confirm component'
    }
  }
}
</script>

<style lang="scss">
.confirm {
  color: red;
}
</style>
