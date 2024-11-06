import { dateUtil } from "kku-util";

const { calcCurrentDateDifference, getFormatDate, getCurrentDate } = dateUtil;

function isTwoMinutesPassed(timestamp1: number, timestamp2: number): boolean {
  const THREE_MINUTES_IN_MS = 2 * 60 * 1000; // 2분을 밀리초로 변환
  return Math.abs(timestamp2 - timestamp1) >= THREE_MINUTES_IN_MS;
}

export { calcCurrentDateDifference, getFormatDate, isTwoMinutesPassed, getCurrentDate };
