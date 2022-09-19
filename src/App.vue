<template>
<div>
  <the-header></the-header>
  <list-component></list-component>
<main-component></main-component>
<the-footer></the-footer>
</div>
</template>
<script>
    import TheHeader from './components/layouts/TheHeader.vue';
    import ListComponent from './components/layouts/ListComponent.vue';
    import MainComponent from './components/MainComponent.vue';
    import TheFooter from './components/layouts/TheFooter.vue';
export default {
  components: {TheHeader : TheHeader,
    MainComponent : MainComponent,
    TheFooter : TheFooter,
    ListComponent : ListComponent},

 
}
</script>

<style lang="scss" scoped>

</style>
