<template>
  <p class="intro">
    On souhaite tous <strong>améliorer nos habitudes</strong>, consommer de façon <strong>éthique</strong>, remplacer nos <strong>produits polluants</strong>, réduire nos <strong>déchets</strong>... Mais il est parfois difficile d'y voir clair. Voici une <strong>liste participative</strong> des alternatives proposées par d'autres personnes comme vous...! <a class="propose" href="https://bit.ly/AlterEcolo-proposer">Proposer une alternative</a>
  </p>
</template>

<script>
  export default {
    name: 'Intro',
    components: {
    },
  }
</script>

<style scoped lang="scss">
  @import '../assets/vars';

  .intro {
    opacity: .75;
    margin: 2vh 0 5vh;

    @media(min-width: $break) {
      width: 20em;
      margin: 1em 0 1em -22em;
      float: left;
      clear: left;
    }
  }

  .propose {
    color: $green;
    text-decoration: none;
    border-bottom: 2px solid;
    font-weight: bold;
  }
</style>
