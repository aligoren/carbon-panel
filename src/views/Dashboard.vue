<template>
  <i-container class="_padding-0" fluid>
    <dashboard-cards />
  </i-container>
</template>

<script>

import DashboardCards from './base/DashboardCards'

export default {
  name: 'Dashboard',
  components: {
    DashboardCards
  }
}
</script>
