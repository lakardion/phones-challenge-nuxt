<script setup>
const { data, pending } = await useFetch("/api/phones");
</script>
<template>
  <main class="flex flex-grow p-3">
    <ul>
      <li v-for="phone in data" key="phone.id">
        <header>
          <NuxtLink :to="'/phone/' + phone.id">
            <h1 class="text-xl">
              {{ phone.name }}
            </h1>
          </NuxtLink>
        </header>
      </li>
    </ul>
  </main>
</template>
