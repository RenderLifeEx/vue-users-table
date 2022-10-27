<template>
  <th scope="col">
    <span v-if="!sortKey">{{ name }}</span>
    <div
      v-else
      class="thSort"
      @click.left="$emit('handleSortClick', sortKey)"
    >
      <span
        class="thSort__name"
        :class="{isActive: sortType === sortKey}"
      >{{ name }}</span>
      <i class="thSort__icon" :class="sortType === sortKey ? sortDirection : ''"></i>
    </div>
  </th>
</template>

<script setup lang="ts">
  import { defineProps, toRefs } from "vue"

  const props = defineProps(['name', 'sortType', 'sortDirection', 'sortKey'])

  const { name, sortType, sortDirection, sortKey } = toRefs(props)
</script>

<style scoped lang="scss">
    @import './styles.scss';
</style>