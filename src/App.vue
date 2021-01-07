<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'App',

    data: () => ({
      //
    }),
    mounted (): void {
      console.log(this.$vuetify)
    }
  })
</script>
