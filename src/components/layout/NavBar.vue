<template>
  <header>
    <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
      <div id="logo" :style="{ backgroundImage: `url(${logo})` }" class="text-3xl font-bold dark:text-white"></div>

      <!-- Mobile Button -->
      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            v-if="isMenuOpen"
            class="text-5xl md:text-primary text-white dark:text-white  bg-transparent"
          >
            <Icon icon="material-symbols:close" />
          </span>
          <span
            v-else
            class="text-5xl md:text-primary text-white dark:text-white"
          >
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>

      <!-- NavBar -->
   
      <nav
        :class="[
          `fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#D4EBF8]
       dark:bg-[#080326]  md:relative  md:flex md:justify-between md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`, 'md:flex'
        ]"
      >
        <ul
          class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
        >
          <li v-for="item in menu" :key="item.name">
            <a
              :href="item.href"
              class="block transition ease-linear md:text-lg lg:text-xl font-bold text-wite md:text-primary hover:text-white dark:text-secondary dark:hover:text-white"
              @click="scrollSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
        <button @click="toggleDarkMode"  class="text-white ml-20 z-10 hidden md:block">
            <Icon v-if="!isDarkMode"icon="line-md:moon-filled" class="text-5xl text-primary" />
            <Icon v-else icon="line-md:sunny-outline" class="text-5xl text-secondary" />
        </button>
      </nav>
    </div>
  </header>
</template>
<script setup>
import logo from '@/assets/images/logo.png'
import { ref } from "vue";
const isMenuOpen = ref(false);
const menu = ref([
  { name: "Home", href: "#home" },
  { name: "Stack", href: "#skills" },
  { name: "Why me?", href: "#whyme" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

const scrollSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const isDarkMode = ref(localStorage.getItem("theme") === "dark");
const toggleDarkMode = () => {
  const html = document.documentElement;
    if (isDarkMode.value) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }

    isDarkMode.value = !isDarkMode.value;
};
</script>
<style >
#logo{
    background-image: url('@/assets/images/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
}
</style>
