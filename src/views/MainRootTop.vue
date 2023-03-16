<template>
  <v-container fluid class="ma-0 fill-height pa-0">
    <v-card class="rounded-0" height="7%" width="100%">
      Application Bar
    </v-card>
    <v-card width="100%" height="93%" color="white">

        <v-overlay style="width:180px; height:180px; left:178vh; top:8%" opacity="0">
            <Attitude :size="att_size"/>
        </v-overlay>

      <v-overlay style="width: 460px; height: 32%; left:0.5%; top:64vh" opacity="0">
        <v-btn color="success" class="" @click="switchView()">Switch</v-btn>

        <v-card width="460" height="245" color="black">
          <iframe
            v-show="mapMode"
            width="460"
            height="245"
            src="https://www.youtube.com/embed/dLt7NNZjuMs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <MapBase v-show="!mapMode" />
        </v-card>
      </v-overlay>
      <iframe
        v-show="!mapMode"
        width="100%"
        height="99%"
        src="https://www.youtube.com/embed/dLt7NNZjuMs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <MapBase v-show="mapMode" />
    </v-card>
  </v-container>
</template>

<script>
import MapBase from "@/components/MapBase.vue";
import { Attitude } from  'vue-flight-indicators'

export default {
  components: {
    MapBase,
    Attitude,
  },

  mounted() {
    this.mapMode = true;
  },

  name: "MainRootTop",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      mapMode: true,
      att_size: 180,
    };
  },
  methods: {
    switchView() {
      this.mapMode = !this.mapMode;
    },
  },
};
</script>

<style>

</style>
