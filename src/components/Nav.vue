<template>
  <header id="header">
    <div class="container main-menu">
      <div class="nav-row align-items-center justify-content-between d-flex">
        <div id="logo">
          <h3>RIKARD</h3>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Hero extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: 999;
  background: #fff;
  box-shadow: -20px 20px 30px 0px rgba(158, 158, 158, 0.1);

  .main-menu {
    padding-bottom: 20px;
    padding-top: 20px;

    .nav-row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
  }

  h3 {
    margin-bottom: 0;
  }
}

.nav-menu,
.nav-menu * {
  margin: 0;
  list-style: none;

  ul {
    position: absolute;
    display: none;
    top: 100%;
    right: 0;
  }

  li {
    position: relative;
    white-space: nowrap;
    margin-left: 10px;
    float: left;
  }

  li:hover a {
    color: #8490ff;
  }

  a {
    padding: 0 8px 0px 8px;
    text-decoration: none;
    display: inline-block;
    color: #222;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    outline: none;
  }
}

@media (max-width: 768px) {
  #nav-menu-container {
    display: none;
  }
}

@media (max-width: 673px) {
  #logo {
    margin-left: 20px;
  }
}
</style>
