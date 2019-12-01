<template>
    <i-layout-content>
        <main-header />
        <i-container fluid>
            <router-view></router-view>
        </i-container>
    </i-layout-content>
</template>

<script>

import MainHeader from './MainHeader'

export default {
    name: 'MainContent',
    components: {
        MainHeader
    }
}
</script>