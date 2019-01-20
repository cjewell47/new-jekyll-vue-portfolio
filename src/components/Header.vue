<template>
  <div class="items-container">
    <router-link to="/" exact><h1 data-section="Charles Jewell">Charles Jewell</h1></router-link>
    <div class="header-items-container">
      <li>
        <router-link to="/about" exact>About</router-link>
      </li>
      <li>
        <router-link to="/skills" exact>Skills</router-link>
      </li>
      <li>
        <router-link to="/projects" exact>Projects</router-link>
      </li>
      <li>
        <router-link to="/contact" exact>Contact</router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
$gray: darkslategrey;
h1 {
  color: $gray;
  font-size: 2rem;
}
</style>
