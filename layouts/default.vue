<template>
  <div id="app">
    <Score/>
    <Head/>
    <Intro v-show="$store.state.route.name === 'category'"/>
    <nuxt/>
    <no-ssr>
    <Foot/>
    </no-ssr>
  </div>
</template>

<script>
  import Head from '~/components/Head.vue'
  import Intro from '~/components/Intro.vue'
  import Foot from '~/components/Foot.vue'
  import Score from '~/components/Score.vue'

  export default {
    components: {
      Head, Intro, Foot, Score
    },
  }
</script>

<style lang="scss">
  @import "normalize.css/normalize.css";
  @import '../assets/vars';

  $rfs-minimum-font-size: 16;
  $rfs-breakpoint: 900;
  @import "rfs/scss/_rfs.scss";

  * {
    line-height: 1.418;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: $text;
    background-color: $background;
  }

  body {
    border-top: 2px solid $green;
  }

  #app {
    padding: 0 1em;
    max-width: 45rem;
    margin: auto;
    position: relative;
    @include rfs(18);

    @media(min-width: $break) {
      position: relative;
      left: 10em;
    }

    @media (max-width: 520px) {
      font-size: 16px !important;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    line-height: 1.2;
  }

  a {
    color: $blue;

    &:hover {
      color: mix(white, $blue, 40);
    }
  }

  [data-name="mojs-shape"] {
    z-index: 999;
    pointer-events: none;
  }

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
