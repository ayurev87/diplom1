<template>
  <HeaderBlock />
  <MainBlock />
  <Requisition />
</template>

<script>
import HeaderBlock from './components/header.vue'
import MainBlock from './components/main.vue'
import Requisition from './components/requisition.vue';

export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock,
    Requisition,
  }
}
</script>

<style lang="scss"></style>
