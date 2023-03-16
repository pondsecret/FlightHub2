<template>
  <div class="about">
    <v-card class="ma-2">
      <v-card-title primary-title
      class="blue--text text-uppercase ">
        About Page
      </v-card-title>
      <v-btn @click="$router.push('/')" color="pink lighten-3 ma-2" dark>
      <v-icon>house</v-icon>
      </v-btn>
      <v-btn  class="success mr-2" >
        <v-icon left>email</v-icon>
        <span>Email</span>
      </v-btn>
      <v-btn class="cyan lighten-3" dark>
        <v-icon left>mdi-timer</v-icon>
        <span>Time</span>
      </v-btn>
    </v-card>
  </div>
</template>
