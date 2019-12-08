<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column class="_margin-bottom-1" xs="12">
                            <h4>
                                <i class="fas fa-comments"></i> Popovers
                                <i-badge class="_float-right"><a href="https://inkline.io/docs/components/popover" target="_blank">docs</a></i-badge>
                            </h4>
                        </i-column>
                        <i-column md="3" xs="12">
                            <i-popover placement="top">
                                <i-button>Top Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>
                        </i-column>
                        <i-column md="3" xs="12">
                            <i-popover placement="bottom">
                                <i-button>Bottom Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>
                        </i-column>
                        <i-column md="3" xs="12">
                            <i-popover placement="right">
                                <i-button>Right Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>
                        </i-column>
                        <i-column md="3" xs="12">
                            <i-popover placement="left">
                                <i-button>Left Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>
                        </i-column>
                        <i-column class="_margin-top-1" xs="12">
                            <i-popover variant="dark" class="_margin-right-1" trigger="click">
                                <i-button variant="dark">Click Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>
                            <i-popover class="_margin-right-1" trigger="hover">
                                <i-button>Hover Popover</i-button>
                                <template slot="header">Popover Header</template>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                                <template slot="footer">Popover Footer</template>
                            </i-popover>
                            <i-popover  class="_margin-right-1" trigger="focus">
                                <i-button>Focus Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>
                            <i-popover class="_margin-right-1" :trigger="['focus', 'hover']">
                                <i-button>Multiple Events Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>
                            <i-popover trigger="manual" v-model="visible">
                                <i-button @click="visible = !visible">Manual Popover</i-button>
                                <template slot="body">This is the popover body. Useful information goes here.</template>
                            </i-popover>

                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'Popovers',
    data() {
        return {
            visible: false
        }
    }
}
</script>