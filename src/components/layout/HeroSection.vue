<script setup>
    import Button from "@/components/UI/Button.vue";
</script>

<template>
  <section
    class="flex justify-center items-center dark:text-white min-h-screen mt-20 lg:mt-0"
  >
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#393E46] via-[#948979] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#393E46] via-[#948979] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <main
      class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8"
    >
      <header class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          👋Hi, I'm
          <span
            class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary"
            >Jallal</span
          >
        </h1>
        <!-- TODO Ajoute des couleur pour le language -->
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          Développeur web passionné, je crée des sites modernes et fonctionnels
          avec PHP, Symfony, MySQL, JavaScript et Vue.js. Disponible pour stage
          ou emploi en développement web.
        </p>
        <div class="mt-6 flex justify-center lg:justify-start">
            <Button label="Hire me" />
            <a href="" class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary
            rounded-full ml-2 border-2 dark:border hover:scale-105 bg-white dark:bg-transparent
            flex justify-center items-center text-primary border-primary">
            <Icon icon="line-md:download-loop" class="text-3xl" />
            <span class="ml-1">Resume</span>
        </a>
        </div>
        
      </header>
    </main>
  </section>
</template>
