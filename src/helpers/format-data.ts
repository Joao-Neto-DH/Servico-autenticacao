import dayjs from "dayjs";

export function dataFormat(data: Date, format: string = "DD/MM/YYYY") {
  return dayjs(data).format(format);
}
