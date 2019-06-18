<template>
  <div>
    <loading-bar :loadingNum='loadingNum'
                 class="loadingBarStyle" />
  </div>
</template>

<script>
  import LoadingBar from '@/components/LoadingBar'
  export default {
    components: {
      LoadingBar
    },
    data() {
      return {
        loadingNum: 50
      }
    },
    computed: {},
    created() {
      // this.loadingStyle()
    },
    methods: {
      loadingStyle() {
        let bar = this.$refs.loadingBarRef
        console.log(bar)
      }
    }
  }
</script>
<style lang='less' scoped>
  .loadingBarStyle {
    width: 30%;
    top: 50%;
    position: absolute;
    left: 35%;
  }
</style>