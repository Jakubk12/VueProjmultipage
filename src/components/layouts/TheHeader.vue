<template>
    <header class="c-header">
  <h1>Responsive Flexbox Article Listing</h1>
  <p>Flexbox is an amazingly powerful layout tool. In this example I have created a responsive grid of articles that increased the amount of visible articles on the page at larger resolutions.</p>
</header>
</template>

<style lang="scss" scoped>
.c-header
 {
  background: #EDD382;
  text-align: center;
  padding: 2em;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.4em;
  font-weight: 300;
  line-height: 1.6em;
  
  h1, h2, p {
    max-width: 40em;
    margin: 0 auto;
    
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
  
  h1 {
    text-transform: uppercase;
    font-weight: 900;
  }
  
  a {
    color: #000;
  }
}


</style>