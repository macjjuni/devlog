import "dayjs/locale/ko";
import dayjs from "dayjs";

dayjs.locale("ko");

const defaultFormat = "YYYY-MM-DD";
const defaultDetailFormat = "YYYY-MM-DD HH:mm";

const now = dayjs();

const date = {
  now: () => now.format(defaultFormat),
  nowDiff: (dateStr: string) => {
    const nowDate = dayjs(date.now(), defaultFormat);
    const diffTargetDate = dayjs(dateStr, defaultFormat);
    return nowDate.diff(diffTargetDate, "d");
  },
  format: (dateStr: string) => dayjs(dateStr).format(defaultFormat),
  formatDetail: (dateStr: string) => dayjs(dateStr).format(defaultDetailFormat),
  diff: (date1: string, date2: string) => {
    const formatDate1 = dayjs(date1, defaultDetailFormat);
    const formatDate2 = dayjs(date2, defaultDetailFormat);
    return formatDate1.diff(formatDate2, "second");
  },
};

export default date;
