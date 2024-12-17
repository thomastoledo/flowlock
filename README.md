
# flowlock

**Flowlock** is a lightweight, flexible utility library for **debouncing** and **throttling** functions. It offers advanced features like execution cancellation, immediate triggering, manual flushing, and full support for asynchronous functions.

---

## 🚀 Features

- **Debounce**: Delay function execution until a pause in calls occurs.
- **Throttle**: Limit the execution of a function to at most once every specified delay.
- **Cancelable**: Cancel a pending debounce or throttle execution.
- **Flush**: Force immediate execution of a pending function.
- **Async-ready**: Supports both synchronous and asynchronous functions (Promises).
- **Customizable**: Control execution on the **leading** or **trailing** edge.

---

## 📦 Installation

Install using `npm`:

```bash
npm install flowlock
```

Or using `yarn`:

```bash
yarn add flowlock
```

---

## 🔧 Usage

### Import the library

```typescript
import { debounce, throttle } from 'flowlock';
```

---

### **Debounce Example**

Debounce delays function execution until a pause in calls occurs:

```typescript
const log = () => console.log('Debounced log');

const debouncedLog = debounce(log, 1000);

debouncedLog(); // Waits 1s before execution
debouncedLog(); // Timer resets
```

**Immediate execution**:

```typescript
const debouncedImmediate = debounce(log, 1000, true);
debouncedImmediate(); // Executes immediately
```

**Cancel pending debounce**:

```typescript
debouncedLog.cancel(); // Cancels the pending execution
```

**Flush execution immediately**:

```typescript
debouncedLog.flush(); // Forces immediate execution
```

---

### **Throttle Example**

Throttle ensures a function is executed at most once every specified delay:

```typescript
const log = () => console.log('Throttled log');

const throttledLog = throttle(log, 2000);

throttledLog(); // Executes immediately
throttledLog(); // Ignored if called within 2 seconds
```

**Leading and trailing options**:

```typescript
const throttledCustom = throttle(log, 2000, { leading: false, trailing: true });

throttledCustom(); // Executes only at the end of the 2-second window
```

**Cancel and flush execution**:

```typescript
throttledCustom.cancel(); // Cancels pending execution
throttledCustom.flush();  // Forces immediate execution
```

---

### **Support for Async Functions**

`flowlock` works seamlessly with asynchronous functions:

```typescript
const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log('Async operation complete');
};

const debouncedFetch = debounce(fetchData, 1000);

debouncedFetch();
debouncedFetch.flush(); // Forces immediate execution
```

---

## 🛠️ API Reference

### `debounce(func, delay, immediate?)`

| Parameter    | Type                      | Description                                      |
|--------------|---------------------------|--------------------------------------------------|
| `func`       | `(...args: any[]) => any` | The function to debounce.                        |
| `delay`      | `number`                  | Delay in milliseconds before execution.          |
| `immediate`  | `boolean`                 | Trigger function on the leading edge. Default: `false`. |

**Returns**: A debounced function with:  
- **`cancel()`**: Cancels pending execution.  
- **`flush()`**: Forces immediate execution.

---

### `throttle(func, delay, options?)`

| Parameter    | Type                      | Description                                      |
|--------------|---------------------------|--------------------------------------------------|
| `func`       | `(...args: any[]) => any` | The function to throttle.                        |
| `delay`      | `number`                  | Minimum time between executions (ms).            |
| `options`    | `{ leading?, trailing? }` | Control execution on leading/trailing edge.      |

**Options**:  
- **`leading`**: Run on the leading edge. Default: `true`.  
- **`trailing`**: Run on the trailing edge. Default: `true`.  

**Returns**: A throttled function with:  
- **`cancel()`**: Cancels pending execution.  
- **`flush()`**: Forces immediate execution.

---

## 🧪 Example Tests (Jest)

You can validate `flowlock` with Jest:

```typescript
import { debounce, throttle } from 'flowlock';

jest.useFakeTimers();

describe('debounce', () => {
  it('should delay function execution', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);

    debounced();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  it('should limit function execution to once per delay', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);

    throttled();
    throttled();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
  });
});
```

---

## 📜 License

**MIT**

---

Simplify execution flow and manage your functions with precision – **flowlock** gives you the control you need. 🚀