<template>
    <i-row class="_margin-bottom-2">
        <i-column xs="12">
            <i-card>
                <h4 class="_margin-top-0"><i class="fas fa-tint"></i> State Colors</h4>
                <i-row>
                    <i-column md="3" xs="12">
                        <div class="_background-info box _padding-3 _text-center">
                            <strong>Info</strong>
                            <p class="_margin-top-1-2">#62bec1</p>
                        </div>
                    </i-column>
                    <i-column md="3" xs="12">
                        <div class="_background-success box _padding-3 _text-center">
                            <strong>Success</strong>
                            <p class="_margin-top-1-2">#5fb072</p>
                        </div>
                    </i-column>
                    <i-column md="3" xs="12">
                        <div class="_background-warning box _padding-3 _text-center">
                            <strong>Warning</strong>
                            <p class="_margin-top-1-2">#f1ac53</p>
                        </div>
                    </i-column>
                    <i-column md="3" xs="12">
                        <div class="_background-danger box _padding-3 _text-center">
                            <strong>Danger</strong>
                            <p class="_margin-top-1-2">#f25f5c</p>
                        </div>
                    </i-column>
                </i-row>
            </i-card>
        </i-column>
    </i-row>
</template>

<script>
export default {
    name: 'StateColors',
}
</script>