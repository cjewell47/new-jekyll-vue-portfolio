<template>
  <div>
    <app-header></app-header>
    <transition name="router-anim" mode="out-in">
      <router-view></router-view>
    </transition>
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
  .page {
    width: inherit;
    max-width: 900px;
    margin: auto;
  }
  .router-anim-enter-active {
      animation: coming 0.8s;
      animation-delay: 0.4s;
      -webkit-animation: coming 0.8s;
      -webkit-animation-delay: 0.4s;
      opacity: 0;
    }
    .router-anim-leave-active {
      animation: going 0.8s;
      -webkit-animation: going 0.8s;
    }
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@-webkit-keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
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
</style>