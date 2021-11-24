import moment from "moment";

class TimeCorrector {

    private utcToLocalDate(date: string) {
        const utc = moment.utc(date)
        return utc.local().format('MM-DD-YYYY')
    }

    private utcToLocaleTime(date: string) {
        const utc = moment.utc(date)
        return utc.local().format('LT')
    }

    public makeUtc() {
        return moment.utc(new Date()).toString()
    }

    public getLocalTime(date: string) {
        return this.utcToLocaleTime(date)
    }

    public matchDates(date: string) {
        const localDate = moment(new Date()).format('MM-DD-YYYY')

        const utcLocalDate = this.utcToLocalDate(date)

        if (localDate === utcLocalDate) {
            return this.utcToLocaleTime(date)
        }

        return utcLocalDate
    }

    public getSeconds(date: string) {
        const seconds = moment.utc(date).valueOf()
        return seconds
    }
}

export default new TimeCorrector()