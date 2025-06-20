<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import ProjectCard from "@/components/UI/ProjectCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Icon } from "@iconify/vue";
const projects = ref([
  {
    title: "Portfolio",
    description: "Mon portfolio personnel.",
    image: "/portfolio.png",
    tags: ["VueJs", "Tailwind css"],
    liveLinks: "https://github.com/j4ll4l/my-portfolio",
    codeLink: "",
  },
  {
    title: "MyMeteo",
    description: "Application météo.",
    image: "/mymeteo.png",
    tags: ["VueJs", "Tailwind css"],
    liveLinks: "https://github.com/j4ll4l/Meteo-Map-France-Suisse",
    codeLink: "",
  },
  {
    title: "ToDo List",
    description: "Gestionnaire de tâches.",
    image: "/todo.png",
    tags: ["VueJs", "Tailwind css"],
    liveLinks: "https://github.com/j4ll4l/To_Do_List",
    codeLink: "",
  },
]);

//Navigation options
const navigationOptions = {
  prevEl: ".swiper-prev",
  nextEl: ".swiper-next",
};
</script>

<template>
 
  <section id="projects" class="relative w-full mx-auto">
    <SectionHeader title="My Projects" />
    <!-- Custom Buttons  -->
    <button
      class="swiper-prev absolute top-2/3 left-4 rounded-full w-12 h-12 flex items-center justify-center transform -translate-y-1/2 z-10 text-white dark:bg-[#080326] bg-primary"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-2/3 right-4 rounded-full w-12 h-12 flex items-center justify-center transform -translate-y-1/2 z-10 text-white dark:bg-[#080326] bg-primary"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>

    <!-- Component -->
    <swiper
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
     :navigation ="navigationOptions"
      loop
      pagination
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32 "
      
    >
      <swiper-slide
        class="max-w-[300px]"
        v-for="(project, idx) in projects"
        :key="idx"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :tags="project.tags"
          :liveLinks="project.liveLinks"
          :codeLink="project.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>
