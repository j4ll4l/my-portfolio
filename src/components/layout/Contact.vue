<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
import { ref } from "vue";

const inputs = ref([
  {
    id: "name",
    label: "Nom",
    type: "text",
    placeholder: "Votre Nom ",
  },
  {
    id: "email",
    label: "Votre email",
    type: "email",
    placeholder: "email@example.com",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Description",
    rows: 6,
  },
]);
const errors = ref("");
const formData = ref({ name: "", email: "", message: "" });

function handleInput(id, value) {
  formData.value[id] = value;
}

function validateForm() {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    errors.value = "Tous les champs sont obligatoires.";
    return false;
  }
  // Email simple validation
  if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value = "L'email n'est pas valide.";
    return false;
  }
  errors.value = "";
  return true;
}

function handleSubmit(e) {
  if (!validateForm()) {
    e.preventDefault();
  }
}
</script>

<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        class="space-y-8"
        @submit="handleSubmit"
      >
        <!-- Clé d'accès Web3Forms -->
        <input
          type="hidden"
          name="apikey"
          value="36b32774-b242-4b1b-a7c9-b212ca48a1cc"
        />

        <div v-for="(item, idx) in inputs" :key="idx">
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
            :name="item.id"
            required
            @input="handleInput(item.id, $event.target.value)"
          />
        </div>
        <div v-if="errors" class="text-red-500 font-bold">{{ errors }}</div>
        <div class="flex justify-between">
          <!-- Redirection après succès -->
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <Button label="Envoyez" />
          <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
            <a
              href="https://x.com/jallaldev"
              target="_blank"
              class="text-gray-600 hover:text-gray-800"
            >
              <Icon icon="simple-icons:x" style="font-size: 2rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/jallal-en-naour-3831891a3"
              target="_blank"
              class="text-gray-600 hover:text-blue-700"
            >
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>
            <a
              href="https://github.com/j4ll4l"
              target="_blank"
              class="text-gray-600 hover:text-gray-800"
            >
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style></style>
