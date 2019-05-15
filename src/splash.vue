<template>
  <!-- DEMO Project page content container full width/height -->
  <div class="splash">
    <!-- Splash Wrapper -->
    <div class="splash__content">

      <!-- Main Content Section -->
      <div class="splash-overview">
        <h1 class="splash-overview__heading">
          Simple pointerlock controls
        </h1>
        <div class="splash-overview-start">
          <h2>Main project description</h2>
          <p>
            Demonstrates player movement along terrain.
          </p>
          <button id="start">Start Demo</button>
        </div>
        <div class="splash-overview-footer">
          A project by <strong><a target="_blank" href="https://www.instagram.com/lifenautjoe">@lifenautjoe</a></strong>.
        </div>
      </div>

      <!-- Webpack boilerplate link & logo -->
      <div class="splash-title">
        <a href="https://github.com/lifenautjoe/webpack-starter-basic" target="_blank">
          <img class="splash-title__img"
          src="./assets/logo-on-dark-bg.png"
          alt="webpack logo">
        </a>
      </div>

    </div>
    <!-- Splash Wrapper End -->
  </div>
  <!-- DEMO Project page content ENDS -->
</template>

<script>
  export default {
    data(){
      return {

      }
    },

  }
</script>

<style scoped scss>
/**
 * Styles for home splash container
 */
.splash {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #d3d3d3;
}

.splash__content {
  position: relative;
  top: 5%;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  max-width: 480px;
}

.splash-title {
  margin-bottom: 1rem;
  max-width: 200px;
  height: auto;

  .splash-title__img {
    height: auto;
    width: 100%;
    color: white;
    margin: 0;
    padding: 0.5rem 1rem;
  }
}

.splash-overview {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1), 0 10px 25px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 4rem;

  h1.splash-overview__heading {
    font-size: 150%;
    padding: 1.5rem;
    margin: 0;
  }
  .splash-overview-start {
    font-size: 80%;
    padding: 2rem;
    text-align: left;
    button {
      margin: 2em auto 0 auto;
      width: 100%;
      padding: 1em;
    }
  }
  .splash-overview-start h2,
  .splash-overview-start p,
  .splash-overview-footer {
    opacity: .6;
  }
}

.splash-overview-footer {
  padding: 2rem;
  font-size: 80%;
}

</style>
