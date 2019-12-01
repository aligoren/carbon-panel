<template>
  <i-layout>
    
    

    <i-layout vertical>

      
      
      <main-sidebar />

      <main-content />
      
    </i-layout>
  </i-layout>
</template>

<script>


import MainSidebar from './MainSidebar'
import MainContent from './MainContent'

export default {
  name: 'Container',
  components: {
    MainSidebar,
    MainContent
  }
}
</script>

