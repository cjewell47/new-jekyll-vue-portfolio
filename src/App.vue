<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/Header.vue";
export default {
  components: {
    "app-header": header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "futura", sans-serif;
  font-style: italic;
  font-weight: 300;
  background: #f7797d;
  background: -webkit-linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  background: linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  background-size: 300% 300%;
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>