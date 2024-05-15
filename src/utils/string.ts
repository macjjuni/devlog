export const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export const checkKorean = (str: string): boolean => {
  return pattern.test(str);
};

// -------------------- 랜덤 숫자 생성 --------------------
export const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// -------------------- 랜덤 문자열 생성 --------------------
export const getRandomText = (length: number): string => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(String.fromCodePoint(getRandom(97, 122)));
  }
  return arr.join("");
};

/* ---------- string 형식에 숫자만 포함됐는지 체크 ---------- */
export const isStrNumber = (val: string): boolean => {
  return !Number.isNaN(Number(val));
};
/* ---------- 천 단위 콤마 변환 ---------- */
export const comma = (num: string): string => {
  // 문자형이지만 숫자말고 문자가 포함된 경우 체크
  const numCheck = isStrNumber(num);
  if (numCheck) return num.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  console.error("숫자 이외에 문자열이 포함됨", num);
  return "0";
};

/* ---------- 날짜 형식 변환 정규식 ---------- */
export const dateReg = (str: string, targetStr: string, replaceTxt: string) => {
  const reg = new RegExp(targetStr, "g");
  return str.replace(reg, replaceTxt);
};
