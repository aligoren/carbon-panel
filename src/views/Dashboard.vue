<template>
  <i-container class="_padding-0" fluid>
    <dashboard-cards />
    <dashboard-traffic />
    <dashboard-sales />
  </i-container>
</template>

<script>

import DashboardCards from './base/DashboardCards'
import DashboardTraffic from './base/DashboardTraffic'
import DashboardSales from './base/DashboardSales'

export default {
  name: 'Dashboard',
  components: {
    DashboardCards,
    DashboardTraffic,
    DashboardSales
  }
}
</script>
