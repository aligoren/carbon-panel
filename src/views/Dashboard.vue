<template>
  <i-container fullscreen class="_padding-0" fluid>
    <dashboard-cards />
    <dashboard-traffic />
  </i-container>
</template>

<script>

import DashboardCards from './base/DashboardCards'
import DashboardTraffic from './base/DashboardTraffic'

export default {
  name: 'Dashboard',
  components: {
    DashboardCards,
    DashboardTraffic
  }
}
</script>
