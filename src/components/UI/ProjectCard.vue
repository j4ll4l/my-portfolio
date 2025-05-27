<script setup>
defineProps({
  title: { type: String, required: true, default: "Project Title" },
  description: { type: String, required: true, default: "Project Description" },
  image: { type: String, required: true },
  tags: {
    type: String,
    required: true,
    default: () => ["vuejs", "Tailwind css"],
  },
  liveLinks: { type: String, required: false },
  codeLinks: { type: String, required: false },
});
</script>

<template>
  <article
    class="max-w-sm overflow-hidden shadow-lg rounded border border-secondary dark:bg-[#ffffff29] bg-primary"
  >
    <!-- Card Image -->
    <figure class="">
      <img :src="image" alt="Image Project" class="w-full h-48 object-cover" />
    </figure>

    <!-- Card Content -->
    <section class="px-6 py-4">
      <header>
        <h3 class="font-bold text-xl mn-2 text-white">{{ title }}</h3>
      </header>
    </section>

    <!-- TAG'S -->
    <div class="px-6 pt-4 pb-2">
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(tag, idx) in tags"
          :key="idx"
          class="inline-block dark:bg-primary bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold"
        >
          #{{ tag }}
        </li>
      </ul>
    </div>

    <!-- Link's -->
    <div class="px-6 pb-4 flex justify-between items-center">
      <a
        :href="liveLinks"
        v-if="liveLinks"
        class="text-seconadry font-semibold hover:underline text-sm"
        >Live Demo</a
      >
      <a
        :href="codeLinks"
        v-if="codeLinks"
        class="text-secondary font-semibold hover:underline text-sm"
        >View Code</a
      >
    </div>
  </article>
</template>
