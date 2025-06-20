<script setup>
import { ref } from 'vue';

const Experience = ref([
    {
        duration:'01/04/2019-31/05/2019',
        title:'Developpeur web',
        company:'Sirius'
    },
    {
        duration:'01/06/2018-31/07/2018',
        title:'Ass. Responsable',
        company:'INPS Turin'
    }
])
</script>

<template>
    <section class="p-16 ">
        <header class="text-center">
            <h3 class=" text-4xl font-bold text-primary dark:text-secondary" >Experience</h3>
        </header>
        <ul class=" mt-10 space-y-8 y-8  " >
            <li
            class=" w-full rounded-xl  border bg-primary "
            v-for="(item,idx) in Experience " :key="idx"
            >
                <article class="flex flex-col lg:flex-row items-center lg:items-start rounded-[8px] bg-white dark:bg-primary
                mt-[3px] mx-[3px] mb-[3px]  p-6 md:p-8 lg:p-10">
            <figure class=" w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
                <Icon icon="material-symbols-light:work" class=" text-4xl md:text-6xl lg:text-7xl dark:text-secondary" />
            </figure>
            <section class=" w-full lg:w-3/4 lg:pl-4 text-center lg:text-left ">
                <header>
                    <h3 class="text-l md:text-lg lg:text-xl font-semibold uppercase  dark:text-secondary">{{ item.title }}</h3>
                </header>
                <p class="  text-sm md:text-base dark:text-white">{{ item.company }}</p>
                <p class="  text-sm md:text-base dark:text-white">{{ item.duration }}</p>
            </section>
                </article>
            </li>
        </ul>
    </section>
</template>