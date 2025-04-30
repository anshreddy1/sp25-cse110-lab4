1. **What was the bug?**  
   The function `calculateSum(num1, num2)` treated its parameters as strings (because they come from `input.value`) and used the `+` operator directly, which in JavaScript concatenates strings. For example, `"3" + "5"` produced `"35"` instead of the numeric sum `8`.

2. **How would you fix it?**  
   Convert the input strings to numbers before adding. For instance, update `calculateSum` as follows:
   ```diff
   function calculateSum(num1, num2) {
   -  let result = num1 + num2;
   +  let result = Number(num1) + Number(num2);
     return result;
   }
