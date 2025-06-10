<script setup>
import logo from '@/assets/images/logo.png'
</script>

<template>
    <footer class=" z-10 text-white border-t-2 border-t-white bg-primary mt-20 dark:bg-secondary">
        <div class="container p-8 flex justify-between items-center">
            <img :src="logo" alt="Logo" class="w-16 h-16 object-contain" />
            <div class="flex ml-2 dark:text-primary">All rights reserved</div>
        </div>
    </footer>
</template>