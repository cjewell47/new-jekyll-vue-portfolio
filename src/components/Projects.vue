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
  max-width: 1100px;
  flex-direction: column;
  align-items: center;
}
.projects-container {
  margin: 20px auto;
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap; 
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
      height: 45px;
      background-color: #000;
      color: #fff;
      position: absolute;
      text-align: center;
      z-index: 99;
      top: 235px;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      p {
        margin-top: 11px;
      }
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      &:hover {
        opacity: 1;
        top: 150px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 250px;
    height: 900px;
    .image-box {
      .img-portfolio {
        &[class*="img-2-"] {
          // opacity: 1;
          // clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 0% 100%);
        }
      }
    }
  }
}
</style>
