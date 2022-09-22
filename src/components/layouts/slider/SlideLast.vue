<template>
<div class="slide-1">
    <div class="slide-inner">
            <slide-item v-for="(slide, index) in slides"
            :slide="slide"
            :key="`item-${index}`" 
            :current-slide="currentSlide"
            :index="index">
            </slide-item>
            <slider-buttons></slider-buttons>
            </div>
            </div>
</template>

<script>
import SlideItem from './SlideItem.vue';
import SliderButtons from './SliderButtons.vue';
export default {
    props: ['slides', ],
    components: { SlideItem : SlideItem,
    SliderButtons : SliderButtons},
    data : () => ({
        currentSlide: 0,
        methods: {
            setCurrentSlide(index) {
                this.currentSlide = index;

            }
        },
        mounted() {
            this.slideInterval = setInterval(() => {
            const index = this.currentSlide < this.slides.length ? this.currentSlide + 1 : 0; 
            this.currentSlide = index;
            },
            3000)
        },
        beforeUnmount() {
            clearInterval(this.slideInterval)
        },
    })
}
</script>
<style lang="scss" scoped>

.slide {
    display: flex;
    justify-content: center;
} .slide-inner {
    margin: auto;
    position: relative;
    width: 650px;
    height: 250px;
    overflow: hidden; 

}
</style>
