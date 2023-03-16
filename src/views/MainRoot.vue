<template>
  <v-container fluid class="ma-0 pa-0 fill-height d-flex">
    <v-navigation-drawer color="#010101">
      <v-list-item class="mt-2">
        <v-list-item-avatar color="white" size="48"> ICS </v-list-item-avatar>
        <v-list-item-title>
          <p
            style="color: #ffffff"
            class="text-subtitle-1 font-weight-bold mb-0 mt-4"
          >
            ATSYS TEAM
          </p>
          <p style="color: #ffffff">ICreativeSystem</p>
        </v-list-item-title>
      </v-list-item>

      <v-divider color="white" class="mt-4 mx-1 mb-2"></v-divider>
      <v-card
        height="48px"
        class="d-flex justify-space-around align-center"
        color="#010101"
      >
        <v-icon dark>flight</v-icon>
        <v-card-title primary-title class="" style="color: #ffffff">
          No vehicle
        </v-card-title>
        <v-btn color="warning" class="ma-0" height="36px">
          <v-icon size="28">wifi_protected_setup</v-icon>
        </v-btn>
      </v-card>

      <!-- Params Zone -->
      <v-card
        height="55%"
        class="my-8 mr-2 rounded-xl"
        style="border-style: solid; border-color: #ffffff; border-width: 2px"
        color="#010101"
        clipped
      >
        <v-card color="#010101" width="43%" class="mt-n9 ml-4 pa-n8 mb-4 d-flex justify-center">
          <v-card-title primary-title style="color: #ffffff" flat>
            Status.
          </v-card-title>
        </v-card>

        <v-card
          width="100%"
          color="#010101"
          class="my-1"
          v-for="paramsList in paramsLists"
          :key="paramsList.icon"
        >
          <v-row no-gutters class="d-flex justify-space-evenly">
            <v-col class="">
              <div class="d-flex align-center justify-center">
                <v-icon dark>{{ paramsList.icon }}</v-icon>
              </div>
            </v-col>
            <v-col class="">
              <div class="d-flex align-center justify-center">
                <p style="color: #ffffff">:</p>
              </div>
            </v-col>
            <v-col class="">
              <div class="d-flex align-center justify-center">
                <p style="color: #ffffff">
                  {{ paramsList.value }}
                  <span class="ml-2">{{ paramsList.unit }}</span>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-navigation-drawer>

    <v-content class="fill-height">
      <v-card
        width="100%"
        height="100%"
        tile
        flat
        class="d-flex justify-center ma-0 pa-0"
      >
        <v-overlay
          absolute
          style="width: 460px; height: 32%; top: 66%; left: 2%"
        >
          <iframe
            width="460"
            height="245"
            src="https://www.youtube.com/embed/dLt7NNZjuMs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </v-overlay>
        <gmap-map
          :center="center"
          :zoom="18"
          style="width: 100%; height: 100%; z-index: 1"
        >
        </gmap-map>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "MainRoot",

  data() {
    return {
      vehicle: "Vilverin VL340",
      center: { lat: 45.508, lng: -73.587 },
      paramsLists: [
        { icon: "height", value: "20.0", unit: "m." },
        { icon: "height", value: "20.0", unit: "m." },
        { icon: "height", value: "20.0", unit: "m." },
        { icon: "height", value: "20.0", unit: "m." },
        { icon: "height", value: "20.0", unit: "m." },
        { icon: "height", value: "20.0", unit: "m." },
        { icon: "height", value: "20.0", unit: "m." },
        { icon: "height", value: "20.0", unit: "m." },
      ],
    };
  },
};
</script>

<style>

</style>
