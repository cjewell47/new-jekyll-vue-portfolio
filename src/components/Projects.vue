<template>
  <div class="page">
    <h1>Projects</h1>
    <p class="under-h1">
      View all of my personal projects on
      <a
        data-text="Github"
        href="https://github.com/cjewell47"
      >Github</a>
    </p>
    <div class="projects-container">
      <transition name="fade">
        <about-project v-if="showAbout" v-bind:project="aboutProject">
          <template v-if="aboutProject.bl" slot="body">
            <div class="placeholder"></div>
            <div class="about-text">
              <h1>Blend Life</h1>
              <p class="back-link" @click="() => closeAbout()">
                <span>Back</span>
              </p>
              <br>
              <a href="https://intense-dusk-18560.herokuapp.com/" target="_blank">
                <span>See it here</span>
              </a>
              <a href="https://github.com/cjewell47/blend-life-client" target="_blank">
                <span>Visit the client side repo</span>
              </a>
              <a href="https://github.com/cjewell47/blend-life-api" target="_blank">
                <span>Visit the API repo</span>
              </a>
            </div>
            <div class="about-text">
              <p>This was a personal project I built, while at General Assembly. It is a fully authenticated app for submitting and sharing smoothie recipes, built with an AngularJS front end, a Ruby on Rails back end, and hosted on Heroku.</p>
              <p>The aims for this project were to:</p>
              <ul>
                <li>Connect your Rails back-end to an SQL database and interact with it</li>
                <li>Create at least two models in the SQL database, one being a user model</li>
                <li>Have user authentication where the user's details are stored in the User model in the database</li>
                <li>Create API routes with CRUD functionality using Rails that are to be consumed by the AngularJS front-end</li>
              </ul>
            </div>
          </template>
          <template v-else-if="aboutProject.ffp" slot="body">
            <div class="placeholder"></div>
            <div class="about-text">
              <h1>Financial Fitness Plan</h1>
              <p class="back-link" @click="() => closeAbout()">
                <span>Back</span>
              </p>
              <br>
              <a href="https://www.experian.co.uk/consumer/financial-fitness-plan/" target="_blank">
                <span>See it here</span>
              </a>
              <p>This was a project built for Experian. It is a tool designed to recommend which financial products might be best for you, based on your current financial situation and your financial goals.</p>
              <p>I built this using vue.js, on top of a page on Experian's CMS. It is styled using a slimmed down version of Experian's scss, with some styling also done within the vue components.</p>
            </div>
          </template>
          <template v-else-if="aboutProject.pp" slot="body">
            <div class="about-text half">
              <h1>Paws &amp; Play</h1>
              <p class="back-link" @click="() => closeAbout()">
                <span>Back</span>
              </p>
              <br>
              <a href="https://dogwalkingapp.herokuapp.com/" target="_blank">
                <span>See it here</span>
              </a>
              <br>
              <a href="https://github.com/cjewell47/paws-and-play" target="_blank">
                <span>Visit the repo</span>
              </a>
            </div>
            <div class="about-text half mt-30">
              <p>This was another personal project I built while at General Assembly. It is an application designed to match dog walkers with dog owners who need them. It is a MEAN stack application (MongoDB, Express.js, AngularJS, node.js), and was styled using Bootstrap.</p>
              <p>The aims for this project were:</p>
              <ul>
                <li>Use Mongo &amp; Express to build an API and a front-end that consumes it</li>
                <li>Create an API with CRUD functionality using at least 2 related models, one of which should be a user</li>
              </ul>
            </div>
            <div class="placeholder"></div>
          </template>
          <template v-else-if="aboutProject.sn" slot="body">
            <div class="about-text half">
              <h1>Snake</h1>
              <p>Another personal project of mine from time at General Assembly. It's a version of the classic game Snake built using jQuery.</p>
              <p>The snake is continually moving, the player directs the snake around the grid with the arrow keys. If the snake collides with the wall or with itself it dies. Food appears on grid at timed intervals, when the player directs the snake into the food the player gains 1 point and the snake grows one cell longer. There are three speeds or difficulties the player can select to play the game, fast, medium and slow.</p>
            </div>
            <div class="about-text half mt-30">
              <p class="back-link" @click="() => closeAbout()">
                <span>Back</span>
              </p>
              <br>
              <a href="https://stormy-forest-65305.herokuapp…" target="_blank">
                <span>See it here</span>
              </a>
              <br>
              <a href="https://github.com/cjewell47/snake" target="_blank">
                <span>Visit the repo</span>
              </a>
            </div>
          </template>
          <template v-else-if="aboutProject.br" slot="body">
            <div class="about-text">
              <h1>Beer Rater</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta harum eum iure ducimus tenetur voluptatum, quod voluptatem numquam minus non, qui fuga suscipit necessitatibus possimus cumque nobis temporibus fugiat?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquid enim aperiam numquam eaque cum earum ipsa consequatur laboriosam amet, nobis eum tempore, placeat reiciendis, doloremque velit et quasi iure.</p>
            </div>
          </template>
        </about-project>
      </transition>
      <!-- <div v-for="(project, index) in projects" v-bind:id="project.code" v-bind:key="index" class="image-box">
        <img class="img-portfolio img-1" v-bind:src="project.img1">
        <img class="img-portfolio img-2-1" v-bind:src="project.img2">
        <div class="project-link">
          <p>
            <a v-bind:href="project.link" target="_blank">Visit</a> |
            <span @click="() => openAbout(project.code)">Read more</span>
          </p>
        </div>
      </div> -->
      <project-image v-for="(project, index) in projects" v-bind:project="project" v-bind:id="project.code" v-bind:key="index" @read-more="($event) => openAbout($event)"></project-image>

      <!-- <div class="image-box" v-bind:class="{'highlighted': aboutProject.bl}">
        <img class="img-portfolio img-1" src="img/BlendLifeBW-min.png">
        <img class="img-portfolio img-2-1" src="img/BlendLife-min.png">
        <div class="project-link">
          <p>
            <a href="https://intense-dusk-18560.herokuapp.com/" target="_blank">Visit</a> |
            <span @click="() => openAbout('bl')">Read more</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.ffp}">
        <img class="img-portfolio img-1" src="img/ffpbw.png">
        <img class="img-portfolio img-2-1" src="img/ffp.png">
        <div class="project-link">
          <p>
            <a
              href="https://www.experian.co.uk/consumer/financial-fitness-plan/"
              target="_blank"
            >Visit</a> |
            <span @click="() => openAbout('ffp')">Read more</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.pp}">
        <img class="img-portfolio img-1" src="img/PawsAndPlayBW-min.png">
        <img class="img-portfolio img-2-2" src="img/PawsAndPlay-min.png">
        <div class="project-link">
          <p>
            <a href="https://dogwalkingapp.herokuapp.com/" target="_blank">Visit</a> |
            <span @click="() => openAbout('pp')">Read more</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.sn}">
        <img class="img-portfolio img-1" src="img/SnakeBW-min.png">
        <img class="img-portfolio img-2-3" src="img/Snake-min.png">
        <div class="project-link">
          <p>
            <a href="https://stormy-forest-65305.herokuapp.com/" target="_blank">Visit</a> |
            <span @click="() => openAbout('sn')">Read more</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.br}">
        <img class="img-portfolio img-1" src="img/BeerRaterBW-min.png">
        <img class="img-portfolio img-2-4" src="img/BeerRater-min.png">
        <div class="project-link">
          <p>
            <a href="https://evening-refuge-83030.herokuapp.com/" target="_blank">Visit</a> |
            <span @click="() => openAbout('br')">Read more</span>
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import aboutProject from "./project-components/AboutProject.vue";
import projectImage from "./project-components/ProjectImage.vue";
import projects from "../projects.json"

