<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(() => import('@/components/layout/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'));
</script>

<template>
<div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
  <NavBar />
  <HeroSection />
</div>
</template>

<style scoped>

</style>
