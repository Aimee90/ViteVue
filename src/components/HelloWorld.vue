<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string; name: string }>();
const count = ref(0);
</script>
<template>
  <h1>hello {{ name }}</h1>
  <P>create by {{ msg }}</P>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
