import { debounce as lodashDebounce, throttle as lodashThrottle } from "lodash-es";

export const createDebounce = <T>(func: (e?: T) => void, wait: number) => {
  return lodashDebounce(func, wait);
};

export const createThrottle = <T>(func: (e?: T) => void, wait: number) => {
  return lodashThrottle(func, wait);
};
