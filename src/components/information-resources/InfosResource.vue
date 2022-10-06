<template>
<body>
      <section class="c-posts">
  <article class="c-posts__item">
    <h2>{{title}}</h2>
    <p>{{description}}</p>
    <p> <a :href="link" v-wave="{color: '#d64161', duration: 2}" class="c-btn">{{link}}Read More</a></p>
            <header>
                </header>
                </article>
                </section>
                </body>
</template>
<script>
export default {
    props: ['title', 'description', 'link']
}
</script>

<style lang="scss" scoped>

.c-posts {
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  padding: 5%;
  justify-content: space-between;

  &__item {
    flex-grow: 1;
    padding-bottom: 2em;
    
    &:first-child {
      flex-grow: 2;
    }
  }
}
body {
  font-family: 'Georgia', Times, serif;
  line-height: 1.6em;
  padding: 0;
  margin: 0;
}

h2 {
  font-size: calc(130% + 1vw);
  font-weight: normal;
}

p {
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
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
    cursor: pointer;
    
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
      display: inline-block;
      
      &:first-child {
        flex-basis: 50%;
      }
    }
  }
}
</style>