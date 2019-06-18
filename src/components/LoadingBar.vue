<template>
  <div>
    <div class="loading">
      <div class="pic">
        <div class="loadingBox">
          <div ref="loadingBarRef"
               :style="`width: calc(${loadingNum}% - 10px);`"></div>
        </div>
        <p ref="loadingNumRef">{{ loadingNum }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      loadingNum: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>
<style lang='less' scoped>
  .loadingBox {
    display: inline-block;
    background-color: #1a1a1a;
    height: 20px;
    padding: 5px;
    width: 100%;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 20px;
    -moz-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;
    -webkit-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;
    box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;
    div {
      position: relative;
      height: 10px;
      background-color: #fecf23;
      border-radius: 5px;
      margin: 5px;
      background-image: -webkit-linear-gradient(top, #fecf23, #fd9215);
      transition: width 0.4s ease-in-out;
    }
  }
  .loadingBox div::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 3px;
    animation: animate-shine 2s ease-out infinite;
  }
  @keyframes animate-shine {
    0% {
      width: 0%;
      background-color: #fff;
      opacity: 0;
    }
    50% {
      width: 0%;
      background-color: #fff;
      opacity: 0.8;
    }
    100% {
      width: 100%;
      background-color: #fff;
      opacity: 0;
    }
  }
  .loading {
    width: 100%;
    .pic {
      text-align: center;
    }
  }
</style>