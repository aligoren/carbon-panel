<template>
    <i-row class="_margin-top-3-4">
        <i-column xs="12" class="_margin-bottom-xs-3-4">
            <i-card>
                <div><h4 class="_margin-top-0 _margin-bottom-1">Sales</h4></div>
                <i-table responsive hover>
                    <thead>
                        <tr>
                            <th class="_text-center">Client</th>
                            <th class="_text-center">Country</th>
                            <th class="_text-center">Paid</th>
                            <th class="_text-center">Payment Method</th>
                            <th class="_text-center">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(sale, index) in sales" :key="index">
                            <td class="_text-center">{{ sale.client }}</td>
                            <td class="_text-center"><span :class="'flag-icon fa-2x flag-icon-' + sale.country"></span></td>
                            <td class="_text-center">{{ sale.paid }}</td>
                            <td class="_text-center"><i :class="sale.paymentMethod + ' fa-2x'"></i></td>
                            <td class="_text-center">{{ sale.time }}</td>
                        </tr>
                    </tbody>
                </i-table>
            </i-card>
        </i-column>
    </i-row>
</template>


<script>

import sales from '@/data/dashboard-sales'

/**http://flag-icon-css.lip.is/ */

export default {
    name: 'DashboardSales',
    data() {
        return {
            sales
        }
    }
}
</script>