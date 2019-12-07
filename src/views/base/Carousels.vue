<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12">
                <i-card>
                    <i-row>
                        <i-column xs="3">
                            <h4 class="_margin-top-0">
                                <i class="fas fa-images"></i> vue-awesome-swiper
                                <i-badge class="_float-right"><a href="https://github.surmon.me/vue-awesome-swiper/" target="_blank">docs</a></i-badge>
                            </h4>
                            
                            <swiper :options="swiperOptions.standart">
                                <swiper-slide v-for="(image, index) in swiperImages" :key="index">
                                    <img :src="image" alt="">
                                </swiper-slide>
                                
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </i-column>
                        <i-column xs="3">
                            <h4 class="_margin-top-0">
                                <i class="fas fa-images"></i> vue-awesome-swiper
                                <i-badge class="_float-right"><a href="https://github.surmon.me/vue-awesome-swiper/" target="_blank">docs</a></i-badge>
                            </h4>
                            
                            <swiper :options="swiperOptions.pagination">
                                <swiper-slide v-for="(image, index) in swiperImages" :key="index">
                                    <img :src="image" alt="">
                                </swiper-slide>
                                
                                <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                        </i-column>
                        <i-column xs="3">
                            <h4 class="_margin-top-0">
                                <i class="fas fa-images"></i> vue-awesome-swiper
                                <i-badge class="_float-right"><a href="https://github.surmon.me/vue-awesome-swiper/" target="_blank">docs</a></i-badge>
                            </h4>
                            
                            <swiper :options="swiperOptions.progressbar">
                                <swiper-slide v-for="(image, index) in swiperImages" :key="index">
                                    <img :src="image" alt="">
                                </swiper-slide>
                                
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </i-column>
                        <i-column xs="3">
                            <h4 class="_margin-top-0">
                                <i class="fas fa-images"></i> vue-awesome-swiper
                                <i-badge class="_float-right"><a href="https://github.surmon.me/vue-awesome-swiper/" target="_blank">docs</a></i-badge>
                            </h4>
                            
                            <swiper :options="swiperOptions.progressbarLoop">
                                <swiper-slide v-for="(image, index) in swiperImages" :key="index">
                                    <img :src="image" alt="">
                                </swiper-slide>
                                
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'Carousels',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOptions: {
                standart: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    },
                },
                pagination: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                },
                progressbar: {
                    pagination: { el: '.swiper-pagination', type: 'progressbar' },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                progressbarLoop: {
                    loop: true,
                    pagination: { el: '.swiper-pagination', type: 'progressbar', clickable: true },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            },
            swiperImages: [
                'https://picsum.photos/600/250?id=1',
                'https://picsum.photos/600/250?id=2',
                'https://picsum.photos/600/250?id=3',
                'https://picsum.photos/600/250?id=4',
            ]
        }
    }
}
</script>