<template>
  <span class="score">
    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
    <strong>{{newScore}}</strong>
  </span>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        newScore: this.$store.state.score
      }
    },
    computed: mapState({
      score: state => state.score,
    }),
    watch: {
      score(newValue, oldValue) {
        // Animation not supported
        if ('animate' in this.$el === false) {
          this.newScore = newValue
          return false
        }
        // Animate to newValue
        const order = newValue < oldValue ? -1 : 1
        this.$el.querySelector('strong').animate([{
          transform: 'translateY(0%)',
          opacity: 1
        }, {
          transform: `translateY(calc(${order * -1} * 50%))`,
          opacity: 0
        }], {
          duration: 100,
          easing: 'ease-in'
        }).onfinish = () => {
          this.newScore = newValue
          this.$el.querySelector('strong').animate([{
            transform: `translateY(calc(${order} * 50%))`,
            opacity: 0
          }, {
            transform: 'translateY(0%)',
            opacity: 1
          }], {
            duration: 200,
            easing: 'cubic-bezier(0.175, 0.885, 0.305, 1.605)'
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/vars';

  .score {
    position: sticky;
    float: right;
    top: 2em; right: 2em;
    margin-top: 1em;
    margin-right: 1em;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: .5em 1em;
    color: white;
    background-color: $green;
    font-weight: 900;
    border-radius: 3px;
    box-shadow: 0 3px 13px rgba(black,.15);

    > svg {
      margin-right: .5em;
      width: 1em; height: 1em;
    }

    @media (max-width: 520px) {
      top: 1em; right: 0;
      margin-top: 0;
      margin-right: 0;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
