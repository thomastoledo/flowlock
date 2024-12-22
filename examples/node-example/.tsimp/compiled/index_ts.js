"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flowlock_1 = require("flowlock");
// Example: Using debounce
const logMessageDebounced = (0, flowlock_1.debounce)((message) => {
    console.log('Debounced:', message);
}, 2000);
// Simulate rapid calls
logMessageDebounced('Message 1');
logMessageDebounced('Message 2');
setTimeout(() => logMessageDebounced('Message 3'), 1000);
setTimeout(() => logMessageDebounced('Message 4'), 3000);
// Example: Using throttle
const logMessageThrottled = (0, flowlock_1.throttle)((message) => {
    console.log('Throttled:', message);
}, 2000);
logMessageThrottled('Message A');
setTimeout(() => logMessageThrottled('Message B'), 500);
setTimeout(() => logMessageThrottled('Message C'), 2500);
setTimeout(() => logMessageThrottled('Message D'), 3500);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbnVnZXRjaGFyL0RvY3VtZW50cy91dGlscy9mbG93bG9jay9leGFtcGxlcy9ub2RlLWV4YW1wbGUvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUE4QztBQUU5QywwQkFBMEI7QUFDMUIsTUFBTSxtQkFBbUIsR0FBRyxJQUFBLG1CQUFRLEVBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFVCx1QkFBdUI7QUFDdkIsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV6RCwwQkFBMEI7QUFDMUIsTUFBTSxtQkFBbUIsR0FBRyxJQUFBLG1CQUFRLEVBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFVCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEQsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyJ9