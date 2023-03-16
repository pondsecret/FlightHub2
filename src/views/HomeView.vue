<template>
  <v-content>
    <v-container>
      <v-row>
        <v-card class="d-flex align-center">
          <h1 class="ma-2">Card</h1>
          <v-btn @click="$router.push('/about')" color="primary ma-2"
            >About</v-btn
          >
        </v-card>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
