<script setup>
import { ref,onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const handleScroll = () =>{
    isVisible.value = scrollY>300;
}
const scrollToTop= () =>{
    scrollTo({top:0,behavior:'smooth'})
}
onMounted(()=>{
    addEventListener('scroll',handleScroll)
})
onUnmounted(()=>{
    removeEventListener('scroll',handleScroll)
})
</script>
<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 bg-gradient-to-r bg-primary dark:bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-[#D4EBF8] hover:text-primary dark:hover:bg-[#080326] dark:hover:text-secondary"
  >
    <Icon icon="line-md:arrow-up" class="font-bold" />
  </button>
</template>
