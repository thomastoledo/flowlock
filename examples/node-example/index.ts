import { debounce, throttle } from 'flowlock';

// Example: Using debounce
const logMessageDebounced = debounce((message: string) => {
  console.log('Debounced:', message);
}, 2000);

// Simulate rapid calls
logMessageDebounced('Message 1');
logMessageDebounced('Message 2');
setTimeout(() => logMessageDebounced('Message 3'), 1000);
setTimeout(() => logMessageDebounced('Message 4'), 3000);

// Example: Using throttle
const logMessageThrottled = throttle((message: string) => {
  console.log('Throttled:', message);
}, 2000);

logMessageThrottled('Message A');
setTimeout(() => logMessageThrottled('Message B'), 500);
setTimeout(() => logMessageThrottled('Message C'), 2500);
setTimeout(() => logMessageThrottled('Message D'), 3500);
