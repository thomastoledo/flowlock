type CancelableFunction = {
    (...args: any[]): void;
    cancel: () => void;
    flush: () => void;
  };
  
  /**
   * Debounce a function: ensures the function is executed only after a specified delay
   * has elapsed since the last call. Supports async functions, cancellation, and flush.
   */
  export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number,
    immediate: boolean = false
  ): CancelableFunction {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let result: any;
  
    const debounced = function (this: any, ...args: Parameters<T>) {
      const context = this;
  
      const callNow = immediate && !timeoutId;
  
      const later = () => {
        timeoutId = null;
        if (!immediate) {
          result = func.apply(context, args);
        }
      };
  
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(later, delay);
  
      if (callNow) {
        result = func.apply(context, args);
      }
  
      return result;
    };
  
    debounced.cancel = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = null;
    };
  
    debounced.flush = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        result = func();
        timeoutId = null;
      }
    };
  
    return debounced;
  }
  
  /**
   * Throttle a function: ensures the function is executed at most once every specified delay.
   * Supports async functions, cancellation, and flush.
   */
  export function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number,
    { leading = true, trailing = true }: { leading?: boolean; trailing?: boolean } = {}
  ): CancelableFunction {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastExecuted = 0;
    let result: any;
    let lastArgs: Parameters<T> | null = null;
  
    const throttled = function (this: any, ...args: Parameters<T>) {
      const context = this;
      const now = Date.now();
  
      if (!lastExecuted && !leading) lastExecuted = now;
  
      const remainingTime = delay - (now - lastExecuted);
      lastArgs = args;
  
      const callFunc = () => {
        lastExecuted = Date.now();
        result = func.apply(context, args);
        timeoutId = null;
      };
  
      if (remainingTime <= 0 || remainingTime > delay) {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        callFunc();
      } else if (!timeoutId && trailing) {
        timeoutId = setTimeout(() => {
          callFunc();
        }, remainingTime);
      }
  
      return result;
    };
  
    throttled.cancel = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = null;
      lastExecuted = 0;
    };
  
    throttled.flush = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        result = func.apply(null, lastArgs as Parameters<T>);
        timeoutId = null;
      }
    };
  
    return throttled;
  }
  