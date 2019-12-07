<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column class="_margin-bottom-1" xs="12">
                            <h4>
                                <i class="fas fa-bars"></i> Navbars
                                <i-badge class="_float-right"><a href="https://inkline.io/docs/components/navbar" target="_blank">docs</a></i-badge>
                            </h4>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="12" >
                            <i-navbar size="sm">
                                <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
                                <i-navbar-items>
                                    <i-nav>
                                        <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
                                        <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
                                    </i-nav>
                                    <i-nav>
                                        <i-input class="item" placeholder="Type something..">
                                            <i-button variant="primary" slot="append">
                                                <font-awesome-icon icon="search" />
                                            </i-button>
                                        </i-input>
                                    </i-nav>
                                </i-navbar-items>
                            </i-navbar>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="12" >
                            <i-navbar size="md">
                                <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
                                <i-navbar-items>
                                    <i-nav>
                                        <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
                                        <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
                                    </i-nav>
                                    <i-nav>
                                        <i-input class="item" placeholder="Type something..">
                                            <i-button variant="primary" slot="append">
                                                <font-awesome-icon icon="search" />
                                            </i-button>
                                        </i-input>
                                    </i-nav>
                                </i-navbar-items>
                            </i-navbar>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="12" >
                            <i-navbar size="lg" variant="dark">
                                <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
                                <i-navbar-items>
                                    <i-nav>
                                        <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
                                        <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
                                    </i-nav>
                                    <i-nav>
                                        <i-input class="item" placeholder="Type something..">
                                            <i-button variant="primary" slot="append">
                                                <font-awesome-icon icon="search" />
                                            </i-button>
                                        </i-input>
                                    </i-nav>
                                </i-navbar-items>
                            </i-navbar>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="12" >
                            <i-navbar collapse="lg">
                                <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
                                <i-navbar-items>
                                    <i-nav>
                                        <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
                                        <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
                                        <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
                                    </i-nav>
                                    <i-nav>
                                        <i-dropdown placement="bottom-end">
                                            <i-button variant="primary">Dropdown</i-button>
                                            <i-dropdown-menu>
                                                <i-dropdown-item href>Action</i-dropdown-item>
                                                <i-dropdown-item href>Another action</i-dropdown-item>
                                                <i-dropdown-item href disabled>Something disabled here</i-dropdown-item>
                                                <i-dropdown-divider />
                                                <i-dropdown-item>Separated item</i-dropdown-item>
                                            </i-dropdown-menu>
                                        </i-dropdown>
                                    </i-nav>
                                </i-navbar-items>
                            </i-navbar>
                        </i-column>

                        <i-column class="_margin-bottom-1" xs="12" >
                            <i-navbar :collapse="true">
                                <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
                                <i-navbar-items>
                                    <i-nav>
                                        <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
                                        <i-nav-item :to="{ name: 'index' }">About</i-nav-item>
                                    </i-nav>
                                </i-navbar-items>
                            </i-navbar>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>
export default {
    name: 'Navbars',
    data() {
        return {

        }
    }
}
</script>