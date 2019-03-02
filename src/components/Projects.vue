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
            <placeholder></placeholder>
            <div class="about-text">
              <h1>Blend Life</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta harum eum iure ducimus tenetur voluptatum, quod voluptatem numquam minus non, qui fuga suscipit necessitatibus possimus cumque nobis temporibus fugiat?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquid enim aperiam numquam eaque cum earum ipsa consequatur laboriosam amet, nobis eum tempore, placeat reiciendis, doloremque velit et quasi iure.</p>
            </div>
          </template>
          <template v-else-if="aboutProject.ffp" slot="body">
            <placeholder></placeholder>
            <div class="about-text">
              <h1>Financial Fitness Plan</h1>
              <p>This was a project built for Experian. It is a tool designed to recommend which financial products might be best for you, based on your current financial situation and your financial goals.</p>
              <p>I built this using vue.js, on top of a page on Experian's CMS. It is styled using a slimmed down version of Experian's scss, with some styling also done within the vue components.</p>
            </div>
          </template>
          <template v-else-if="aboutProject.pp" slot="body">
            <div class="about-text">
              <h1>Paws &amp; Play</h1>
            </div>
            <placeholder></placeholder>
            <div class="about-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta harum eum iure ducimus tenetur voluptatum, quod voluptatem numquam minus non, qui fuga suscipit necessitatibus possimus cumque nobis temporibus fugiat?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquid enim aperiam numquam eaque cum earum ipsa consequatur laboriosam amet, nobis eum tempore, placeat reiciendis, doloremque velit et quasi iure.</p>
            </div>
          </template>
          <template v-else-if="aboutProject.sn" slot="body">
            <div class="about-text">
              <h1>Snake</h1>
            </div>
            <placeholder></placeholder>
            <div class="about-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta harum eum iure ducimus tenetur voluptatum, quod voluptatem numquam minus non, qui fuga suscipit necessitatibus possimus cumque nobis temporibus fugiat?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquid enim aperiam numquam eaque cum earum ipsa consequatur laboriosam amet, nobis eum tempore, placeat reiciendis, doloremque velit et quasi iure.</p>
            </div>
          </template>
          <template v-else-if="aboutProject.br" slot="body">
            <h1>Beer Rater</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta harum eum iure ducimus tenetur voluptatum, quod voluptatem numquam minus non, qui fuga suscipit necessitatibus possimus cumque nobis temporibus fugiat?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aliquid enim aperiam numquam eaque cum earum ipsa consequatur laboriosam amet, nobis eum tempore, placeat reiciendis, doloremque velit et quasi iure.</p>
          </template>
        </about-project>
      </transition>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.bl}">
        <img class="img-portfolio img-1" src="img/BlendLifeBW-min.png">
        <img class="img-portfolio img-2-1" src="img/BlendLife-min.png">
        <div class="project-link">
          <p>
            <a 
              v-if="!aboutProject.bl" 
              href="https://intense-dusk-18560.herokuapp.com/" 
              target="_blank">Visit</a> <span v-if="!aboutProject.bl">|</span>
            <span v-if="!aboutProject.bl" @click="() => openAbout('bl')">Read more</span>
            <span v-else-if="aboutProject.bl" @click="() => closeAbout()">Close</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.ffp}">
        <img class="img-portfolio img-1" src="img/ffpbw.png">
        <img class="img-portfolio img-2-1" src="img/ffp.png">
        <div class="project-link">
          <p>
            <a
              v-if="!aboutProject.ffp"
              href="https://www.experian.co.uk/consumer/financial-fitness-plan/"
              target="_blank"
            >Visit</a> <span v-if="!aboutProject.ffp">|</span>
            <span v-if="!aboutProject.ffp" @click="() => openAbout('ffp')">Read more</span>
            <span v-else-if="aboutProject.ffp" @click="() => closeAbout()">Close</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.pp}">
        <img class="img-portfolio img-1" src="img/PawsAndPlayBW-min.png">
        <img class="img-portfolio img-2-2" src="img/PawsAndPlay-min.png">
        <div class="project-link">
          <p>
            <a 
              v-if="!aboutProject.pp" 
              href="https://dogwalkingapp.herokuapp.com/" 
              target="_blank">Visit</a> <span v-if="!aboutProject.pp">|</span>
            <span v-if="!aboutProject.pp" @click="() => openAbout('pp')">Read more</span>
            <span v-else-if="aboutProject.pp" @click="() => closeAbout()">Close</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.sn}">
        <img class="img-portfolio img-1" src="img/SnakeBW-min.png">
        <img class="img-portfolio img-2-3" src="img/Snake-min.png">
        <div class="project-link">
          <p>
            <a
              v-if="!aboutProject.sn" 
              href="https://stormy-forest-65305.herokuapp.com/" 
              target="_blank">Visit</a> <span v-if="!aboutProject.sn">|</span>
            <span v-if="!aboutProject.sn" @click="() => openAbout('sn')">Read more</span>
            <span v-else-if="aboutProject.sn" @click="() => closeAbout()">Close</span>
          </p>
        </div>
      </div>
      <div class="image-box" v-bind:class="{'highlighted': aboutProject.br}">
        <img class="img-portfolio img-1" src="img/BeerRaterBW-min.png">
        <img class="img-portfolio img-2-4" src="img/BeerRater-min.png">
        <div class="project-link">
          <p>
            <a 
              v-if="!aboutProject.br"
              href="https://evening-refuge-83030.herokuapp.com/" 
              target="_blank">Visit</a> <span v-if="!aboutProject.br">|</span>
            <span v-if="!aboutProject.br" @click="() => openAbout('br')">Read more</span>
            <span v-else-if="aboutProject.br" @click="() => closeAbout()">Close</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutProject from "./AboutProject.vue";
export default {
  name: "Projects",
  components: {
    "about-project": aboutProject
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
      showAbout: false
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
    }
  }
  @media screen and (max-width: 767px) {
    width: 250px;
    height: 900px;
  }
}

.about-text {
  padding: 0 30px 40px 30px;
  height: 250px;
  box-sizing: border-box;
  h1 {
    margin-top: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
