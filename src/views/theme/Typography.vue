<template>
    <i-container class="_padding-0" fluid>
        <headings />
        <heading-helpers />
    </i-container>
</template>

<script>

import Headings from './Headings'
import HeadingHelpers from './HeadingHelpers'

export default {
    name: 'Typography',
    components: {
        Headings,
        HeadingHelpers
    }
}
</script>