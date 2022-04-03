<template>
  <section id="skill" class="skill-area section-gap">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content col-lg-7">
          <div class="title text-center">
            <h1 class="mb-10">Skill</h1>
            <p>Different skills I have built up this far.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-skill">
            <i class="fa-solid fa-laptop fa-2xl"></i>
            <a href="#">
              <h4>Web development</h4>
            </a>
            <p>
              Good knowledge of HTML, CSS and Bootstrap. Basic knowledge of
              JavaScript, React and Vue components.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-skill">
            <i class="fa-solid fa-code fa-2xl"></i>
            <a href="#">
              <h4>Programming and debugging</h4>
            </a>
            <p>
              Good knowledge of programming in Java. Basic knowledge of C,
              Elixir, Prolog and Assembly. Very experienced user of IntelliJ
              IDEA, VS Code and Github.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-skill">
            <i class="fa-solid fa-image fa-2xl"></i>
            <a href="#">
              <h4>Image processing</h4>
            </a>
            <p>
              Good knowledge of Adobe Photoshop, Premiere Pro and Lightroom.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-skill">
            <i class="fa-solid fa-cube fa-2xl"></i>
            <a href="#">
              <h4>CAD</h4>
            </a>
            <p>Good knowledge of Autodesk Inventor.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-skill">
            <i class="fa-solid fa-desktop fa-2xl"></i>
            <a href="#">
              <h4>Operating system</h4>
            </a>
            <p>
              Very experienced user in the operating systems Windows, Mac OS and
              Linux.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-skill">
            <i class="fa-solid fa-file-lines fa-2xl"></i>
            <a href="#">
              <h4>Other</h4>
            </a>
            <p>Very experienced users of MS Office and G suite.</p>
          </div>
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
#skill {
  background-color: #f6f6f6;
  padding-top: 120px;
  padding-bottom: 120px;
}

.single-skill {
  text-align: center;
  margin-top: 60px;

  i {
    font-size: 35px;
    color: #222;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }

  h4 {
    margin-top: 30px;
    margin-bottom: 20px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }

  p {
    max-width: 318px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

.single-skill:hover {
  h4,
  i {
    color: #8490ff;
  }
}

.single-fact {
  text-align: center;

  h1 {
    font-weight: 700;
  }
}

@media (max-width: 800px) {
  .single-fact {
    margin-bottom: 30px;
  }
}
</style>
