import moment from "moment"

export interface IServerWidgetData {
    totalOffers: number
    totalRepeatersExp: number
    totalRepeatersCtrl: number
    totalCLVExp: number
    totalCLVCtrl: number
}

export interface IChartCLVData {
    label: string
    expSum: number
    ctrlSum: number
    date: string
}

export default class ChartCLVData implements IChartCLVData {
    label: string;
    expSum: number;
    ctrlSum: number;
    date: string

    constructor(label: string, expSum: number, ctrlSum: number) {
        this.label = label;
        this.expSum = expSum;
        this.ctrlSum = ctrlSum;
        this.date = moment(label).format('MMMM DD, YYYY');
    }
}


