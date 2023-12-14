<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue"
import moment from "moment"

const props = defineProps({
  /* FIX - Fixed type of modeValue property */
  modelValue: {
    type: Number,
    default: 0
  },
  firstItem: {
    type: String,
    default: ""
  },
  lastItem: {
    type: String,
    default: ""
  }
})

defineEmits(['update:modelValue'])

const daysBetween = computed(() => moment(props.lastItem).diff(moment(props.firstItem), 'days'))
const selectedDate = computed(() => moment(props.firstItem).add(props.modelValue, 'days'))

</script>

<template>
  <div class="data-range-selector container is-fluid">
    <div class="box">
      <p class="action-hint">
        Select the data for the details
      </p>
      <div class="range-control">
        <span class="min-range-value">{{ myCompany.filters.formatDate(firstItem) }}</span>
        <input
          type="range"
          min="0"
          :max="daysBetween"
          step="1"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        >
        <span class="max-range-value">{{ myCompany.filters.formatDate(lastItem) }}</span>
      </div>
      <h1 class="selected-date-label is-size-3">
        {{ myCompany.filters.formatDate(selectedDate) }}
      </h1>
    </div>
  </div>
</template>

<!-- FIX - Removed unnecessary script block -->

<style scoped lang="scss">
  .data-range-selector {
    margin: 16px 0;

    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .action-hint {
        padding-right: 8px;
      }

      .min-range-value {
        margin-right: 8px;
      }

      .max-range-value {
        margin-left: 8px;
      }

      .range-control {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: row;
      }

      .selected-date-label {
        margin: 16px;
      }
    }
  }
</style>