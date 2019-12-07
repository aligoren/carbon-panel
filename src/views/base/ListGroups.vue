<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column xs="12">
                            <h4><i class="fas fa-list"></i> List Groups</h4>

                            <i-list-group>
                                <i-list-group-item active>Active</i-list-group-item>
                                <i-list-group-item href="https://aligoren.github.io/carbon-panel/">Link</i-list-group-item>
                                <i-list-group-item :to="{ name: 'dashboard' }">Router Link</i-list-group-item>
                                <i-list-group-item>Item</i-list-group-item>
                                <i-list-group-item disabled>Disabled</i-list-group-item>
                            </i-list-group>

                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'ListGroups',
    data() {
        return {

        }
    }
}
</script>