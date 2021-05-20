<template>
  <div>
    <hr class="m-auto mb-4" style="width: 40vw;">
    <app-customers>
    </app-customers>
  </div>
</template>

<script>
import AppCustomers from '../components/AppCustomers.vue'

export default {
  components: { AppCustomers },
  name: 'Customers',
}
</script>

<style scoped>

</style>