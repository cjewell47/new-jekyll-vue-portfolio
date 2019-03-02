<template>
  <div id="about-project" v-bind:class="{'left-col': project.bl || project.pp || project.br, 'right-col': project.ffp || project.sn }">
    <slot name="body">
    </slot>    
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
  .placeholder  {
    height: 250px;
    width: 250px;
    position: relative;
  }
  &.right-col {
    .placeholder {
      float: right;
      margin-left: 15px;
    }
  }
  &.left-col {
    .placeholder {
      float: left;
      margin-right: 15px;
    }
  }
}

.close-icon {
  border: none;
  position: relative;
  height: 44px;
  width: 44px;
  align-self: flex-end;
  cursor: pointer;
  background: transparent;
  transition: transform 0.25s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 40px;
    height: 6px;
    background-color: #000;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
}
</style>
