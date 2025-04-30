1. **What will happen at line 12 and why?**  
   `console.log(i)` will print **`3`**.

   *Reason:* The loop variable `i` is declared with **`var`**, which is **function-scoped**, not block-scoped.  
   After the `for` loop finishes, `i` has been incremented until the exit condition `i < prices.length` fails.  
   Given the call `discountPrices([100, 200, 300], 0.5)`, `prices.length` is 3, so the loop stops when `i` becomes 3.  
   Because `i` remains in scope after the loop, line 12 can access it and prints `3` instead of throwing a `ReferenceError`.

2. **What will happen at line 13 and why?**  
   `console.log(discountedPrice)` will print **`150`**.

   *Reason:* `discountedPrice` is declared with **`var`** inside the `for` loop, making it **function-scoped**.  
   After the loop finishes, the variable still exists and holds the last value assigned in the final iteration.  
   With the call `discountPrices([100, 200, 300], 0.5)`, the last iteration computes  
   `discountedPrice = 300 * (1 – 0.5) = 150`.  
   Therefore, line 13 prints `150` instead of throwing a `ReferenceError`.

3. **What will happen at line 14 and why?**  
   `console.log(finalPrice)` will print **`150`**.

   *Reason:* `finalPrice` is declared with **`var`** at line 4, giving it **function scope**.  
   Inside the loop it is reassigned on every iteration. After the loop ends, the variable
   still exists and holds the value from the **last** iteration.  
   With the call `discountPrices([100, 200, 300], 0.5)`, that last iteration (price =`300`)
   sets  
   ```js
   finalPrice = Math.round(300 * 0.5 * 100) / 100; // ⇒ 150

4. **What will this function return?**  
   It returns the array **`[50, 100, 150]`**.

   *Reason:* The `for` loop iterates over the input array `[100, 200, 300]`.  
   For each `price`, it computes  
   ```js
   discountedPrice = price * (1 - discount);   // discount = 0.5
   finalPrice      = Math.round(discountedPrice * 100) / 100; // keeps two decimals

5. **What will happen at line 12 and why?**  
   Executing `console.log(i)` will raise a **`ReferenceError: i is not defined`**.

   *Reason:* The loop variable `i` is declared with **`let`**, which is **block-scoped**.  
   Its lifetime ends when the `for` loop’s closing brace is reached.  
   Line 12 is outside that block, so `i` is out of scope and JavaScript cannot resolve the identifier, resulting in the error.

6. **What will happen at line 13 and why?**  
   Attempting `console.log(discountedPrice)` will throw a **`ReferenceError: discountedPrice is not defined`**.

   *Reason:* `discountedPrice` is declared with **`let`** inside the `for` loop, giving it **block scope**.  
   Once the loop’s closing brace is reached, that binding is destroyed.  
   Line 13 is outside the loop’s block, so the identifier cannot be resolved, resulting in the error.

