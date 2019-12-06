<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row class="_margin-bottom-2 _padding-1">
                        <h4 class="_margin-top-0"><i class="fas fa-angle-right"></i> Standart</h4>
                        <i-column xs="12">
                            <i-breadcrumb>
                                <i-breadcrumb-item>Home</i-breadcrumb-item>
                                <i-breadcrumb-item active>Breadcrumbs</i-breadcrumb-item>
                            </i-breadcrumb>
                        </i-column>
                    </i-row>

                    <i-row class="_padding-1">
                        <h4 class="_margin-top-0"><i class="fas fa-angle-right"></i> Dynamically Generated</h4>
                        <i-column xs="12">
                            <i-breadcrumb>
                                <i-breadcrumb-item v-bind="item" v-for="item in items" :key="item.title">{{item.title}}</i-breadcrumb-item>
                            </i-breadcrumb>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>

export default {
    name: 'Breadcrumbs',
    data() {
        return {
            items: [
                { title: 'Dashboard', href: '/', target: '_blank' },
                { title: 'Colors', to: '/theme/colors' },
                { title: 'Typography', to: '/theme/typography' },
            ]
        }
    }
}
</script>