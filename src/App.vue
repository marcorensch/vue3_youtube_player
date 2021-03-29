<template>
  <div class="uk-height-viewport uk-overflow-auto">
    <router-view/>
  </div>

</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);export default {
  name: 'App',
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dedede;
  background: #010101;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #a73608;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nx-background-videoheader-gradient-h{
  background: rgb(1,1,1);
  background: linear-gradient(90deg, rgba(1,1,1,1) 5%, rgba(1,1,1,0.9) 40%, rgba(1,1,1,0.1) 100%);
}
.nx-background-videoheader-gradient-v{
  background: rgb(1,1,1);
  background: linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(1,1,1,0.9) 20%, rgba(1,1,1,0) 100%);
}

.nx-backdrop-blur{
  backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
}
</style>
