<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #777;
  scroll-behavior: smooth;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 16px;
}

h6 {
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #222;
  line-height: 1.2em;
  font-weight: 600;
}

a {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

a,
a:focus,
a:hover {
  text-decoration: none;
  outline: 0;
}

.primary-btn {
  background: -webkit-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  line-height: 42px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  position: relative;
  cursor: pointer;
}

.primary-btn:focus {
  outline: none;
}

.primary-btn:hover {
  box-shadow: 0px 20px 20px 0px rgba(132, 144, 255, 0.3);
  color: #fff;
}
</style>
