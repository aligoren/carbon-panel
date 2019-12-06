<template>
  <i-container class="_padding-0" fluid>
    <dashboard-cards />
    <dashboard-traffic />
    <dashboard-sales />
  </i-container>
</template>

<script>

import DashboardCards from './dashboard/DashboardCards'
import DashboardTraffic from './dashboard/DashboardTraffic'
import DashboardSales from './dashboard/DashboardSales'

export default {
  name: 'Dashboard',
  components: {
    DashboardCards,
    DashboardTraffic,
    DashboardSales
  }
}
</script>
