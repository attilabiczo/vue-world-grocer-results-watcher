<script setup lang="ts">
import { defineProps } from "vue"
import type IServerWidgetData from '@/Types'

defineProps<{ widgets: IServerWidgetData }>()

</script>

<template>
  <nav class="level top-markers">
    <div class="marker-container">
      <p>Total Repeaters</p>
      <div class="level">
        <custom-marker-box
          heading="Experimental" 
          :title="widgets.totalRepeatersExp"
        />
        <custom-marker-box
          heading="Control" 
          :title="widgets.totalRepeatersExp"
        />
      </div>
    </div>
    <div class="marker-container">
      <p>Total CLV</p>
      <div class="level">
        <custom-marker-box
          heading="Experimental"
          :title="widgets.totalCLVExp"
        />
        <custom-marker-box
          heading="Control"
          :title="widgets.totalCLVCtrl"
        />
      </div>
    </div>
  </nav>
</template>

<!-- FIX - Removed unnecessary script block -->

<style scoped lang="scss">
  .level {
    justify-content: center;

    &.top-markers {
      margin: 8px 0;
    }

    .marker-container {
      display: flex;
      flex-direction: column;
      margin: 16px;

      .level {
        margin-top: 8px;
      }
    }
  }
</style>
