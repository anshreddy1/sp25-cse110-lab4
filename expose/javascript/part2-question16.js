// part2-question16.js
// Assumes `statistics` is already defined in the same scope.

for (const key in statistics) {
    const value = statistics[key];
  
    // Print the value if the property name starts with "r"
    // OR if the property's value is an odd number.
    if (key.startsWith('r') || value % 2 !== 0) {
      console.log(value);
    }
  }
  