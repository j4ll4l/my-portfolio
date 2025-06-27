<template>
    <section class="p-16">
        <header class="text-center">
            <h3 class=" text-4xl font-bold text-primary dark:text-secondary" >Education</h3>
        </header>
        <ul class=" mt-10 space-y-8 y-8" >
            <li
            class="w-full rounded-xl  border bg-primary  "
            v-for="(item,idx) in Education " :key="idx"
            >
                <article class="flex flex-col lg:flex-row items-center lg:items-start rounded-[12px] bg-white dark:bg-primary
                mt-[3px] mx-[3px] mb-[3px] p-6 md:p-8 lg:p-10">
            <figure class=" w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
                <Icon icon="hugeicons:university" class=" text-4xl md:text-6xl lg:text-7xl dark:text-secondary" />
            </figure>
            <section class=" w-full lg:w-3/4 lg:pl-4 text-center lg:text-left">
                <header>
                    <h3 class="text-l md:text-lg lg:text-xl font-semibold uppercase  dark:text-secondary">{{ item.school }}</h3>
                </header>
                <p class="  text-sm md:text-base dark:text-white">{{ item.degree }}</p>
                <p class="  text-sm md:text-base dark:text-white">{{ item.duration }}</p>
            </section>
                </article>
            </li>
        </ul>
    </section>
</template>

<script setup>

import { ref } from 'vue';

const Education = ref([
    // {
    //     duration:'01/09/2020-30/06/2022',
    //     school:'Université Lyon 1',
    //     degree:' Informatique'
    // },
    {
        duration:'13/12/2024-28/11/2025',
        school:'CCI Pro',
        degree:'Titre professionelle niveau Bac+2'
    },
    {
        duration:'01/09/2015-10/07/2019',
        school:'I.T.I.S E.Majorana',
        degree:'Baccalauréat en Infromatique'
    }
])

</script>