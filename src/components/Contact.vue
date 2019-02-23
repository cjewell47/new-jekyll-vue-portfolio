<template>
  <div class="page">
    <h1>Contact</h1>
    <div class="email-container">
      <a href="mailto:cj@charlesjewell.com">
        <h2 id="email" data-el="cj@charlesjewell.com">cj@charlesjewell.com</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
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

.email-container {
  position: relative;
  margin-bottom: 20px;
  width: 400px;
  height: 70px;
  display: flex;
  border: 1px solid #000;
  justify-content: center;
  @media screen and (max-width: 450px) {
    width: 280px;
  }
  a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    #email {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      position: absolute;
      margin: 0;
      color: #000;
      background: transparent;
      justify-content: center;
      z-index: 1;
      transition: font-size 250ms cubic-bezier(0.59, 0.04, 0.3, 1.43);
      &:after {
        content: attr(data-el);
        position: absolute;
        left: 0;
        z-index: 2;
        overflow: hidden;
        white-space: wrap;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
        text-align: center;
        position: absolute;
        justify-content: center;
        opacity: 0;
        color: #fff;
        background: #000;
        clip-path: polygon(0 0, 100% 0, 101% 25%, 0 77%);
        transition: opacity 0.4s ease;
      }
    }
  }
  &:hover {
    a {
      #email {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
