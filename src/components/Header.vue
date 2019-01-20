<template>
  <div class="items-wrap">
    <div class="items-container">
      <router-link to="/" exact>
        <h1 data-section="Charles Jewell">Charles Jewell</h1>
      </router-link>
      <li>
        <router-link to="/about" exact>
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
  </div>
</template>

<script>
export default {
  name: "Home"
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
        color: transparent;
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
