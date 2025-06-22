import dayjs from "dayjs"

export const DateUtils = {
  getDate: (str: string): string => {

    return dayjs(String(str)).format('YYYY-MM-DD')
  }
}