<script setup lang="ts">
import { defineProps, ref, inject } from "vue"

const hasError = ref<boolean | undefined>(inject("hasDataError"))

defineProps({
  total: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title">
        World Grocer
      </p>
      <p class="subtitle">
        Go live & measure uplift results
      </p>
      <custom-marker-box
        v-if="!hasError"
        heading="Total Offers"
        :title="total"
      />
    </div>
  </section>
</template>

<!-- FIX - Removed unnecessary script and empty style blocks -->