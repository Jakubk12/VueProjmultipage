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
  components: { SlideLast },
    name: "SliderComponent",
    data : () => ({
        slides: [ "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/12/29/17/39/code-583073_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",]
    })
}
</script>
