<script setup>
const { data, pending } = await useFetch("/api/phones");
</script>
<template>
  <div v-if="pending">Loading...</div>
  <div v-else class="bg-red-500">{{ data }}</div>
</template>
