<template>
    <i-container class="_padding-0" fluid>
        <i-row class="_margin-bottom-2">
            <i-column xs="12" class="_margin-bottom-1">
                <p>
                    <strong>Variants: </strong> 
                    <code>primary</code>, <code>secondary</code>, 
                    <code>light</code>, <code>dark</code>,
                    <code>success</code>, <code>danger</code>, 
                    <code>warning</code>, <code>info</code>
                </p>
                <p>
                    <strong>Sizes: </strong> <code>sm</code>, <code>md</code>, <code>lg</code>
                </p>
            </i-column>
            <i-column xs="12">
                <i-card>
                    <i-row class="_padding-1">
                        <i-column xs="12"><h4 class="_margin-top-0"><i class="fas fa-box"></i> Card Title</h4></i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="light">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="dark">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="primary">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="secondary">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                    </i-row>
                    <i-row class="_padding-1 _margin-bottom-1">
                        <i-column xs="3">
                            <i-card size="sm" variant="success">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="danger">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="warning">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="info">
                                <h4 class="title">Card Title</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                    </i-row>

                    <i-row class="_padding-1 _margin-bottom-1">
                        <i-column xs="12"><h4 class="_margin-top-0"><i class="fas fa-box"></i> Header & Footer</h4></i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="warning">
                                <template slot="header">Card Header</template>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                <template slot="footer">Card Footer</template>
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="danger">
                                <template slot="header">Card Header</template>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                <template slot="footer">Card Footer</template>
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="dark">
                                <template slot="header">Card Header</template>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                <template slot="footer">Card Footer</template>
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="success">
                                <template slot="header">Card Header</template>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                <template slot="footer">Card Footer</template>
                            </i-card>
                        </i-column>
                    </i-row>

                    <i-row class="_padding-1">
                        <i-column xs="12"><h4 class="_margin-top-0"><i class="fas fa-box"></i> Card Images</h4></i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="warning">
                                <img height="150" slot="image" src="https://cataas.com/cat?he=150" alt="Card Image" />
                                <h4 class="title">Card Image</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="danger">
                                <img height="150" slot="image" src="https://cataas.com/cat?he=150" alt="Card Image" />
                                <h4 class="title">Card Image</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="dark">
                                <img height="150" slot="image" src="https://cataas.com/cat?he=150" alt="Card Image" />
                                <h4 class="title">Card Image</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                
                            </i-card>
                        </i-column>
                        <i-column xs="3">
                            <i-card size="sm" variant="success">
                                <img height="150" slot="image" src="https://cataas.com/cat?he=150" alt="Card Image" />
                                <h4 class="title">Card Image</h4>
                                <p class="subtitle">Card Subtitle</p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </i-card>
                        </i-column>
                    </i-row>
                </i-card>
            </i-column>
        </i-row>
    </i-container>
</template>

<script>

export default {
    name: 'Cards',
    data() {
        return {
        }
    }
}
</script>