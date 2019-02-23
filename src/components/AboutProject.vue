<template>
  <div id="about-project" v-bind:class="{'second-row': project.pp || project.sn, 'third-row': project.br }">
    <button @click="$emit('close')" class="close-icon"></button>
    <slot name="body"></slot>    
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
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 3;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.second-row {
      margin-top: 250px;
  }
  &.third-row {
      margin-top: 500px;
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
