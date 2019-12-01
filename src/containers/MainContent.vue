<template>
    <i-layout-content >
        <main-header />
        <i-container class="main-content"  fluid>
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

<style>
.main-content {
    height: 90%;
    overflow-y: auto;
}
</style>