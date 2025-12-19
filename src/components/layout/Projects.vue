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
    codeLinks: "https://github.com/j4ll4l/my-portfolio",
    liveLinks: "",
  },
  {
    title: "MyMeteo",
    description: "Application météo.",
    image: "/mymeteo.png",
    tags: ["Js", "Bootstrap css"],
    codeLinks: "https://github.com/j4ll4l/Meteo-Map-France-Suisse",
    liveLinks: "https://j4ll4l.github.io/Meteo-Map-France-Suisse/",
  },
  {
    title: "ToDo List",
    description: "Gestionnaire de tâches.",
    image: "/todo.png",
    tags: ["Js", "Bootstrap css"],
    codeLinks: "https://github.com/j4ll4l/To_Do_List",
    liveLinks: "https://j4ll4l.github.io/To_Do_List/",
  },
  {
    title: "La Conciergerie Auto",
    description: "Service de conciergerie automobile",
    image: "/carmove.PNG",
    tags: ["VueJs", "TypeScript","Css","Symfony"],
    codeLinks: "https://github.com/j4ll4l/LaConciergerie.git",
    liveLinks: "",
  },
  {
    title: "Boutique Greg",
    description: "TP Boutique pour apprendre VueJs et Typescript",
    image: "/logo_tp_boutique.png",
    tags: ["VueJs", "TypeScript","Bootstrap Css"],
    codeLinks: "https://github.com/j4ll4l/Boutique-Greg",
    liveLinks: "https://shop.gregdesplaces.com/",
  },
  {
    title: "Gestionnaire de ressource digitales",
    description: "Gestion de ressource ",
    image: "/logo_epotion.png",
    tags: ["VueJs", "TypeScript","Symfony Css"],
    codeLinks: "https://github.com/j4ll4l/Gestionnaire-de-ressources-digitales",
    liveLinks: "",
  },
  {
    title: "Portfolio",
    description: "Mon portfolio personnel.",
    image: "/portfolio.png",
    tags: ["VueJs", "Tailwind css"],
    codeLinks: "https://github.com/j4ll4l/my-portfolio",
    liveLinks: "",
  },
  {
    title: "MyMeteo",
    description: "Application météo.",
    image: "/mymeteo.png",
    tags: ["Js", "Bootstrap css"],
    codeLinks: "https://github.com/j4ll4l/Meteo-Map-France-Suisse",
    liveLinks: "https://j4ll4l.github.io/Meteo-Map-France-Suisse/",
  },
  {
    title: "ToDo List",
    description: "Gestionnaire de tâches.",
    image: "/todo.png",
    tags: ["Js", "Bootstrap css"],
    codeLinks: "https://github.com/j4ll4l/To_Do_List",
    liveLinks: "https://j4ll4l.github.io/To_Do_List/",
  },
  {
    title: "La Conciergerie Auto",
    description: "Service de conciergerie automobile",
    image: "/carmove.PNG",
    tags: ["VueJs", "TypeScript","Css","Symfony"],
    codeLinks: "https://github.com/j4ll4l/LaConciergerie.git",
    liveLinks: "",
  },
  {
    title: "Boutique Greg",
    description: "TP Boutique pour apprendre VueJs et Typescript",
    image: "/logo_tp_boutique.png",
    tags: ["VueJs", "TypeScript","Bootstrap Css"],
    codeLinks: "https://github.com/j4ll4l/Boutique-Greg",
    liveLinks: "https://shop.gregdesplaces.com/",
  },
  {
    title: "Gestionnaire de ressource digitales",
    description: "Gestion de ressource ",
    image: "/logo_epotion.png",
    tags: ["VueJs", "TypeScript","Symfony Css"],
    codeLinks: "https://github.com/j4ll4l/Gestionnaire-de-ressources-digitales",
    liveLinks: "",
  }
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
          :codeLinks="project.codeLinks"
          :liveLinks="project.liveLinks"
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