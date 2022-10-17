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
        height: 5%;
        width: 100%;
        margin: auto;
        top: 25%;
        background-color: #3a0061;

        display: inline-flex;
        font-family: 'Courier New', Courier, monospace;
.basic {
    
    display: inline-block;
    background: #6b5b95;
  margin-left: 265px;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
  padding: 1em;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1em;
  color: white;
  cursor: pointer;
  width: 30%;

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

@media all and (max-width:1000px) {
  .header-buttons-menu {
    display: block;
        padding-left: 25px;
        padding-right: 35px;
    .basic {
        width: 30%;
        margin-left: 5px;
        margin-right: 5px;
    } 
}
  }
@media all and (min-width:1000px) and (max-width: 1100px) {
  .header-buttons-menu {
        width: 100%;
        display: flex;
        margin-right: auto;
        margin-left: auto;
        padding-right: 25px;
        padding-left: 5px;
}

}
@media all and (max-width:1500px)  {
  .basic {
    margin-left: 265px;
  }
}
</style>