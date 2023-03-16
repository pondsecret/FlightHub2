<template>
  <div style="width: 100%; height: 100%">
    <gmap-map
      :center="center"
      :zoom="18"
      style="width: 100%; height: 100%; z-index: 1"
      :options="{
        mapTypeId: 'satellite',
        streetViewControl: false,
        fullscreenControl: false,
        tilt: 0,
        zoomControl: false,
        mapTypeControl: false,
        panControl: false,
        disableDefaultUI: true,
        rotationControl: true,
      }"
    >
      <gmap-marker
        :position="center"
        :icon="{
          url: droneIcon,
        }"
      >
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import firebaseApp from "../plugins/firebase";
// import Jqr from "jquery";

export default {
  name: "MapBase",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      droneIcon: require("../assets/multi_rotors.png"),
      indicatorYawNew: 20,
    };
  },

  mounted() {
    this.dbRef = firebaseApp.database().ref("MX1000/");
    this.dbRef.on("value", (ss) => {
      for (const [key, value] of Object.entries(ss.val())) {
        if (key === "latitude") this.center.lat = value;

        if (key === "longitude") this.center.lng = value;
      }
    });
  },

  methods: {},
};
</script>

<style></style>
