<template>
  <a-drawer  v-model:open="props.isShow" title="详情" placement="right">
    <a-row :gutter="[8, 8]">
      <a-col v-for="k in dkeys" :key="k" :span="12">{{ k }}</a-col>
    </a-row>
  </a-drawer>
</template>
<script lang="ts" setup>
import { Ref } from 'vue';

const props = defineProps<{
  isShow: boolean,
  detailInfo: Record<string, string | number | boolean>
}>()


console.log('==========',props.detailInfo)

const dkeys = ['1', '2']//Object.keys(props.detailInfo)

</script>
<style lang="postcss" scope>
  
</style>
