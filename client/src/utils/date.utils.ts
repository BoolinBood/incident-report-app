import dayjs from "dayjs"

export const DateUtils = {
  getDate: (str: String): String => {

    return dayjs(String(str)).format('YYYY-MM-DD')
  }
}