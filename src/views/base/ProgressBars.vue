<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row class="_margin-bottom-2">
                        <i-column class="_margin-bottom-1" xs="12">
                            <h4>
                                <i class="fas fa-bars"></i> Progress Bars
                                <i-badge class="_float-right"><a href="https://inkline.io/docs/components/progress" target="_blank">docs</a></i-badge>
                            </h4>
                        </i-column>

                        <i-column class="_margin-bottom-1" md="4" xs="12" >
                            <i-progress>
                                <i-progress-bar value="65" />
                            </i-progress>
                        </i-column>

                        <i-column class="_margin-bottom-1" md="4" xs="12" >
                            <i-progress variant="dark">
                                <i-progress-bar value="35" />
                            </i-progress>
                        </i-column>

                        <i-column class="_margin-bottom-1" md="4" xs="12" >
                            <i-progress variant="light">
                                <i-progress-bar value="65" />
                            </i-progress>
                        </i-column>
                    </i-row>
                    <i-row>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="primary" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="secondary" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="info" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="success" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="warning" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="danger" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="dark" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="1" xs="12">
                            <i-progress>
                                <i-progress-bar variant="light" value="65" />
                            </i-progress>
                        </i-column>
                        <i-column md="4" xs="12">
                            <i-progress>
                                <i-progress-bar variant="success" value="40" />
                                <i-progress-bar variant="warning" value="20" />
                                <i-progress-bar variant="danger" value="10" />
                            </i-progress>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'ProgressBars',
    data() {
        return {
        }
    }
}
</script>