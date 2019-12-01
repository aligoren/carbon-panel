<template>
    <i-layout-content class="main-content">
        <main-header />
        <i-container fluid>
            <router-view></router-view>
        </i-container>
        <main-footer />
    </i-layout-content>
</template>

<script>

import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

export default {
    name: 'MainContent',
    components: {
        MainHeader,
        MainFooter
    }
}
</script>

<style>
.main-content {
    overflow-y: auto;
}
</style>