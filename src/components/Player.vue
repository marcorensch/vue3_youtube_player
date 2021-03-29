<template>
  <YouTube
      id="nx-player"
      :src="videoId"
      @ready="onReady"
      @state-change="stateChanged()"
      ref="youtube"
      :host="deineMama"
      :vars="{
        'color':'white',
        'loop':true,
        'controls':1,
        'disablekb':1,
        'fs':0,
        'iv_load_policy':3,
        'origin':'URLDERSEITE',
        'rel':0,
        'showinfo':0,
        'start':95,
        'end':105
      }"
  />
</template>

<script>
export default {
  name: "Video",
  props : ['videoId'],
  mounted() {
    console.log(this.videoId)
  },
  data (){
    return {
    }
  },
  methods: {
    onReady() {
      this.$refs.youtube.player.mute()
      this.$refs.youtube.player.setVolume(50)
      this.$refs.youtube.player.playVideo()

      //Zu Zeitpunkt springen
      //this.$refs.youtube.player.seekTo(89)
    },
    stateChanged(){
      let eventtype = JSON.parse(event.data).info

      if(eventtype === 1){
        console.log('playing')
      }

      if(eventtype === 0){
        console.log('playback ended')
        // Wenn Loop:
        //Zu Zeitpunkt springen
        this.$refs.youtube.player.seekTo(89)
        this.$refs.youtube.player.playVideo()
      }
    }
  },
}
</script>

<style scoped>
#nx-player{
  width:100% !important;
  height: auto !important;
  padding-bottom: 75%;
  overflow: hidden;
  border-radius: 3px;
}
#nx-player > iframe {
}

</style>
