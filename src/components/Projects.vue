<template>
  <div class="page">
    <h1>Projects</h1>
    <p class="under-h1">
      View all of my personal projects on
      <a href="https://github.com/cjewell47">Github</a>
    </p>
    <div class="projects-container">
      <transition name="fade">
        <about-project
          v-if="showAbout"
          v-bind:project="projects[showingProjectInd]"
          @close="() => closeAbout()"
        >
          <template v-if="aboutProject === 'bl'" slot="body">
            <p>This was a personal project I built, while at General Assembly. It is a fully authenticated app for submitting and sharing smoothie recipes, built with an AngularJS front end, a Ruby on Rails back end, and hosted on Heroku.</p>
            <p>The aims for this project were to:</p>
            <ul>
              <li>Connect your Rails back-end to an SQL database and interact with it</li>
              <li>Create at least two models in the SQL database, one being a user model</li>
              <li>Have user authentication where the user's details are stored in the User model in the database</li>
              <li>Create API routes with CRUD functionality using Rails that are to be consumed by the AngularJS front-end</li>
            </ul>
          </template>
          <template v-else-if="aboutProject === 'ffp'" slot="body">
            <p>This was a project built for Experian. It is a tool designed to recommend which financial products might be best for you, based on your current financial situation and your financial goals.</p>
            <p>I built this using vue.js, on top of a page on Experian's CMS. It is styled using a slimmed down version of Experian's scss, with some styling also done within the vue components.</p>
          </template>
          <template v-else-if="aboutProject === 'pp'" slot="body">
            <p>This was another personal project I built while at General Assembly. It is an application designed to match dog walkers with dog owners who need them. It is a MEAN stack application (MongoDB, Express.js, AngularJS, node.js), and was styled using Bootstrap.</p>
            <p>The aims for this project were:</p>
            <ul>
              <li>Use Mongo &amp; Express to build an API and a front-end that consumes it</li>
              <li>Create an API with CRUD functionality using at least 2 related models, one of which should be a user</li>
            </ul>
          </template>
          <template v-else-if="aboutProject === 'sn'" slot="body">
            <p>Another personal project of mine from time at General Assembly. It's a version of the classic game Snake built using jQuery.</p>
            <p>The snake is continually moving, the player directs the snake around the grid with the arrow keys. If the snake collides with the wall or with itself it dies. Food appears on grid at timed intervals, when the player directs the snake into the food the player gains 1 point and the snake grows one cell longer. There are three speeds or difficulties the player can select to play the game, fast, medium and slow.</p>
          </template>
          <template v-else-if="aboutProject === 'br'" slot="body">
            <p>This was an early project I built while at General Assembly. It is a RESTful app for users to log in, upload, rate and discuss different beers. I used an open BrewDog API to populate it to begin with.</p>
            <p>The app is authenticated and has 2 models, one representing the users and the other representing the beers, which comes with full CRUD functionality. It was built with MongoDB, Express.js, Node.js, and styled using Bootstrap CSS.</p>
          </template>
        </about-project>
      </transition>
      <div class="projects-image-container">
        <project-image
          v-for="(project, index) in repeatProjects"
          :project="project"
          :key="index + 1"
          @read-more="($event) => openAbout($event)"
        ></project-image>
      </div>
    </div>
  </div>
</template>

<script>
import aboutProject from "./project-components/AboutProject.vue";
import projectImage from "./project-components/ProjectImage.vue";
import projects from "../projects.json";

export default {
  name: "Projects",
  components: {
    "about-project": aboutProject,
    "project-image": projectImage
  },
  data() {
    return {
      aboutProject: false,
      showAbout: false,
      projects: projects
    };
  },
  methods: {
    closeAbout: function() {
      this.showAbout = false;
      this.aboutProject = false;
    },
    openAbout: function(project) {
      this.aboutProject = project;
      this.showAbout = true;
    }
  },
  computed: {
    repeatProjects: function() {
      let newProjects = [...projects],
        i = 0;
      while (i < 10) {
        newProjects.push(...projects);
        i++;
      }
      return newProjects;
    },
    showingProjectInd: function() {
      let index;
      projects.forEach((project, i) => {
        if (project.code === this.aboutProject) {
          index = i;
        }
      });
      return index;
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
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    width: 250px;
    height: 1250px;
  }
  .projects-image-container {
    width: 1400px;
    height: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    top: -260px;
    left: -260px;
    transform: rotate(315deg);
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
