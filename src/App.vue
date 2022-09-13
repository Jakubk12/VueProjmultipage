<template>
<div>
  <the-header></the-header>
<main-component></main-component>
<the-footer></the-footer>
</div>
</template>
<script>
    import TheHeader from './components/layouts/TheHeader.vue';
    import MainComponent from './components/MainComponent.vue';
    import TheFooter from './components/layouts/TheFooter.vue';
export default {
  components: {TheHeader : TheHeader,
    MainComponent : MainComponent,
    TheFooter : TheFooter},

  data()
  {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
