<template>
    <div class="header-buttons-menu">
<router-link  :to="{ path: '/components/MainComponent'}"><button class="basic" v-wave="{ color: '#eca1a6', duration: 2, initialOpacity: 2, easing: 'ease-in',}">Home</button></router-link>
<router-link  :to="{ path: '/components/Routes/SurveyCode'}"><button class="basic" v-wave="{ color: '#eca1a6', duration: 2, initialOpacity: 2, easing: 'ease-in',}">Survey</button></router-link>           
<router-link  :to="{ path: '/components/Routes/Today'}"><button class="basic" v-wave="{ color: '#eca1a6', duration: 2, initialOpacity: 2, easing: 'ease-in',}">Today</button></router-link>           
  </div>
  <router-view></router-view>
</template>
<script>

</script>

<style lang="scss" scoped>

.header-buttons-menu {  
        float: center;
        margin-right: 0;
        height: 5%;
        width: 100%;
        top: 25%;
        background-color: #3a0061;
        padding-bottom: 10px;
        padding-top: 10px;
      
        font-family: 'Courier New', Courier, monospace;
.basic {
    
  background: #6b5b95;
  margin-left: 125px;
  text-align: center;
  padding: 1em;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1em;
  color: white;
  cursor: pointer;
  width: 20%;

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

@media all and (max-width:900px) {
  .header-buttons-menu {
        display: block;
        padding-left: 25px;
        padding-right: 35px;
    .basic {
        width: 30%;
        
    } 
}
  }

</style>