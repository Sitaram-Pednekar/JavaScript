// ======= COMPLETE DATE & TIME EXAMPLE IN JS =======

// 1) Create Dates
let now = new Date();                     // Current date & time
let specificDate = new Date("2026-02-11"); // Specific date from string
let detailedDate = new Date(2026, 1, 11, 10, 30, 0); // Y, M(0-11), D, H, M, S

console.log("Now:", now);                 // e.g., Now: Wed Feb 11 2026 14:25:30 GMT+0530 (India Standard Time)
console.log("Specific date:", specificDate); // Specific date: Wed Feb 11 2026 00:00:00 GMT+0530 (India Standard Time)
console.log("Detailed date:", detailedDate); // Detailed date: Wed Feb 11 2026 10:30:00 GMT+0530 (India Standard Time)

// 2) Get parts of the date
console.log("Year:", now.getFullYear());  // Year: 2026
console.log("Month (0-11):", now.getMonth()); // Month (0-11): 1  (February)
console.log("Day of Month:", now.getDate());  // Day of Month: 11
console.log("Day of Week (0=Sun):", now.getDay()); // Day of Week: 3  (Wednesday)
console.log("Hours:", now.getHours());        // Hours: 14
console.log("Minutes:", now.getMinutes());    // Minutes: 25
console.log("Seconds:", now.getSeconds());    // Seconds: 30
console.log("Milliseconds:", now.getMilliseconds()); // Milliseconds: 123

// 3) Set parts of the date
let setDate = new Date();
setDate.setFullYear(2030);
setDate.setMonth(11); // December
setDate.setDate(25);
setDate.setHours(15);
setDate.setMinutes(45);
setDate.setSeconds(30);
console.log("Modified date:", setDate); // Modified date: Wed Dec 25 2030 15:45:30 GMT+0530 (India Standard Time)

// 4) Convert date to string formats
console.log("Date String:", now.toDateString());   // Date String: Wed Feb 11 2026
console.log("Time String:", now.toTimeString());   // Time String: 14:25:30 GMT+0530 (India Standard Time)
console.log("ISO String:", now.toISOString());     // ISO String: 2026-02-11T08:55:30.123Z
console.log("Local Date:", now.toLocaleDateString()); // Local Date: 11/2/2026
console.log("Local Time:", now.toLocaleTimeString()); // Local Time: 14:25:30
console.log("Local Date & Time:", now.toLocaleString()); // Local Date & Time: 11/2/2026, 14:25:30

// 5) Timestamps (milliseconds since Jan 1, 1970)
let timestamp = Date.now();
console.log("Current Timestamp:", timestamp); // Current Timestamp: 1765497930123

// 6) Calculate difference between dates
let start = new Date("2026-01-01");
let end = new Date("2026-01-10");
let diffMs = end - start;                       // difference in milliseconds
let diffDays = diffMs / (1000 * 60 * 60 * 24);  // convert to days
console.log("Days between:", diffDays);         // Days between: 9

// 7) Add days to a date
let addDays = new Date();
addDays.setDate(addDays.getDate() + 7); // add 7 days
console.log("7 days later:", addDays);   // 7 days later: Wed Feb 18 2026 14:25:30 GMT+0530 (India Standard Time)

// 8) Compare dates
let d1 = new Date("2026-02-20");
let d2 = new Date();
console.log("Is d1 in future?", d1 > d2); // Is d1 in future? true

// 9) Custom formatted date (DD/MM/YYYY)
let d = new Date();
let formatted = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
console.log("Custom Format:", formatted); // Custom Format: 11/2/2026

// 10) Countdown / timer example
let offerEnd = new Date("2026-12-31");
let remainingDays = Math.floor((offerEnd - new Date()) / (1000 * 60 * 60 * 24));
console.log("Days left for offer:", remainingDays); // Days left for offer: 323 (example)