export default {
  name: "Projects",
  components: {
    "about-project": aboutProject,
    "project-image": projectImage
  },
  data() {
    return {
      aboutProject: {
        bl: false,
        ffp: false,
        pp: false,
        sn: false,
        br: false
      },
      showAbout: false,
      projects: projects
    };
  },
  methods: {
    closeAbout: function() {
      (this.showAbout = false),
        Object.keys(this.aboutProject).forEach(
          v => (this.aboutProject[v] = false)
        );
    },
    openAbout: function(project) {
      Object.keys(this.aboutProject).forEach(
        v => (this.aboutProject[v] = false)
      );
      this.aboutProject[project] = true;
      this.showAbout = true;
    }
  }
};
</script>

<style lang="scss" scoped>
$gray: darkslategrey;
h1 {
  color: $gray;
  font-size: 2rem;
}
.under-h1 a {
  color: darkslategrey;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    #fff,
    #fff 50%,
    darkslategrey 50%
  );
  background-size: 200% 100%;
  background-position: 100%;
  transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);
  &:hover {
    background-position: 0%;
  }
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
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  // .image-box {
  //   position: relative;
  //   height: 250px;
  //   width: 250px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   overflow: hidden;
  //   object-fit: cover;
  //   .img-portfolio {
  //     height: 250px;
  //     position: absolute;
  //     transition: opacity 0.5s ease-in-out;
  //     -webkit-transition: opacity 0.5s ease-in-out;
  //     -moz-transition: opacity 0.5s ease-in-out;
  //     &[class*="img-2-"] {
  //       opacity: 0;
  //       &:hover ~ .project-link {
  //         opacity: 1;
  //         top: 150px;
  //       }
  //     }
  //   }
  //   &:hover > .img-portfolio[class*="img-2-"] {
  //     opacity: 1;
  //   }
  //   .project-link {
  //     width: 200px;
  //     background-color: #000;
  //     color: #fff;
  //     position: absolute;
  //     text-align: center;
  //     z-index: 2;
  //     top: 235px;
  //     opacity: 0;
  //     transition: all 0.5s ease-in-out;
  //     -webkit-transition: all 0.5s ease-in-out;
  //     -moz-transition: all 0.5s ease-in-out;
  //     p {
  //       margin-top: 12px auto;
  //       font-weight: 300;
  //       font-size: 16px;
  //     }
  //     a,
  //     span {
  //       color: #fff;
  //       text-decoration: none;
  //       letter-spacing: 1px;
  //       cursor: pointer;
  //       &:hover {
  //         text-decoration: underline;
  //       }
  //     }
  //     &:hover {
  //       opacity: 1;
  //       top: 150px;
  //     }
  //   }
  //   &.highlighted {
  //     z-index: 4;
  //     .img-portfolio[class*="img-2-"] {
  //       opacity: 1;
  //       &:hover ~ .project-link {
  //         opacity: 0;
  //         top: 235px;
  //       }
  //     }
  //   }
  // }
  @media screen and (max-width: 767px) {
    width: 250px;
    height: 1250px;
  }
}

.about-text {
  padding: 0 30px 40px 30px;
  height: 250px;
  box-sizing: border-box;
  h1 {
    padding-top: 20px;
    margin-top: 0;
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
  &.half {
    width: 250px;
    float: left;
  }
  &.mt-30 {
    margin-top: 30px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
