import { ref, onMounted } from 'vue'
import _ from "lodash"

import DashboardService from "@/services/DashboardService";
import ChartCLVData, { IChartCLVData } from "@/Types";

export default function useChartData() {
    const chartData = ref<IChartCLVData[]>([])

    const firstItem = ref<string>("")
    const lastItem = ref<string>("")
    const hasChartDataError = ref<boolean>(false)

    /* FIX - Called async data fetching directly */
    DashboardService.getChart()
        .then((chartDataRaw) => {
            chartData.value = chartDataRaw.data.map((item: any) => {
                return new ChartCLVData(item.label, item.expSum, item.ctrlSum)
            })

            // @ts-ignore
            firstItem.value = _.minBy(chartData.value, (item: ChartCLVData) => item.label).label

            // @ts-ignore
            lastItem.value = _.maxBy(chartData.value, (item: ChartCLVData) => item.label).label

            /*new Promise((resolve) => setTimeout(resolve, 2000))*/

            hasChartDataError.value = false;
        })
        .catch(() => {
            hasChartDataError.value = true;
        })

    onMounted(async () => {
        /*try {
            const chartDataRaw = await DashboardService.getChart()
            chartData.value = chartDataRaw.data.map((item: any) => {
                return new ChartCLVData(item.label, item.expSum, item.ctrlSum)
            })

            // @ts-ignore
            firstItem.value = _.minBy(chartData.value, (item: ChartCLVData) => item.label).label

            // @ts-ignore
            lastItem.value = _.maxBy(chartData.value, (item: ChartCLVData) => item.label).label

            hasChartDataError.value = false;
        }
        catch {
            hasChartDataError.value = true;
        }*/
    })

    return {
        chartData,
        firstItem,
        lastItem,
        hasChartDataError
    }
}