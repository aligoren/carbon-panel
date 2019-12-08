<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column class="_margin-bottom-1" xs="12">
                            <h4>
                                <i class="fas fa-toggle-on"></i> Switches
                                <i-badge class="_float-right"><a href="http://vue-js-toggle-button.yev.io/" target="_blank">docs</a></i-badge>
                            </h4>
                        </i-column>

                        <i-column class="_margin-bottom-1" md="3" xs="12" >
                            <toggle-button width="100" v-model="toggle1" :color="toggle1Colors" :sync="true" :labels="toggle1Labels"/>
                        </i-column>

                        <i-column class="_margin-bottom-1" md="3" xs="12" >
                            <toggle-button width="100" v-model="toggle2" color="#82C7EB" :sync="true" :labels="true"/>
                        </i-column>

                        <i-column class="_margin-bottom-1" md="3" xs="12" >
                            <toggle-button speed="1200" width="100" v-model="toggle3" :color="toggle3Colors" :sync="true" :labels="true"/>
                        </i-column>

                        <i-column class="_margin-bottom-1" md="3" xs="12" >
                            <toggle-button :switch-color="switchColors" width="100" v-model="toggle4" :color="toggle1Colors" :sync="true" :labels="true"/>
                        </i-column>

                        
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>

import { ToggleButton } from 'vue-js-toggle-button'

export default {
    name: 'Switches',
    components: {
        ToggleButton
    },
    data() {
        return {
            toggle1: false,
            toggle2: false,
            toggle3: false,
            toggle4: false,
            toggle1Colors: {
                checked: '#ff0000'
            },
            toggle3Colors: {
                checked: '#7dce94',
                unchecked: '#36363b'
            },
            toggle1Labels: {
                checked: 'Selected',
                unchecked: 'Unselected'
            },
            switchColors: {
                checked: '#36363b', 
                unchecked: 'red'
            }
        }
    }
}
</script>