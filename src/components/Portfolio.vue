<template>
  <section class="portfolio-area section-gap" id="portfolio">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content col-lg-8">
          <div class="title text-center">
            <h1 class="mb-10">Portfolio</h1>
            <p>See my previous projects below.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="card">
            <img src="@/assets/weather-app-image.png" alt="Weather app image" />
            <div class="container">
              <h4><b>Weather App</b></h4>
              <p>
                A self-built weather app that uses an API to retrieve
                information about the weather.
              </p>
              <a
                class="primary-btn"
                href="https://github.com/ItsRkaj/weather-app"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card">
            <img src="@/assets/blank.jpg" alt="" />
            <div class="container">
              <h4><b>Coming soon!</b></h4>
              <p>New projects coming up soon.</p>
              <a class="primary-btn">Disabled</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card">
            <img src="@/assets/blank.jpg" alt="" />
            <div class="container">
              <h4><b>Coming soon!</b></h4>
              <p>New projects coming up soon.</p>
              <a class="primary-btn">Disabled</a>
            </div>
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

<style scoped lang="scss">
#portfolio {
  padding-top: 120px;
  padding-bottom: 120px;

  img {
    width: 100%;
  }
}

.menu-content {
  padding-bottom: 70px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 30px;

  img {
    border-radius: 5px 5px 0 0;
    height: 230px;
  }

  .container {
    padding: 5px 16px;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 175px;

    h4 {
      padding-bottom: 5px;
      color: #8490ff;
    }
  }
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
}
</style>
