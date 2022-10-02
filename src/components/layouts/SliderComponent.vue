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
      components: { SlideLast },
    data : () => ({
        slides: [ "https://picsum.photos/id/237/550/200",
        "https://picsum.photos/id/238/550/200",
        "https://picsum.photos/id/239/550/200",
        ]
    })
}
</script>
