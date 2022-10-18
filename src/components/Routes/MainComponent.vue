<template>
<div>
   <!-- <post-list></post-list>  -->
<!--<section class="c-posts">
  <article class="c-posts__item"> -->
    <infos-resource v-for="element in storedElements" 
    :key="element.id" 
    :title="element.title" 
    :description="element.description"></infos-resource>
  <!--  <h2>A capabilities by using preprocessors</h2>
    <p></p>
    <p> <a v-wave="{color: '#d64161', duration: 2}" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Differences between using bootstrap and Tailwind</h2>
    <p></p>
    <p><a v-wave="{color: '#d64161', duration: 2}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Let's know about modern Javascript ES6</h2>
    <p>.</p>
    <p><a v-wave="{color: '#d64161' , duration: 2}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Profits after relase of HTML5 </h2>
    <p></p>
    <p><a v-wave="{color: '#d64161', duration: 2}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Using VueJS...</h2>
    <p>...and how it improve making a modern web applications and webpages</p>
    <p><a v-wave="{color: '#d64161', duration: 2,}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Responsive Web design in CSS</h2>
    <p>How it works, for adjust website to your screen's size and device</p>
    <p><a v-wave="{color: '#d64161', duration: 2}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Sending HTTP requests</h2>
    <p></p>
    <p><a v-wave="{color: '#d64161', duration: 2}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Javascript and Typescript. </h2>
    <p>When to use?</p>
    <p><a v-wave="{color: '#d64161', duration: 2}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>SEO,</h2>
    <p>Meaning of technical SEO in modern web development</p>
    <p><a v-wave="{color: '#d64161', duration: 2, easing: 'ease-in'}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>Differences between Vue, React and Angular</h2>
    <p>Compare 3 most popular modern frameworks</p>
    <p><a v-wave="{color: '#d64161', duration: 2, easing: 'ease-in'}" href="#" class="c-btn">Read More</a></p>
  </article>
  <article class="c-posts__item">
    <h2>More content about frontend</h2>
    <p></p>
    <p><a v-wave="{color: '#d64161', duration: 2, easing: 'ease-in', dissolveDuration: 1
}" href="#" class="c-btn">Read More</a></p> 
  </article> 
</section> -->
</div>

</template>


<script>
import InfosResource from './information-resources/InfosResource.vue';
//import PostList from './PostList.vue'
export default {
//    name: 'MainComponent',
    components: {
          InfosResource : InfosResource,
    },
//        PostList : PostList
data() {
  return {
    storedElements: [
      {
        id: 'preprocessor-sass',
        title: 'Sass Preprocessor',
        description: 'Sass posibilities',
        link: 'https://techaffinity.com/blog/what-is-sass-css-preprocessor/'
      },
      {
        id: 'tailwind-bootstrap',
        title: 'Tailwind and bootstrap',
        description: 'Tailwind and bootstrap differences',
        link: 'https://www.geeksforgeeks.org/tailwind-css-vs-bootstrap/'
      },
      {
        id: 'Javascript',
        title: 'What is must knowledge about Javascript ES6',
        description: 'What is must know in JS ES6',
        link: 'https://www.w3schools.com/js/js_es6.asp',
      },
      {
        id: 'HTML-5',
        title: 'Profits after relase of HTML5',
        description: 'Look, what need to know',
        link: 'https://www.geeksforgeeks.org/top-10-new-features-of-html5/'
      },
       {
        id: 'VueJs',
        title: 'Using VueJS...',
        description: '...and how it improve making a modern web applications and webpages',
        link: 'https://www.kofi-group.com/7-reasons-why-vuejs-is-so-popular/'
      },
       {
        id: 'HTTP',
        title: 'Sending HTTP requests',
        description: 'How to make your website more reactive',
        link: 'https://sematext.com/glossary/http-requests/',
      },
       {
        id:'JS-TS',
        title: 'Javascript and Typescript.',
        description: 'When to use it?',
        link: 'https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/',
      },
       {
        id: 'RWD',
        title: 'Responsive Web design in CSS',
        description: 'How it works, for adjust website to your screen s size and device',
        link: 'https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/',
      },
       {
        id: 'Frameworks',
        title: 'Differences between Vue, React and Angular',
        description: 'Compare 3 most popular modern frameworks',
        link: 'https://athemes.com/guides/angular-vs-react-vs-vue/',
      },
       {
        id: 'SEO',
        title:'SEO,',
        description: 'Meaning of technical SEO in modern web development',
        link: 'https://medium.com/@coderacademy/15-seo-tips-every-front-end-developer-should-know-in-2016-d579b7cefb01',
      },
       {
        id: 'More',
        title:'More content about frontend',
        description: '',
        link: 'https://skillcrush.com/blog/skills-to-become-a-front-end-developer/',
      },
      
    ]
  }
}

}
</script>