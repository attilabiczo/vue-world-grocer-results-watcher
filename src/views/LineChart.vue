<script setup lang="ts">
import {ref, defineProps} from "vue"
import { Responsive, Chart, Grid, Line, Tooltip } from 'vue3-charts'

defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const direction = ref('horizontal')
const margin = ref({
  left: 0,
  top: 0,
  right: 20,
  bottom: 0
})

const axis = ref({
  primary: {
    type: 'band',
    format: (val: string, index: number, values: string[]) => {
      return (index === 0 || index === values.length - 1) ? val : '';
    }
  },
  secondary: {
    domain: ['dataMin', 'dataMax + 100'],
    type: 'linear',
    ticks: 8
  }
})

</script>

<template>
  <div class="container is-fluid">
    <Responsive class="w-full box">
      <template #main="{ width }">
        <Chart
          :size="{ width, height: 250 }"
          :data="data"
          :margin="margin"
          :direction="direction"
          :axis="axis"
        >
          <template #layers>
            <Grid stroke-dasharray="2,2" />
            <Line
              :data-keys="['label', 'expSum']"
              :line-style="{ stroke: '#90e0ef' }"
            />
            <Line
              :data-keys="['label', 'ctrlSum']"
              :line-style="{ stroke: '#0096c7' }"
            />
          </template>

          <template #widgets>
            <Tooltip
              border-color="#48CAE4"
              :config="{
                label: { hide: true },
                date: { label: 'Date' },
                expSum: { label: 'Experimental', color: '#90e0ef' },
                ctrlSum: { label: 'Control', color: '#0096c7' }
              }"
            />
          </template>
        </Chart>
      </template>
    </Responsive>
  </div>
</template>

<!-- FIX - Removed unnecessary script and empty style blocks -->
