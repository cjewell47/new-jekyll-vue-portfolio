<template>
  <div>
    <div class="items-wrap">
      <div class="items-container">
        <router-link to="/" exact>
          <h1 data-section="Charles Jewell">Charles Jewell</h1>
        </router-link>
        <li>
          <router-link to="/about-me" exact>
            <div class="header-item">
              <p>About</p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/skills" exact>
            <div class="header-item">
              <p>Skills</p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/projects" exact>
            <div class="header-item">
              <p>Projects</p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/contact" exact>
            <div class="header-item">
              <p>Contact</p>
            </div>
          </router-link>
        </li>
      </div>
      <div class="burger-menu">
        <router-link to="/" exact>
          <h2 @click="closeMenu">Charles Jewell</h2>
        </router-link>
        <svg
          class="ham hamRotate ham4"
          viewBox="0 0 100 100"
          width="80"
          @click="openMenu"
          v-bind:class="{ active: menu }"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          ></path>
          <path class="line middle" d="m 70,50 h -40"></path>
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          ></path>
        </svg>
      </div>
    </div>
    <mob-menu v-if="menu" @close-menu="closeMenu"></mob-menu>
  </div>
</template>

<script>
import mobMenu from "./MobMenu.vue";
export default {
  name: "Home",
  components: {
    "mob-menu": mobMenu
  },
  data() {
    return {
      menu: false
    };
  },
  methods: {
    openMenu: function() {
      this.menu = !this.menu;
    },
    closeMenu: function() {
      this.menu = false;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.items-wrap {
  background: #fff;
  .items-container {
    display: flex;
    max-width: 900px;
    margin: auto;
    justify-content: space-evenly;
    align-items: center;
    h1 {
      color: #000;
      font-size: 48px;
      margin: 0;
      z-index: 0;
      position: relative;
      @supports (clip-path: polygon(0% 100%, 100% 100%, 100% 40%, 0 60%)) {
        color: #000;
        transition: color 1.5s ease;
        &:hover {
          color: transparent;
          transition: color 0.2s ease;
        }
        &:focus {
          outline: none;
        }
        &::before,
        &::after {
          content: attr(data-section);
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.7s ease;
        }
        &::before {
          color: #000;
          clip-path: polygon(0% 100%, 100% 100%, 100% 40%, 0 60%);
        }
        &::after {
          color: #000;
          clip-path: polygon(0 0, 100% 0%, 100% 36%, 0 56%);
        }
        &:hover {
          &::before {
            transform: translate(8px, 2%);
          }
          &::after {
            transform: translate(-8px, -2%);
          }
        }
      }
    }
    li {
      list-style: none;
    }
    .router-link-active {
      .header-item {
        &:hover {
          animation-name: headerActive;
          animation-duration: 0.25s;
          -webkit-animation-name: headerActive;
          -webkit-animation-duration: 0.25s;
          -moz-animation-name: headerActive;
          -moz-animation-duration: 0.25s;
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(135deg);
        }
        p {
          opacity: 0;
          transform: rotate(45deg);
        }
      }
    }
    .header-item {
      opacity: 1;
      position: relative;
      height: 100px;
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px 0;
      transition: all 0.75s ease-in-out;
      -moz-transition: all 0.75s ease-in-out;
      -webkit-transition: all 0.75s ease-in-out;
      &:hover {
        cursor: pointer;
      }
      &::before,
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 20px;
        background-color: #000;
        transform: rotate(90deg);
        transition: transform 0.45s ease-in-out;
        -moz-transition: transform 0.45s ease-in-out;
        -webkit-transition: transform 0.45s ease-in-out;
      }
      &:hover::before,
      &.current::before {
        transform: rotate(45deg);
      }
      &:hover::after,
      &.current::after {
        transform: rotate(135deg);
      }
      p {
        transform: rotate(90deg);
        color: #fff;
        font-style: italic;
        text-align: center;
        z-index: 100;
        letter-spacing: 1px;
        transition: all 0.45s ease-in-out;
        -moz-transition: all 0.45s ease-in-out;
        -webkit-transition: all 0.45s ease-in-out;
      }
      &:hover p,
      &.current p {
        opacity: 0;
        transform: rotate(45deg);
      }
    }
  }
  .burger-menu {
    display: none;
    ham {
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      transition: transform 400ms;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .hamRotate.active {
      transform: rotate(45deg);
    }
    .hamRotate180.active {
      transform: rotate(180deg);
    }
    .line {
      fill: none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke: #000;
      stroke-width: 5.5;
    }
    .ham4 .top {
      stroke-dasharray: 40 121;
    }
    .ham4 .bottom {
      stroke-dasharray: 40 121;
    }
    .ham4.active .top {
      stroke-dashoffset: -68px;
    }
    .ham4.active .bottom {
      stroke-dashoffset: -68px;
    }
  }
  @media screen and (max-width: 767px) {
    height: 120px;
    .items-container {
      display: none;
    }
    .burger-menu {
      height: 120px;
      padding: 0 0 0 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 28px;
        color: #000;
      }
    }
  }
}

@keyframes headerActive {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(6deg);
  }
  75% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@-webkit-keyframes headerActive {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(6deg);
  }
  75% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
