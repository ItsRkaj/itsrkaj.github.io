<template>
  <section id="about" class="home-about-area pt-120 pb-120">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6 home-about-left">
          <img class="img-fluid" src="@/assets/about-img.png" alt="" />
        </div>
        <div class="col-lg-5 col-md-6 home-about-right">
          <h6>About Me</h6>
          <h1 class="text-uppercase">Personal Details</h1>
          <p>
            Hey! My name is Rikard Johansson and I am 20 years old. I am
            currently studying Master of Science in Information Technology at
            the Royal Institute of Technology in Stockholm. During the academic
            years, I worked extra as a lab assistant in the course IE1204
            Digital design at KTH, but also worked as a district referee in
            handball for the handball association Handboll öst.
          </p>
          <a
            href="mailto: rikard01j@gmail.com"
            class="primary-btn text-uppercase"
          >
            Contact me!
          </a>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
  padding-top: 120px;
  padding-bottom: 120px;

  h1 {
    margin-bottom: 40px;
  }

  h6 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 400;
    text-transform: uppercase;
  }
}
</style>
