<template>
    <Header/>
    <router-view/>
    <Footer/>
  </template>
  
  <script lang="ts">
  

  
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";
  
  
  export default {
  
  
    components: {
      Header,
      Footer,
    },
  
  

    
  }
  </script>