<script setup lang="ts">
import {ref, provide, watch, watchEffect} from "vue"
import moment from "moment/moment";

import PageHeader from "@/views/PageHeader.vue"
import TopMarkers from "@/views/TopMarkers.vue"
import DateRangeSelector from "@/views/DataRangeSelector.vue"
import LineChart from "@/views/LineChart.vue"
import ErrorNotification from "@/views/ErrorNotification.vue"

import useDashboardData from "@/composables/useDashboardData";

const selectedEndDate = ref<number>(0)
const { hasError, filter, firstItem, lastItem, widgets, chartData } = useDashboardData();

provide("hasDataError", hasError)

watch(selectedEndDate, (newSelectedEndDate: number) => {
  filter(newSelectedEndDate)
})

watchEffect(() => {
  // FIX - Added value checking for undefined cases
  if (lastItem.value && firstItem.value) {
    selectedEndDate.value = moment(lastItem.value).diff(moment(firstItem.value), 'days');
  }
})

</script>

<template>
  <div class="dashboard">
    <!-- FIX - Removed hasError property and replaced it with inject call -->
    <PageHeader :total="widgets.totalOffers" />
    <template v-if="!hasError">
      <TopMarkers :widgets="widgets" />
      <!-- FIX - Converted input value to Number -->
      <DateRangeSelector
        v-model.number="selectedEndDate"
        :first-item="firstItem"
        :last-item="lastItem"
      />
      <LineChart :data="chartData" />
    </template>
    <ErrorNotification v-else />
  </div>
</template>

<!-- FIX - Removed unnecessary script and error notification related style blocks -->

