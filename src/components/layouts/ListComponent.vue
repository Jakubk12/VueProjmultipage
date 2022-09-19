<template>
    <div class="header-buttons-menu">
  <button v-wave="{ color: '#eca1a6', duration: 2, initialOpacity: 2, easing: 'ease-in', }" class="basic">Home</button> 
  <button v-wave="{ color: '#eca1a6', duration: 2, initialOpacity: 2, easing: 'ease-in',}" class="basic">Today</button> 
  <button v-wave="{ color: '#eca1a6', duration: 2, initialOpacity: 2, easing: 'ease-in',}" class="basic">About</button> 
  </div>
</template>
<script>

</script>




<style lang="scss" scoped>
.header-buttons-menu {
        height: 5%;
        width: 100%;
        margin: auto;
        top: 25%;
        align-content: center;
        background-color: #3a0061;
        display: flex;
        font-family: 'Courier New', Courier, monospace;

.basic {
    background: #6b5b95;
  margin-right: 165px;
  margin-left: 165px;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
  padding: 1em;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1em;
  color: white;
  cursor: pointer;
  width: 100%;



&:hover
{
    font-size: 1.15em;
}
&:active {
  background-color: #270041;
  border-color: #270041;
}
}
}
</style>