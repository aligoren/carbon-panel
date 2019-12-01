<template>
    <!-- <i-sidebar collapse-position="relative" v-model="collapsed" variant="dark">
        <i-nav class="sidebar" vertical>
            <i-nav-item v-for="(item, index) in items" :key="index" :to="item.path">
                {{ item.name }}
                <i-nav-item v-for="(item1, index) in item.children" :key="index" :to="item1.path">
                    {{ item1.name }}
                </i-nav-item>
            </i-nav-item>
        </i-nav>
    </i-sidebar> -->
    <sidebar-menu  :menu="items" @toggle-collapse="onToggleCollapse" :collapsed="collapsed" relative />
</template>

<script>

import items from './navs'

/**https://github.com/yaminncco/vue-sidebar-menu */
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
    name: 'MainSidebar',
    components: {
        SidebarMenu
    },
    data() {
        return {
            collapsed: false,
            items
        }
    },
    mounted() {
        this.onToggleCollapse()
    },
    methods: {
        onToggleCollapse(collapsed) {
            if (this.isMobile()) {
                this.collapsed = true
            } else {
                this.collapsed = collapsed
            }
        },
        isMobile() {
            return (navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/webOS/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/iPod/i) ||
                    navigator.userAgent.match(/BlackBerry/i) ||
                    navigator.userAgent.match(/Windows Phone/i))
        }
    }
}
</script>

<style>
html, body {
    height: 100% !important;
}

main {
    height: 100% !important;
}
</style>