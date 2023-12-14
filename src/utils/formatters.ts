import moment from "moment"

export function formatNumber(value: number | string) {
    const numberToFormat = Number(value);

    if (isNaN(numberToFormat)) {
        return value;
    }

    return numberToFormat.toLocaleString('en');
}

export function formatDate(value: any) {
    const valueToFormat = moment.isMoment(value) ? value : moment(value);

    return valueToFormat.format('MMMM DD, YYYY');
}