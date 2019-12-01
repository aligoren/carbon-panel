<template>
    <i-row class="_margin-bottom-2">
        <i-column xs="12">
            <i-card>
                <h4 class="_margin-top-0"><i class="fas fa-font"></i> Headings</h4>

                <i-table responsive>
                    <thead>
                        <tr>
                            <th>Heading</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(heading, index) in headings" :key="index">
                            <td>
                                <code>{{ heading.tag }}</code>
                            </td>
                            <td v-html="heading.example"></td>
                        </tr>
                    </tbody>
                </i-table>
            </i-card>
        </i-column>
    </i-row>
</template>

<script>
export default {
    name: 'TypoHeadings',
    data() {
        return {
            headings: [
                {
                    tag: '<h1></h1>',
                    example: '<h1>h1. Inkline heading</h1>'
                },
                {
                    tag: '<h2></h2>',
                    example: '<h2>h2. Inkline heading</h2>'
                },
                {
                    tag: '<h3></h3>',
                    example: '<h3>h3. Inkline heading</h3>'
                },
                {
                    tag: '<h4></h4>',
                    example: '<h4>h4. Inkline heading</h4>'
                },
                {
                    tag: '<h5></h5>',
                    example: '<h5>h5. Inkline heading</h5>'
                },
                {
                    tag: '<h6></h6>',
                    example: '<h6>h6. Inkline heading</h6>'
                }
            ]
        }
    }
}
</script>