<template>
  <p class="right-navbar">{{title}}
    <f7-link class="right-button" @click="clickHandler">{{button}}</f7-link>
  </p>
</template>
<style>

</style>
<script>
export default {
  props: ["title", "button"],
  methods: {
    clickHandler() {
      this.$emit('rightNavBarClick')
    }
  }
};
</script>


