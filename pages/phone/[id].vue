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
  <CustomHeader>
    {{ phone.name }}
  </CustomHeader>
  <main class="px-3">
    <section>
      <NuxtLink
        to="/"
        class="underline text-emerald-800 visited:text-purple-500"
      >
        Go back!
      </NuxtLink>
    </section>
    <section>
      <img :src="'/' + phone.imageFileName" />
    </section>
  </main>
</template>
