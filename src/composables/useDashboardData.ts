import { ref, computed } from 'vue'
import { IChartCLVData } from "@/Types";
import moment from "moment/moment";

import useWidgetsData from "@/composables/useWidgetsData";
import useChartData from "@/composables/useChartData";

export default function useDashboardData() {
    const { widgets, hasWidgetDataError } = useWidgetsData();
    const { firstItem, lastItem, chartData, hasChartDataError } = useChartData();

    const filteredChartDatasource = ref<IChartCLVData[]>([])

    function filter(selectedDayIndex: number) {
        const selectedDateValue = moment(firstItem.value).add(selectedDayIndex, 'days');

        filteredChartDatasource.value = chartData.value.filter((item) => moment(item.label).isBetween(moment(firstItem.value), selectedDateValue, undefined, '[]'))

        const selectedItem = filteredChartDatasource.value[filteredChartDatasource.value.length - 1]
        widgets.totalCLVExp = selectedItem?.expSum;
        widgets.totalCLVCtrl = selectedItem?.ctrlSum;
    }

    const hasError = computed<boolean>(() => hasWidgetDataError.value || hasChartDataError.value)

    return {
        hasError,
        filter,
        firstItem,
        lastItem,
        widgets,
        chartData: filteredChartDatasource
    }
}