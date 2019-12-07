<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column class="_margin-bottom-1" xs="12">
                            <h4>
                                <i class="fas fa-list-ol"></i> Paginations
                                <i-badge class="_float-right"><a href="https://inkline.io/docs/components/pagination" target="_blank">docs</a></i-badge>
                            </h4>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="4" >
                            <i-pagination v-model="exampleCurrentPage" :items="300" :items-per-page="20"></i-pagination>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="4" >
                            <i-pagination variant="dark" v-model="exampleDarkCurrentPage" :items="150" :items-per-page="10"></i-pagination>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="4" >
                            <i-pagination v-model="pageLimitCurrentPage" :limit="pageLimit" :items="300" :items-per-page="10"></i-pagination>
                        </i-column>

                        
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'Paginations',
    data() {
        return {
            exampleCurrentPage: 1,
            exampleDarkCurrentPage: 1,
            pageLimitCurrentPage: 1,
            pageLimit: {
                xs: 3,
                sm: 5,
                md: 5
            }
        }
    }
}
</script>