<template>
  <div :class="['project-' + project.code, { 'highlighted': highlighted }]">
    <img :src="project.img1">
    <img :src="project.img2">
    <div>
      <p>
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
[class^="project-"] {
  position: relative;
  height: 170px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;
  img {
    height: 170px;
    position: absolute;
    transition: opacity 0.5s ease-in-out;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    &:nth-of-type(2) {
      opacity: 0;
      &:hover ~ div, & ~ div:hover {
        opacity: 1;
        top: 70px;
        left: 20px;
      }
    }
  }
  &:hover > img:nth-of-type(2) {
    opacity: 1;
  }
  & > div {
    width: 120px;
    background-color: #000;
    color: #fff;
    position: absolute;
    text-align: center;
    z-index: 2;
    top: 120px;
    opacity: 0;
    transform: rotate(45deg);
    left: -27px;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    p {
      margin: 12px auto;
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
  }
  &.highlighted {
    z-index: 4;
    img:nth-of-type(2) {
      opacity: 1;
      &:hover ~ div {
        opacity: 0;
        top: 190px;
      }
    }
  }
}
</style>
