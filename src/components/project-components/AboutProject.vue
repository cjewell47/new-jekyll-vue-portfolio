<template>
  <div id="about-project">
    <img :src="project.img2" :alt="'screenshot of ' + project.name ">
    <div class="about-text">
      <h1>{{ project.name }}</h1>
      <p class="back-link" @click="$emit('close')">
        <span>Back</span>
      </p>
      <br>
      <a :href="project.link" target="_blank">
        <span>See it here</span>
      </a>
      <br v-if="project.link2">
      <a v-if="project.link2" :href="project.link2.link" target="_blank">
        <span>{{ project.link2.name }}</span>
      </a>
      <br v-if="project.link3">
      <a v-if="project.link3" :href="project.link3.link" target="_blank">
        <span>{{ project.link3.name }}</span>
      </a>
      <br>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutProject",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$gray: darkslategrey;

#about-project {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: #fff;
  display: block;
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    float: right;
    margin: 0 0 10px 10px;
  }
}

.about-text {
  padding: 0 30px 40px 30px;
  box-sizing: border-box;
  h1 {
    padding-top: 20px;
    margin-top: 0;
    color: $gray;
  }
  a,
  .back-link {
    text-decoration: none;
    position: relative;
    overflow: hidden;
    margin: 0;
    display: inline-flex;
    padding: 8px;
    cursor: pointer;
    span {
      color: $gray;
      z-index: 1;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 300%;
      height: 100%;
      background-image: linear-gradient(
        90deg,
        lighten($gray, 5%) 33.33%,
        transparent 66.66%
      );
      -webkit-transform: translateX(-66.66%);
      transform: translateX(-66.66%);
      z-index: 0;
      transition: all 0.75s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:hover {
      span {
        color: #000;
      }
      &::before {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    }
  }
}
</style>
