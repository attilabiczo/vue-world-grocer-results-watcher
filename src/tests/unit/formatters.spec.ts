import { formatNumber } from "@/utils/formatters"

describe('formatters', function() {

    describe('formatNumber tests', function () {
        it('should return original value in case of invalid Number', async function () {
            const result = formatNumber("ABC")
            expect(result).toEqual("ABC");
        })

        it('should return original value in case of less than 1000', async function () {
            const result = formatNumber("500")
            expect(result).toEqual("500");
        })

        it('should return en formatted value in case of larger than 1000', async function () {
            const result = formatNumber("1234500")
            expect(result).toEqual("1,234,500");
        })
    })

})