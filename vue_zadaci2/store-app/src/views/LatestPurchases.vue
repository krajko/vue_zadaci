<template>
  <div>
    {{ id }} {{ customers[0].firstName }}
    <app-latest-purchases :id="id" :customers="customers"></app-latest-purchases>
  </div>
</template>

<script>
import AppLatestPurchases from '../components/AppLatestPurchases.vue'

export default {
  components: { AppLatestPurchases },
  name: 'LatestPurchases',
  props:['id', 'customers'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>