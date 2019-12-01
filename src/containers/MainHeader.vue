<template>
    <i-layout-header class="_fixed-top header-fixed">
      Header place
    </i-layout-header>
</template>

<script>
export default {
    name: 'MainHeader',
}
</script>

<style>
.header-fixed {
  background-color: #fff !important;
  position: sticky;
  right: 0;
  left: 0;
  z-index: 1030;
  margin-bottom: 0.3rem;
}
</style>