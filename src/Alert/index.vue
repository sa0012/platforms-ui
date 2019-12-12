<template>
  <transition name="pl-alert-fade">
    {{ message }}
  </transition>
</template>

<script>
// const STATUS_CLASS_MAP = {
//   'success': '',
//   'warning': '',
//   'error': ''
// }
export default {
  name: 'PlAlert',

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
