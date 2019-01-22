<template>
  <transition name="fade" mode="out-in">
    <div class="full-menu">
      <div>
        <router-link to="/about-me" exact>
          <p @click="$emit('close-menu')">About</p>
        </router-link>
      </div>
      <div>
        <router-link to="/skills" exact>
          <p @click="$emit('close-menu')">Skills</p>
        </router-link>
      </div>
      <div>
        <router-link to="/projects" exact>
          <p @click="$emit('close-menu')">Projects</p>
        </router-link>
      </div>
      <div>
        <router-link to="/contact" exact>
          <p @click="$emit('close-menu')">Contact</p>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MobMenu"
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.6s;
}
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.full-menu {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 100%;
  margin-top: 118px;
  & > div {
    padding-left: 18px;
    a {
      color: #000;
      text-decoration: none;
      font-size: 28px;
    }
  }
}
</style>
