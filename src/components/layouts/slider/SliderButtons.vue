<template>
<div>
    <button class="slider-control left" @click="$emit('prev')">Prev</button> 
    <button class="slider-control right" @click="$emit('next')">Next</button>
    </div>
</template>
<style lang="scss" scoped>
.slider-control {
    background-color: rgba( 9, 8, 3, 1);
    border: none;
    display: inline-block;
    position: absolute;
    height: 30px;
    width: 50px;
    top: 0;
    cursor: pointer;
    color: white;
}
.left {
left: 0;
}
.right {
    right: 0;
}
</style>

<script>
export default {
    emits: ['prev', 'next']
}
</script>

