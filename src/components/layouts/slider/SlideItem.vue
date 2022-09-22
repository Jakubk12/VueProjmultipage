<template>
<transition name="slider-in">
<div class="slider-item" v-show="currentSlide === index">

   <img :src="slide" />
   </div>
</transition>
</template>

<script>
export default {
props: ["slide", "current-slide", "index"]
}
</script>

<style lang="scss" scoped>
.slider-item {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin-left: 35px;
margin-top: 35px;
display: inline-block;
align-content: center;

}
.slider-in-enter-active
.slider-in-leave-active {
    transition: all in 1s ease-in-out;

}
.slider-in-enter-from {
transform: translateX(-100%)
}
.slider-in-leve-to {
transform: translateX(100%)
}
</style>