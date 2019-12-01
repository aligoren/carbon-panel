<template>
    <i-row class="_margin-top-3-4">
        <i-column class="_margin-bottom-xs-3-4">
            <i-card>
                <div>
                    <h4 class="_margin-top-0 _margin-bottom-0">Traffic</h4>
                    <p class="_margin-top-1-2 font-size-12">October 2019</p>
                </div>
                <div style="height: 350px">
                    <canvas id="traffic-chart"></canvas>
                </div>
            </i-card>
        </i-column>
    </i-row>
</template>

<script>

import Chart from 'chart.js'

import trafficChartData from '../../data/dashboard-traffic'

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