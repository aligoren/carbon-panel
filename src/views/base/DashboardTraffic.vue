<template>
    <i-row class="_margin-top-3-4">
        <i-column xs="12" class="_margin-bottom-xs-3-4">
            <i-card>
                <div>
                    <h4 class="_margin-top-0 _margin-bottom-0">Traffic</h4>
                    <p class="_margin-top-1-2 font-size-12">October 2019</p>
                </div>
                <div style="height: 350px">
                    <canvas id="traffic-chart"></canvas>
                </div>
                <div>
                    <i-row>
                        <i-column md="3" xs="12" class="_text-center">
                            <div><span class="font-size-13">New Users</span></div>
                            <div><strong class="font-size-14">43 (40%)</strong></div>
                            <i-progress size="sm">
                                <i-progress-bar variant="success" value="40" />
                            </i-progress>
                        </i-column>

                        <i-column md="3" xs="12" class="_text-center">
                            <div><span class="font-size-13">Revenue</span></div>
                            <div><strong class="font-size-14">2.341 (50%)</strong></div>
                            <i-progress size="sm">
                                <i-progress-bar variant="primary" value="50" />
                            </i-progress>
                        </i-column>

                        <i-column md="3" xs="12" class="_text-center">
                            <div><span class="font-size-13">Orders</span></div>
                            <div><strong class="font-size-14">80 (30%)</strong></div>
                            <i-progress size="sm">
                                <i-progress-bar variant="secondary" value="30" />
                            </i-progress>
                        </i-column>

                        <i-column md="3" xs="12" class="_text-center">
                            <div><span class="font-size-13">Members Online</span></div>
                            <div><strong class="font-size-14">1.923 (32%)</strong></div>
                            <i-progress size="sm">
                                <i-progress-bar variant="warning" value="32" />
                            </i-progress>
                        </i-column>
                    </i-row>
                </div>
            </i-card>
        </i-column>
    </i-row>
</template>

<script>

import Chart from 'chart.js'

import trafficChartData from '@/data/dashboard-traffic'

export default {
    name: 'DashboardTraffic',
    data() {
        return {
            trafficChartData: trafficChartData
        }
    },
    mounted() {
        this.createChart('traffic-chart', this.trafficChartData)
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options
            })
        }
    }
}
</script>