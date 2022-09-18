<template>
<div>
   <!-- <post-list></post-list>  -->
<section class="c-posts">
  <article class="c-posts__item">
    <h2>A capabilities by using preprocessors</h2>
    <p></p>
    <p><a v-wave="{color: '#d64161'}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p></p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p>.</p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p></p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p></p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p></p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p></p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p>.</p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p></p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p>.</p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Article Title Here</h2>
    <p></p>
    <p><a href="#" class="c-btn">Read More</a></p>
  </article>
</section>
</div>

</template>
<style lang="scss" scoped>
.c-posts {
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  padding: 5%;

  &__item {
    flex-grow: 1;
    padding-bottom: 2em;
    
    &:first-child {
      flex-grow: 2;
    }
  }
}


/* Other Non-Flexbox Related Styles */

body {
  font-family: 'Georgia', Times, serif;
  line-height: 1.6em;
  padding: 0;
  margin: 0;
}

h1 {
  font-size: calc(130% + 1vw);
  font-weight: normal;
}

h2 {
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
}

a {
  color: #0F5257;
}
.c-btn {
  color: #000;
  display: inline-block;
  border-bottom: 4px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  letter-spacing: .1em;
  padding: .3em 0;
  position: relative;
  transition: .2s all;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #FF521B;
    height: 0%;
    transition: .2s all;
    left: 0;
    z-index: -10;
  }
  
  &:hover {
    padding-left: .75em;
    padding-right: .75em;
    color: #fff;
    border-color: #FF521B;
    
    &:before {
      height: 100%;
    }
  }
}
@media all and (min-width:600px) {
  .c-posts {
    &__item {
      flex-basis: 50%;
      padding-right: 5%;
      
      &:first-child {
        flex-basis: 100%;
      }
    }
  }
}

@media all and (min-width:1000px) {
  .c-posts {
    &__item {
      flex-basis: 33%;
      
      &:first-child {
        flex-basis: 66%;
      }
    }
  }
}

@media all and (min-width:1400px) {
  .c-posts {
    &__item {
      flex-basis: 25%;
      
      &:first-child {
        flex-basis: 50%;
      }
    }
  }
}

</style>
<script>
//import PostList from './PostList.vue'
export default {
//    name: 'MainComponent',
//    component: {
//        PostList : PostList
    }
//}
</script>