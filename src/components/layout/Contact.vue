<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Input from "@/components/UI/Input.vue";
import { ref } from "vue";

const inputs = ref([
  {
    id: "email",
    label: "Votre email",
    type: "text",
    placeholder: "email@example.com",
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Comment je peux aider ",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Description",
    rows: 6,
  },
]);
</script>

<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form action="" class="space-y-8">
        <div v-for="(item,idx) in inputs" :key="idx">
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<style></style>
