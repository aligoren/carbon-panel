<template>
    <i-row>
      <i-column class="_margin-bottom-xs-3-4" md="3" sm="12" xs="12">
        <i-card  variant="dark">
            <h4 class="_margin-bottom-0 _margin-top-0">
                1.923 <i class="fas fa-users fa-pull-right"></i>
            </h4>
            <p>Members online</p>
        </i-card>
      </i-column>
      <i-column class="_margin-bottom-xs-3-4" md="3" sm="12" xs="12">
        <i-card variant="danger">
            <h4 class="_margin-bottom-0 _margin-top-0">
                <i class="fas fa-arrow-circle-up"></i> 43 <i class="fas fa-users fa-pull-right"></i>
            </h4>
            <p>New Users</p>
        </i-card>
      </i-column>
      <i-column class="_margin-bottom-xs-3-4" md="3" sm="12" xs="12">
        <i-card variant="primary">
            <h4 class="_margin-bottom-0 _margin-top-0">
                <i class="fas fa-arrow-circle-down"></i> 2.341 <i class="fas fa-lira-sign fa-pull-right"></i>
            </h4>
            <p>Revenue</p>
        </i-card>
      </i-column>
      <i-column class="_margin-bottom-xs-3-4" md="3" sm="12" xs="12">
        <i-card variant="warning">
            <h4 class="_margin-bottom-0 _margin-top-0">
                760 <i class="fas fa-envelope fa-pull-right"></i>
            </h4>
            <p>Messages</p>
        </i-card>
      </i-column>
    </i-row>
</template>

<script>
export default {
    name: 'DashboardCards'
}
</script>