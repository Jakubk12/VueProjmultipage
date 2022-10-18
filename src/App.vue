<template>
<div>
  </div>
  <the-header></the-header>
  <list-component></list-component>
  <slider-component></slider-component>
<the-footer></the-footer>
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

