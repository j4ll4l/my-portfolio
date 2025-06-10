<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(() => import('@/components/layout/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'));
const Skills = defineAsyncComponent(() => import('@/components/layout/Skills.vue'));
const Whyme = defineAsyncComponent(() => import('@/components/layout/Whyme.vue'));
const Projects = defineAsyncComponent(() => import('@/components/layout/Projects.vue'));
const Contact = defineAsyncComponent(() => import('@/components/layout/Contact.vue'));
const Footer = defineAsyncComponent(() => import('@/components/layout/Footer.vue'));
</script>

<template>
<div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
  <NavBar />
  <HeroSection />
  <Skills />
  <Whyme />
  <Projects />
  <Contact />
  <Footer />
</div>
</template>

<style scoped>

</style>
