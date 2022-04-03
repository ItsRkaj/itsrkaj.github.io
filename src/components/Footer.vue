<template>
  <section id="footer">
    <ul class="icons">
      <li>
        <a
          href="https://www.facebook.com/rikard.johansson.71697/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0"
          class=""
        >
          <i class="fa fa-facebook fa-2xl"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/ItsRkaj">
          <i class="fa-brands fa-github fa-2xl"></i>
        </a>
      </li>
      <li>
        <a href="mailto: rikard01j@gmail.com">
          <i class="fa-solid fa-envelope fa-2xl"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rkaj/">
          <i class="fa-brands fa-linkedin fa-2xl"></i>
        </a>
      </li>
    </ul>
    <ul class="copyright">
      <li>&copy; Rikard Johansson</li>
    </ul>
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
#footer {
  padding: 6em 0 6em 0;
  background-color: #222;
  color: #ccc;
  text-align: center;
  min-height: 300px;
  font-size: 16px;

  .copyright {
    font-size: 0.8em;
    list-style: none;
    margin: 2em 0 0 0;
    padding: 0;
  }
}

ul.icons li {
  display: inline-block;
  padding: 0 1.25em 0 0;
  color: rgba(255, 255, 255, 0.75);

  i {
    color: #ccc;
  }
}
</style>
