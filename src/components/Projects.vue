<template>
  <div class="page">
    <h1>Projects</h1>
    <div class="projects-container">
      <div class="image-box">
        <img class="img-portfolio img-1" src="img/BlendLifeBW-min.png">
        <img class="img-portfolio img-2-1" src="img/BlendLife-min.png">
        <div class="project-link">
          <p>
            <a href="https://intense-dusk-18560.herokuapp.com/" target="_blank">Visit</a> |
            <a
              href="https://github.com/cjewell47/blend-life-client/blob/master/README.md"
              target="_blank"
            >Read more</a>
          </p>
        </div>
      </div>
      <div class="image-box">
        <img class="img-portfolio img-1" src="img/PawsAndPlayBW-min.png">
        <img class="img-portfolio img-2-2" src="img/PawsAndPlay-min.png">
        <div class="project-link">
          <p>
            <a href="https://dogwalkingapp.herokuapp.com/" target="_blank">Visit</a> |
            <a
              href="https://github.com/cjewell47/paws-and-play/blob/master/README.md"
              target="_blank"
            >Read more</a>
          </p>
        </div>
      </div>
      <div class="image-box">
        <img class="img-portfolio img-1" src="img/SnakeBW-min.png">
        <img class="img-portfolio img-2-3" src="img/Snake-min.png">
        <div class="project-link">
          <p>
            <a href="https://stormy-forest-65305.herokuapp.com/" target="_blank">Visit</a> |
            <a
              href="https://github.com/cjewell47/snake/blob/master/README.md"
              class="btn btn-dark read"
              target="_blank"
            >Read more</a>
          </p>
        </div>
      </div>
      <div class="image-box">
        <img class="img-portfolio img-1" src="img/BeerRaterBW-min.png">
        <img class="img-portfolio img-2-4" src="img/BeerRater-min.png">
        <div class="project-link">
          <p>
            <a href="https://evening-refuge-83030.herokuapp.com/" target="_blank">Visit</a> |
            <a
              href="https://github.com/cjewell47/beer-rater/blob/master/README.md"
              class="btn btn-dark read"
              target="_blank"
            >Read more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style lang="scss" scoped>
$gray: darkslategrey;
h1 {
  color: $gray;
  font-size: 2rem;
}
.page {
  display: flex;
  justify-content: center;
}
</style>
