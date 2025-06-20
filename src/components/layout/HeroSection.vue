<script setup>
import Button from "@/components/UI/Button.vue";
</script>

<template>
  <section
    class="flex justify-center items-center dark:text-white min-h-screen mt-0 lg:mt-0"
  >
    <main
      class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8"
    >
      <header class="text-center lg:text-left order-2 lg:order-1 typewriter">
        <h1
          class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-secondary"
        >
          Hi, I'm
          <span
            class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary"
            >Jallal</span
          >👋
        </h1>

        <p
          class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold text-[#393E46] dark:text-white"
        >
          Développeur web débutant et passionné, je me forme activement à la
          création de sites modernes et fonctionnels en utilisant
          <span class="text-primary dark:text-secondary font-bold">PHP</span>,
          <span class="text-primary dark:text-secondary font-bold">Symfony</span
          >,
          <span class="text-primary dark:text-secondary font-bold">MySQL</span>,
          <span class="text-primary dark:text-secondary font-bold"
            >JavaScript</span
          >
          et
          <span class="text-primary dark:text-secondary font-bold">Vue.js</span
          >. Curieux et motivé, je cherche un stage ou un premier emploi pour
          continuer à progresser et mettre mes compétences en pratique dans des
          projets concrets.
        </p>
        <div class="mt-6 flex justify-center lg:justify-start">
          <Button label="Hire me" />
          <a
            href="/cv_jallal.pdf"
            download
            class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 dark:border hover:scale-105 bg-white dark:bg-transparent flex justify-center items-center text-primary border-primary"
          >
            <Icon icon="line-md:download-loop" class="text-3xl" />
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </header>
      <aside
        class="container flex justify-center lg:justify-end mt-0 items-center flex-wrap order-1 lg:order-2"
      >
     
        <figure
          class="card relative -mt-[150px] mb-8 m-[30px] md:w-[420px] md:h-[420px] md:before:w-[450px] md:before:h-[450px] w-[280px] h-[350px] before:w-[300px] before:h-[300px] "
        >
          <div
            class="relative w-full h-full bg-cover transform translate-x-[10px] translate-y-[10px]"
          >
            <img
              src="@/assets/images/avatar_light.jpg"
              alt="Light"
              class="block dark:hidden max-w-1/2"
              loading="lazy"
            />
            <img
              src="@/assets/images/avatar_dark.jpg"
              alt="Dark"
              class="hidden dark:block max-w-1/2"
              loading="lazy"
            />
          </div>
        </figure>
      </aside>
    </main>
    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence
          x="0"
          y="0"
          baseFrequency="0.2"
          numOctaves="5"
          seed="1"
        ></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
  </section>
</template>
<style scoped>
.container .card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
}

.container .card:nth-of-type(1):before {
  filter: url(#wavy1);
}

.typewriter h1 {
  overflow: hidden;
  border-right: 0.15em solid var(--caret-color, #222831);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}
:global(html.dark) .typewriter h1 {
  --caret-color: #dfd0b8;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--caret-color, #222831);
  }
  100% {
    border-color: transparent;
  }
}
@keyframes blink-caret-dark {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #dfd0b8;
  }
  100% {
    border-color: transparent;
  }
}
</style>
