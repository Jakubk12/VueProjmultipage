<template>
<div id="app">
  <the-header></the-header>
  <list-component></list-component>
  <slider-component></slider-component>
<the-footer></the-footer>
</div>
</template>
<script>
    import TheHeader from './components/layouts/TheHeader.vue';
    import ListComponent from './components/layouts/ListComponent.vue';
    import SliderComponent from './components/layouts/SliderComponent.vue';
    import TheFooter from './components/layouts/TheFooter.vue';
export default {
  components: {TheHeader : TheHeader,
  ListComponent : ListComponent,
  SliderComponent : SliderComponent,
    TheFooter : TheFooter,},

 
}
</script>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
</style>