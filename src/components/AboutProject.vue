<template>
  <div id="about-project">
    <h1>This projects.... {{  }}</h1>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  name: "AboutProject"
};
</script>

<style lang="scss" scoped>
$gray: darkslategrey;   

#about-project {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: #fff;
}

</style>
