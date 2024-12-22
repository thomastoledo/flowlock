import { debounce, throttle } from './flowlock';

jest.useFakeTimers();

describe('debounce', () => {
  it('should call the function after the specified delay', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);

    debounced();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer on consecutive calls', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);

    debounced();
    jest.advanceTimersByTime(500);
    debounced();
    jest.advanceTimersByTime(500);
    debounced();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should support immediate execution', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000, true);

    debounced();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should cancel the debounce timer', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);

    debounced();
    debounced.cancel();

    jest.advanceTimersByTime(1000);
    expect(func).not.toHaveBeenCalled();
  });

  it('should flush the debounce timer immediately', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);

    debounced();
    debounced.flush();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should work with async functions', async () => {
    const func = jest.fn(async () => 'done');
    const debounced = debounce(func, 1000);

    debounced();
    jest.advanceTimersByTime(1000);

    await Promise.resolve(); // Simule l'attente des Promises
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  it('should call the function at most once per delay', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);

    throttled();
    throttled();
    throttled();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should support leading and trailing calls', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000, { leading: false, trailing: true });

    throttled();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should cancel the throttle timer', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);

    throttled();
    throttled.cancel();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should flush the throttle timer immediately', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);

    throttled();
    throttled.flush();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should work with async functions', async () => {
    const func = jest.fn(async () => 'done');
    const throttled = throttle(func, 1000);

    throttled();
    jest.advanceTimersByTime(1000);

    await Promise.resolve(); // Simule l'attente des Promises
    expect(func).toHaveBeenCalledTimes(1);
  });
});
