
require('normalize.css/normalize.css');
require('./styles/index.scss');

import "babel-polyfill";
import Vue from 'vue';
import Splash from './splash.vue';
import Game from './game.vue';

new Vue({
  el: '#app',
  template: `<div id="app">
    <Splash />
    <Game />
  </div>`,
  components: {
    Splash,
    Game,
  },
  created(){

    document.addEventListener("DOMContentLoaded", () => {
      const startButton = document.getElementById('start');
      startButton.onclick = () => {
        console.log('starting demo');
      }
    });

  }
});
