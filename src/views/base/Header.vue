<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column xs="3">
                            <i-header size="sm" class="_text-center">
                                <h1>Small Header</h1>
                                <p>This is a small header paragraph lorem ipsum dolor sit amet.</p>
                                <i-button variant="primary">Button</i-button>
                            </i-header>
                        </i-column>
                        <i-column xs="3">
                            <i-header size="md" class="_text-center">
                                <h1>Medium Header</h1>
                                <p>This is a medium header paragraph lorem ipsum dolor sit amet.</p>
                                <i-button variant="primary">Button</i-button>
                            </i-header>
                        </i-column>
                        <i-column xs="3">
                            <i-header size="lg" class="_text-center">
                                <h1>Large Header</h1>
                                <p>This is a large header paragraph lorem ipsum dolor sit amet.</p>
                                <i-button variant="primary">Button</i-button>
                            </i-header>
                        </i-column>

                        <i-column xs="3">
                            <i-header fullscreen class="_text-center">
                                <h1>Fullscreen Header</h1>
                                <p>This is a fullscreen header paragraph lorem ipsum dolor sit amet.</p>
                                <i-button variant="primary">Button</i-button>
                            </i-header>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {

        }
    }
}
</script>