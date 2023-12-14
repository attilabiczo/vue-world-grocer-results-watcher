<script setup lang="ts">
import { defineProps } from "vue"

type MarkerBoxProps = {
  heading: string,
  title: number
}

defineProps<MarkerBoxProps>()
</script>

<template>
  <div class="marker-box level-item has-text-centered">
    <div class="box">
      <p class="heading">{{ heading }}</p>
      <p class="title">{{ myCompany.filters.formatNumber(title) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "custom-marker-box"
}
</script>

<style scoped lang="scss">
  .marker-box {
    margin: 0 8px;

    .box {
      min-width: 150px;

      .title {
        font-size: 1.5rem;
        color: #363636 !important;
      }
    }
  }
</style>