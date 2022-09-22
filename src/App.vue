<template>
<div>
  <the-header></the-header>
  <list-component></list-component>
  <slider-component></slider-component>
<main-component></main-component>
<the-footer></the-footer>
</div>
</template>
<script>
    import TheHeader from './components/layouts/TheHeader.vue';
    import ListComponent from './components/layouts/ListComponent.vue';
    import SliderComponent from './components/layouts/SliderComponent.vue';
    import MainComponent from './components/MainComponent.vue';
    import TheFooter from './components/layouts/TheFooter.vue';
export default {
  components: {TheHeader : TheHeader,
  ListComponent : ListComponent,
  SliderComponent : SliderComponent,
    MainComponent : MainComponent,
    TheFooter : TheFooter,},

 
}
</script>

<style lang="scss" scoped>

</style>
