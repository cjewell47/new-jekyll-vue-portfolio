<template>
  <transition name="fade" mode="out-in">
    <div class="full-menu"></div>
  </transition>
</template>

<script>
export default {
  name: "MobMenu"
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.full-menu {
  margin-top: -2px;
  position: relative;
  height: 100vh;
  z-index: 10;
  background: #fff;
}
</style>
