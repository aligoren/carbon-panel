<template>
    <i-row class="_margin-bottom-2">
        <i-column xs="12">
            <i-card>
                <h4 class="_margin-top-0"><i class="fas fa-tint"></i> Brand Colors</h4>
                <i-row>
                    <i-column md="3" xs="12">
                        <div class="_background-primary box _padding-3 _text-center">
                            <strong>Primary</strong>
                            <p class="_margin-top-1-2">#178bb2</p>
                        </div>
                    </i-column>
                    <i-column md="3" xs="12">
                        <div class="_background-secondary box _padding-3 _text-center">
                            <strong>Secondary</strong>
                            <p class="_margin-top-1-2">#5d65b9</p>
                        </div>
                    </i-column>
                    <i-column md="3" xs="12">
                        <div class="_background-light box _padding-3 _text-center">
                            <strong>Light</strong>
                            <p class="_margin-top-1-2">#e9ecef</p>
                        </div>
                    </i-column>
                    <i-column md="3" xs="12">
                        <div class="_background-dark box _padding-3 _text-center">
                            <strong>Dark</strong>
                            <p class="_margin-top-1-2">#212529</p>
                        </div>
                    </i-column>
                </i-row>
            </i-card>
        </i-column>
    </i-row>
</template>

<script>
export default {
    name: 'BrandColors',
}
</script>