import Vue from "vue";

import Layout from "./components/layout";
import './styles/main.scss';

new Vue({
  el: "#app",
  render: h => h(Layout)
});
