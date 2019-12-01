<template>
    <i-container class="_padding-0" fluid>
        <brand-colors />
        <state-colors />
        <basic-colors />
        <neutral-colors />
        <social-media-colors />
    </i-container>
</template>

<script>

import BrandColors from './BrandColors'
import StateColors from './StateColors'
import BasicColors from './BasicColors'
import NeutralColors from './NeutralColors'
import SocialMediaColors from './SocialMediaColors'

export default {
    name: 'Colors',
    components: {
        BrandColors,
        StateColors,
        BasicColors,
        NeutralColors,
        SocialMediaColors
    }
}
</script>