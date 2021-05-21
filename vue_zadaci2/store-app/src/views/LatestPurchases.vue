<template>
  <div>
    <app-latest-purchases></app-latest-purchases>
  </div>
</template>

<script>
import AppLatestPurchases from '../components/AppLatestPurchases.vue'

export default {
  components: { AppLatestPurchases },
  name: 'LatestPurchases',
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>