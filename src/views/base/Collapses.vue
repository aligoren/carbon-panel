<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column class="_margin-bottom-1" xs="12"><i class="fas fa-chevron-down"></i> Collapses</i-column>
                        <i-column xs="4">
                            <i-collapsible>
                                <i-collapsible-item>
                                    <template slot="title">Item 1</template>
                                    Item 1 content
                                </i-collapsible-item>
                                <i-collapsible-item>
                                    <template slot="title">Item 2</template>
                                    Item 2 content
                                </i-collapsible-item>
                                <i-collapsible-item>
                                    <template slot="title">Item 3</template>
                                    Item 3 content
                                </i-collapsible-item>
                            </i-collapsible>
                        </i-column>
                        <i-column xs="4">
                            <i-collapsible :active="active">
                                <i-collapsible-item id="panel-1">
                                    <template slot="title">Item 1</template>
                                    Item 1 content
                                </i-collapsible-item>
                                <i-collapsible-item id="panel-2">
                                    <template slot="title">Item 2</template>
                                    Item 2 content
                                </i-collapsible-item>
                                <i-collapsible-item id="panel-3">
                                    <template slot="title">Item 3</template>
                                    Item 3 content
                                </i-collapsible-item>
                            </i-collapsible>
                        </i-column>
                        <i-column xs="4">
                            <i-collapsible accordion variant="dark">
                                <i-collapsible-item>
                                    <template slot="title">Item 1</template>
                                    Item 1 content
                                </i-collapsible-item>
                                <i-collapsible-item>
                                    <template slot="title">Item 2</template>
                                    Item 2 content
                                </i-collapsible-item>
                                <i-collapsible-item>
                                    <template slot="title">Item 3</template>
                                    Item 3 content
                                </i-collapsible-item>
                            </i-collapsible>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'Collapses',
    data() {
        return {
            active: 'panel-1' // or ['panel-1', 'panel-3']
        }
    }
}
</script>