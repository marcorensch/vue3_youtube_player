<template>
  <div class="uk-position-relative uk-overflow-hidden">
    <!-- Video Background -->
    <div class="uk-grid-collapse" uk-grid>
      <div class="uk-width-expand"></div>
      <div class="uk-width-2-3">
        <div class="" style="transform: scale(1.5); margin-top:-10%">
            <Player :videoId="videoId"/>
        </div>
      </div>
    </div>

    <!-- Overlays -->
    <div class="uk-position-cover nx-backdrop-blur"></div>
    <div class="uk-position-cover nx-background-videoheader-gradient-h"></div>
    <div class="uk-position-cover nx-background-videoheader-gradient-v"></div>
    <div class="uk-position-cover">
      <div class="uk-height-1-1 uk-flex uk-flex-middle">
        <div class="uk-padding uk-light">
          <h1 class="uk-margin-remove">Dj Mico feat. McTiramisu</h1>
          <h2 class="uk-margin-remove">La musica di Rimini 2k20</h2>
          <div class="uk-width-1-2 uk-height-small uk-overflow-auto uk-margin-small-top uk-visible@m">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
          </div>

        </div>
      </div>
    </div>
  </div>
 VideoID:  {{videoId}}
</template>

<script>
import Player from "@/components/Player";
export default {
name: "VideoHeader",
  props : ['videoId'],
  components: { Player }
}
</script>

<style scoped>

</style>
