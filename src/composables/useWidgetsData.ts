import { ref, reactive, onMounted } from 'vue'
import DashboardService from "@/services/DashboardService";
import { IServerWidgetData } from "@/Types";

export default function useWidgetsData() {

    const widgets: IServerWidgetData = reactive({
        totalOffers: 0,
        totalRepeatersExp: 0,
        totalRepeatersCtrl: 0,
        totalCLVExp: 0,
        totalCLVCtrl: 0
    })

    const hasWidgetDataError = ref<boolean>(false)

    /* FIX - Called async data fetching directly */
    DashboardService.getWidgets()
        .then((widgetsDataRaw) => {
            widgets.totalOffers = widgetsDataRaw.data.totalOffers;
            widgets.totalRepeatersExp = widgetsDataRaw.data.totalRepeatersExp;
            widgets.totalRepeatersCtrl = widgetsDataRaw.data.totalRepeatersCtrl;
            widgets.totalCLVExp = widgetsDataRaw.data.totalCLVExp;
            widgets.totalCLVCtrl = widgetsDataRaw.data.totalCLVCtrl;

            hasWidgetDataError.value = false;
        })
        .catch(() => {
            hasWidgetDataError.value = true;
        })

    onMounted(async () => {
        /*try {
            const widgetsDataRaw = await DashboardService.getWidgets();

            widgets.totalOffers = widgetsDataRaw.data.totalOffers;
            widgets.totalRepeatersExp = widgetsDataRaw.data.totalRepeatersExp;
            widgets.totalRepeatersCtrl = widgetsDataRaw.data.totalRepeatersCtrl;
            widgets.totalCLVExp = widgetsDataRaw.data.totalCLVExp;
            widgets.totalCLVCtrl = widgetsDataRaw.data.totalCLVCtrl;

            hasWidgetDataError.value = false;
        }
        catch {
            hasWidgetDataError.value = true;
        }*/
    })

    return {
        widgets,
        hasWidgetDataError
    }
}