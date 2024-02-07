<template>
  <HeaderBlock />
  <MainBlock />
  <Requisition />
  <Protection />
  <Comfort />
  <Advantage />
  <Footer />
</template>

<script>
import HeaderBlock from './components/header.vue'
import MainBlock from './components/main.vue'
import Requisition from './components/requisition.vue';
import Protection from './components/protection.vue';
import Comfort from './components/comfort.vue';
import Advantage from './components/advantage.vue';
import Footer from './components/footer.vue';


export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock,
    Requisition,
    Protection,
    Comfort,
    Advantage,
    Footer,
  }
}
</script>

<style lang="scss"></style>
