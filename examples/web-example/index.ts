import { debounce, throttle } from 'flowlock';

const debouncedFunction = debounce(() => {
  console.log('Debounced button click');
}, 1000);

const throttledFunction = throttle(() => {
  console.log('Throttled button click');
}, 2000);

document.getElementById('debounce-btn')?.addEventListener('click', debouncedFunction);
document.getElementById('throttle-btn')?.addEventListener('click', throttledFunction);
