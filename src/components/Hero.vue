<template>
  <section id="hero" class="banner-area">
    <div class="container">
      <div class="row fullscreen align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6 banner-left">
          <h6>This is me</h6>
          <h1>Rikard Johansson</h1>
          <p>
            MSc in Information Technology @ KTH Royal Institute of Technology
            Welcome to my portfolio!
          </p>
          <a href="#portfolio" class="primary-btn text-uppercase">
            Discover now
          </a>
        </div>
        <div class="col-lg-6 col-md-6 banner-right d-flex align-self-end">
          <img class="img-fluid" src="@/assets/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Hero extends Vue {}
</script>

<style scoped lang="scss">
.hero {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 5px;

  p {
    font-size: 24px;
  }
}

.banner-area {
  background: #f9f9ff;

  .fullscreen {
    height: 750px;
  }
}

.banner-left {
  h6 {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
  }

  h1 {
    margin: 20px 0;
    font-size: 60px;
    text-transform: uppercase;
  }
}

@media (max-width: 991px) {
  .banner-left h1 {
    font-size: 30px;
  }
}

@media (max-width: 767px) {
  .banner-left {
    margin-top: 100px;
  }
}

.banner-right {
  text-align: center;
}

@media (max-width: 991px) {
  .banner-right {
    align-self: center;
  }
}

@media (max-width: 767px) {
  .banner-right {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>
