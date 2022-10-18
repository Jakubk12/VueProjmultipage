<template>
    <div class="slide">
        <div class="slide-inner">
            <slide-last :slides="slides"></slide-last>
            </div>
    </div>
</template>

<script>
import SlideLast from './slider/SlideLast.vue';
export default {
    name: "SliderComponent",
      components: { SlideLast : SlideLast },
    data() {
        return {
        slides: [ "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        "https://picsum.photos/id/239/550/200",
        
        ]
    }
    }
}
</script>
<style lang="scss" scoped>
.slide {
    margin-bottom: 200px;
}
@media screen {
    
}
</style>