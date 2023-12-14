import { formatNumber, formatDate } from "@/utils/formatters"
import MarkerBox from "@/components/MarkerBox.vue"

export const customFilters = {
    install: (app: any) => {
        app.config.globalProperties.myCompany = {
            filters: {
                formatNumber,
                formatDate
            }
        }
    }
}

export const customComponents = {
    install: (app: any) => {
        app.component(MarkerBox.name, MarkerBox);
    }
}