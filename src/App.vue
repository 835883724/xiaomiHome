<template>
  <router-link to="/home"></router-link>
  <!-- <ScaleBox :width="1920" :height="1080" bgc="transparent" :delay="100">
    <router-view />
  </ScaleBox> -->
  <div id="app" ref="zoom">
    <router-view />
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue'
import ScaleBox from 'vue3-scale-box'
const zoom = ref(null)
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100% !important;
  height: 100% !important;

  @media only screen and (max-width: 500px) {
    background-color: green;
  }
  @media only screen and (min-width: 501px) and (max-width: 1000px) {
    background-color: red;
  }
  @media only screen and (min-width: 1001px) and (max-width: 5000px) {
    background-color: blue;
  }
}
</style>
