<script setup>
definePageMeta({
  layout: false,
});
const {
  params: { id },
} = useRoute();
const { data: phonesRef } = await useFetch("/api/phones");
const phone = phonesRef.value.find((p) => p.id === parseInt(id));
const currentPhone = useCurrentPhone();
currentPhone.value = phone;
</script>

<template>
  <div class="h-screen overflow-auto">
    <CustomHeader>
      {{ phone.name }}
    </CustomHeader>
    <main
      class="px-3 sm:flex sm:flex-col sm:items-center sm:flex-grow overflow-auto"
    >
      <section class="sm:self-start">
        <NuxtLink
          to="/"
          class="underline text-emerald-800 visited:text-purple-500"
        >
          Go back!
        </NuxtLink>
      </section>
      <section
        class="flex flex-col gap-3 sm:max-w-3xl sm:shadow-lg sm:p-4 overflow-auto flex-grow"
      >
        <div class="flex justify-center">
          <img :src="'/' + phone.imageFileName" class="w-96" />
        </div>
        <div class="flex">
          <p aria-label="price" class="text-4xl">$ {{ phone.price }}</p>
        </div>
        <section class="flex-grow overflow-auto">
          <div class="flex gap-2 flex-col">
            <h1 class="font-semibold text-xl">Description</h1>
            <p>
              {{ phone.description }}
            </p>
          </div>
          <div>
            <div class="flex gap-2 flex-col">
              <h1 class="font-semibold text-xl">Manufacturer</h1>
              <p class="capitalize">
                {{ phone.manufacturer }}
              </p>
            </div>
          </div>
          <div>
            <div class="flex gap-2 flex-col">
              <h1 class="font-semibold text-xl">Color</h1>
              <p class="capitalize">
                {{ phone.color }}
              </p>
            </div>
          </div>
          <div>
            <div class="flex gap-2 flex-col">
              <h1 class="font-semibold text-xl">Screen</h1>
              <p>
                {{ phone.screen }}
              </p>
            </div>
          </div>
          <div>
            <div class="flex gap-2 flex-col">
              <h1 class="font-semibold text-xl">Processor</h1>
              <p>
                {{ phone.processor }}
              </p>
            </div>
          </div>
          <div>
            <div class="flex gap-2 flex-col">
              <h1 class="font-semibold text-xl">Ram</h1>
              <p>{{ phone.ram }} GB</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>
