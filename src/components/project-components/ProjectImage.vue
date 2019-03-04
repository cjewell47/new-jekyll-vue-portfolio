<template>
  <div class="image-box" :class="{ 'highlighted': highlighted }">
    <img :src="project.img1">
    <img :src="project.img2">
    <div>
      <p>
        <a :href="project.link" target="_blank">Visit</a> |
        <span @click="$emit('read-more', project.code)">Read more</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectImage",
  props: {
    project: {
      type: Object,
      required: true
    },
    highlighted: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.image-box {
  position: relative;
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;
  img {
    height: 250px;
    position: absolute;
    transition: opacity 0.5s ease-in-out;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    &:nth-of-type(2) {
      opacity: 0;
      &:hover ~ div {
        opacity: 1;
        top: 150px;
      }
    }
  }
  &:hover > img:nth-of-type(2) {
    opacity: 1;
  }
  & > div {
    width: 200px;
    background-color: #000;
    color: #fff;
    position: absolute;
    text-align: center;
    z-index: 2;
    top: 235px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    p {
      margin-top: 12px auto;
      font-weight: 300;
      font-size: 16px;
    }
    a,
    span {
      color: #fff;
      text-decoration: none;
      letter-spacing: 1px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    &:hover {
      opacity: 1;
      top: 150px;
    }
  }
  &.highlighted {
    z-index: 4;
    img:nth-of-type(2) {
      opacity: 1;
      &:hover ~ div {
        opacity: 0;
        top: 235px;
      }
    }
  }
}
</style>