7. **What will happen at line 14 and why?**  
   `console.log(finalPrice)` will print **`150`**.

   *Reason:* `finalPrice` is declared with **`let`** at line 4, so it is scoped to the entire
   function block (not just the loop).  
   On each loop iteration the variable is reassigned; after the loop, it retains the value
   from the **last** iteration.  
   Given the call `discountPrices([100, 200, 300], 0.5)`, that last iteration processes
   `300`, yielding  
   ```js
   finalPrice = Math.round(300 * 0.5 * 100) / 100; // → 150

8. **What will this function return?**  
   It returns **`[50, 100, 150]`**.

   *Reason:*  
   - The outer `discounted` array is declared with `let` and remains in scope for the whole function.  
   - The loop (three iterations for prices 100, 200, 300) calculates  
     ```js
     discountedPrice = price * (1 - 0.5);  // → 50, 100, 150
     finalPrice      = Math.round(discountedPrice * 100) / 100; // keeps two-decimal precision
     ```  
   - Each `finalPrice` is pushed into `discounted`.  
   - No scoping errors occur because everything referenced inside the loop is in scope.  
   - After the loop finishes, `return discounted;` yields `[50, 100, 150]`.

9. **What will happen at line 11 and why?**  
   Executing `console.log(i)` will throw a **`ReferenceError: i is not defined`**.

   *Reason:* The loop variable `i` is declared with **`let`**, which is **block-scoped**.  
   Its scope is limited to the `for` loop block, and that block ends at the loop’s closing brace.  
   Line 11 sits **outside** that block, so `i` is out of scope and cannot be resolved, resulting in the error.

10. **What will happen at line 12 and why?**  
    `console.log(length)` will print **`3`**.

    *Reason:*  
    - `length` is declared with **`const`** at line 4, so it is scoped to the entire function block and cannot be reassigned (but it can still be read).  
    - Its value is set to `prices.length` **before** the loop starts.  
    - Given the call `discountPrices([100, 200, 300], 0.5)`, `prices.length` is `3`; that value never changes.  
    - Line 12 is inside the same function block, so `length` is in scope and resolves to `3`, which is printed without error.

11. **What will this function return?**  
    It returns **`[50, 100, 150]`**.

    *Reason:*  
    - `discounted` is declared as a `const` array; its binding can’t be reassigned, but the array’s contents can be modified, so `push` works.  
    - `length` is a constant snapshot of `prices.length` (value `3`).  
    - The `for` loop iterates three times. For each `price`,  
      ```js
      discountedPrice = price * (1 - 0.5); // → 50, 100, 150
      ```  
      Each value is pushed into `discounted`.  
    - No scoping or reassignment errors occur, so `return discounted;` yields `[50, 100, 150]`.

### 12. Object-property notation

| Task | JavaScript notation |
|------|---------------------|
| **A.** Access the value of the **`name`** property | `student.name` (or `student["name"]`) |
| **B.** Access the value of the **`Grad Year`** property | `student["Grad Year"]` |
| **C.** Call the **`greeting`** function | `student.greeting()` |
| **D.** Access the **`name`** property of the object in **`Favorite Teacher`** | `student["Favorite Teacher"].name` |
| **E.** Access index 0 in the **`courseLoad`** array | `student.courseLoad[0]` |

### 13. Arithmetic

| Expression | Output | Why it evaluates that way |
|------------|--------|---------------------------|
| **A.** `'3' + 2` | `'32'` | With `+`, if either operand is a string, JS coerces the other to a string and **concatenates**. |
| **B.** `'3' - 2` | `1` | `-` always performs numeric subtraction; `'3'` → `3`, then `3 - 2`. |
| **C.** `3 + null` | `3` | `null` → `0` in numeric context; `3 + 0`. |
| **D.** `'3' + null` | `'3null'` | String concatenation again; `null` → `'null'`. |
| **E.** `true + 3` | `4` | `true` → `1`; `1 + 3`. |
| **F.** `false + null` | `0` | `false` → `0`, `null` → `0`; sum is `0`. |
| **G.** `'3' + undefined` | `'3undefined'` | String concatenation; `undefined` → `'undefined'`. |
| **H.** `'3' - undefined` | `NaN` | `'3'` → `3`, `undefined` → `NaN`; any arithmetic with `NaN` yields `NaN`. |

---

### 14. Comparison

| Expression | Output | Explanation |
|------------|--------|-------------|
| **A.** `'2' > 1` | `true`  | Non-strict relational operators convert both sides to numbers: `2 > 1`. |
| **B.** `'2' < '12'` | `false` | Both operands are strings, so *lexicographic* comparison: `'2'` comes after `'1'`. |
| **C.** `2 == '2'` | `true`  | `==` does *abstract equality*; `'2'` → `2`, then `2 == 2`. |
| **D.** `2 === '2'` | `false` | `===` checks *type and value*; number ≠ string. |
| **E.** `true == 2` | `false` | `true` → `1`; `1 == 2` is false. |
| **F.** `true === Boolean(2)` | `true`  | `Boolean(2)` is `true`; both sides are the *same boolean* under strict equality. |

---

### 15. Difference between `==` and `===`

* **`==` (abstract equality)** performs type coercion if the operands are of different types, then compares the resulting values.  
* **`===` (strict equality)** *never* coerces; it returns `true` only when the operands are of the **same type** *and* have the **same value/identity**.

Use `===` by default to avoid surprising coercions; reserve `==` for the rare cases where intentional type conversion is desired.

### 16. part2-question16.js

17. **Result of `modifyArray([1, 2, 3], doSomething)`**

The function call returns **`[2, 4, 6]`**.

**Step-by-step explanation in words:**

1. **Input values:**  
   The function `modifyArray` is called with two arguments:  
   - An array: `[1, 2, 3]`  
   - A callback function: `doSomething`, which takes a number and returns it multiplied by 2.

2. **New array initialization:**  
   Inside `modifyArray`, a new empty array `newArr` is created to store the results.

3. **Loop execution:**  
   The function uses a `for` loop to iterate over each element of the input array. For each element:
   - It applies the `callback` function (`doSomething`) to the current number.
   - The result of the callback is pushed into `newArr`.

   Specifically:
   - On the first iteration, the number `1` is passed to `doSomething`, which returns `2`. That value is added to `newArr`, making it `[2]`.
   - On the second iteration, `2` becomes `4`, so `newArr` becomes `[2, 4]`.
   - On the third iteration, `3` becomes `6`, and `newArr` becomes `[2, 4, 6]`.

4. **Return value:**  
   After completing the loop, the function returns the modified array.  
   The final output is **`[2, 4, 6]`**.


### 18. part2-question18.js

19. **Output of the `printNums` code and why**

The numbers appear in this order:

1. `1`  
2. `4`  
3. `3`  
4. `2`  (after ~1 second)

**Explanation**

| Step | What happens | Call-stack / Callback queue |
|------|--------------|-----------------------------|
| ➊ `console.log(1)` runs immediately. | Prints **1**. | – |
| ➋ `setTimeout(..., 1000)` is registered; callback waits 1 000 ms. | Nothing yet printed. | timer-queue (will log 2) |
| ➌ `setTimeout(..., 0)` is registered; callback waits 0 ms (executes after the current call-stack empties). | – | macro-task queue (will log 3) |
| ➍ `console.log(4)` runs immediately. | Prints **4**. | – |
| ➎ Call-stack is now empty → event loop dequeues 0-ms timer. | Callback logs **3**. | – |
| ➏ About 1 000 ms after step ➋, the 1000-ms timer fires. | Callback logs **2**. | – |

Thus the visible sequence is **1, 4, 3, 2** (with a 1-second pause before the final 2).
