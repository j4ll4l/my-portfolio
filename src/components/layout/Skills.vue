<template>
    <section class="mt-32" id="skills">
        <SectionHeader title="My Skills" />
        <div class="mt-20 flex justify-center">
            <ul class="flex flex-wrap justify-center items-center">
                <li
                ref="skillRefs"
                v-for="(skill,index) in skills" :key="index" :class="`mx-[30px] rounded-[12px] mb-7 bg-gradient-to-t ${skill.bgGradient}`"
                >
                    <div class="rounded-[12px] bg-primary mt-[3px] p-12 md:p-5 text-center">
                        <h3 class=" font-bold text-[35px] text-white dark:text-secondary flex items-center justify-center">
                            <CountUp v-if="visibleItems[index]" :endVal="skill.percentage" :startVal="0" :duration="4" /> %
                        </h3>
                        <p class="font-normal text-[16px]" :style="{ color:skill.textColor }">{{ skill.title }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>

import { ref,onMounted } from'vue';
import SectionHeader from "@/components/UI/SectionHeader.vue";
import CountUp from 'vue-countup-v3';
const skills = ref([
    {
        title:'HTML',
        percentage:95,
        bgGradient:'to-[#dd584f99] from-[#1f1e1c99]',
        textColor:'#dd584f99'
    },
    {
        title:'CSS',
        percentage:90,
        bgGradient:'to-[#00a9ff99] from-[#1f1e1c99]',
        textColor:'#00a9ff99'
    },
    {
        title:'Js',
        percentage:70,
        bgGradient:'to-[#acac39] from-[#1f1e1c99]',
        textColor:'#acac39'
    },
    {
        title:'Vuejs',
        percentage:65,
        bgGradient:'to-[#59c37899] from-[#1f1e1c99]',
        textColor:'#59c378'
    },
    {
        title:'Php',
        percentage:70,
        bgGradient:'to-[#ff9a0099] from-[#1f1e1c99]',
        textColor:'#ff9a0099'
    },
    {
        title:'MySQL',
        percentage:80,
        bgGradient:'to-[#9e00ff99] from-[#1f1e1c99]',
        textColor:'#9e00ff99'
    },
    {
        title:'Symfony',
        percentage:60,
        bgGradient:'to-[#ff9a0099] from-[#1f1e1c99]',
        textColor:'#ff9a0099'
    },
])

const visibleItems = ref(skills.value.map(()=>false));
const skillRefs = ref([]);

onMounted(()=>{
    const observer = new IntersectionObserver(
        (entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    const index=skillRefs.value.indexOf(entry.target);
                    if(index !== -1){
                        visibleItems.value[index] = true;
                    }
                }
            })
        },
        {threshold:0.3}
    );

    skillRefs.value.forEach((el) => observer.observe(el));
})
</script>