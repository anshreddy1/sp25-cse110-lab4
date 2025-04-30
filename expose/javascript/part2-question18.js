// Prints the current local time every second.

setInterval(() => {
    const now  = new Date();
    const time = now.toLocaleTimeString();
    console.log(time);
  }, 1000);