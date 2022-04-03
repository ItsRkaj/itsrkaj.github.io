<template>
  <div class="home">
    <Nav />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/Nav.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Nav,
    Hero,
    About,
    Skills,
    Portfolio,
    Footer,
  },
})
export default class HomeView extends Vue {}
</script>
