<template>
  <div class="image-box">
    <img class="img-portfolio img-1" v-bind:src="project.img1">
    <img class="img-portfolio img-2-1" v-bind:src="project.img2">
    <div class="project-link">
      <p>
        <a v-bind:href="project.link" target="_blank">Visit</a> |
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
    .img-portfolio {
      height: 250px;
      position: absolute;
      transition: opacity 0.5s ease-in-out;
      -webkit-transition: opacity 0.5s ease-in-out;
      -moz-transition: opacity 0.5s ease-in-out;
      &[class*="img-2-"] {
        opacity: 0;
        &:hover ~ .project-link {
          opacity: 1;
          top: 150px;
        }
      }
    }
    &:hover > .img-portfolio[class*="img-2-"] {
      opacity: 1;
    }
    .project-link {
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
      .img-portfolio[class*="img-2-"] {
        opacity: 1;
        &:hover ~ .project-link {
          opacity: 0;
          top: 235px;
        }
      }
    }
  }
</style>
