<template>
  <div class="snowfall">
    <div 
      v-for="flake in snowflakes" 
      :key="flake.id"
      class="snowflake"
      :style="flake.style"
    >
      ❄
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 50
  }
})

const snowflakes = ref([])

onMounted(() => {
  for (let i = 0; i < props.count; i++) {
    snowflakes.value.push({
      id: i,
      style: {
        left: Math.random() * 100 + '%',
        animationDuration: (Math.random() * 3 + 2) + 's',
        animationDelay: Math.random() * 5 + 's',
        fontSize: (Math.random() * 10 + 10) + 'px',
        opacity: Math.random() * 0.7 + 0.3
      }
    })
  }
})
</script>

<style scoped>
.snowfall {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -10%;
  color: #fff;
  user-select: none;
  animation: fall linear infinite;
}

@keyframes fall {
  to {
    transform: translateY(100vh);
  }
}
</style>