<template>
  <div id="app" flex="dir:top box:first">
    <!-- <main-header></main-header> -->
    <!-- <demo-alert></demo-alert> -->
    <div class="main-cnt" flex>
      <side-nav class="nav" flex-box="0"></side-nav>
      <div class="page-container" flex-box="1">
        <!-- <b-scrollbar style="height:100%;" ref="componentScrollBar"> -->
          <router-view></router-view>
          <!-- <main-footer></main-footer>
          <b-back-top></b-back-top> -->
        <!-- </b-scrollbar> -->
      </div>
    </div>
  </div>
</template>

<script>
// imort DemoAlert from '../src/alert/demo/inex.vue'
export default {
  name: 'app',
  data () {
    return {
      showBackToTop: false,
      componentScrollBar: null
    }
  },
  // watch: {
  //   '$route.path' () {
  //     // 触发伪滚动条更新
  //     this.componentScrollBox.scrollTop = 0
  //     this.$nextTick(() => {
  //       this.componentScrollBar.update()
  //       if (this.$route.meta.desc) {
  //         this.$util.title(this.$route.meta.desc + ' - [bin-ui]')
  //       }
  //     })
  //   }
  // },
  mounted () {
    // this.componentScrollBar = this.$refs.componentScrollBar
    // this.componentScrollBox = this.componentScrollBar.$el.querySelector('.bin-scrollbar__wrap')
  }
}
</script>

<style lang="scss">
  #app {
    font-size: 12px;
    width: 100%;
    height: 100%;
  }
  .main-cnt {
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, .5);
    display: flex;
    .page-container {
      box-sizing: border-box;
      overflow: hidden;
      height: 100%;
      flex: 1;
      .bin-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
  }
</style>
