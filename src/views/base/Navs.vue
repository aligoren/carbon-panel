<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column class="_margin-bottom-1" xs="12">
                            <h4><i class="fas fa-bars"></i> Navs</h4>
                        </i-column>
                        <i-column xs="4" >
                            <i-nav size="sm">
                                <i-nav-item href="https://aligoren.github.io/carbon-panel/">Link</i-nav-item>
                                <i-nav-item :to="{ name: 'index' }">Router Link</i-nav-item>
                                <i-nav-item>Item</i-nav-item>
                                <i-nav-item disabled>Disabled</i-nav-item>
                            </i-nav>
                        </i-column>
                        <i-column xs="4">
                            <i-nav vertical size="md">
                                <i-nav-item href="https://aligoren.github.io/carbon-panel/">Link</i-nav-item>
                                <i-nav-item :to="{ name: 'index' }">Router Link</i-nav-item>
                                <i-nav-item>Item</i-nav-item>
                                <i-nav-item disabled>Disabled</i-nav-item>
                            </i-nav>
                        </i-column>
                        <i-column xs="4">
                            <i-nav size="lg">
                                <i-nav-item href="https://aligoren.github.io/carbon-panel/">Link</i-nav-item>
                                <i-nav-item :to="{ name: 'index' }">Router Link</i-nav-item>
                                <i-nav-item>Item</i-nav-item>
                                <i-nav-item disabled>Disabled</i-nav-item>
                            </i-nav>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'Navs',
    data() {
        return {

        }
    }
}
</script>