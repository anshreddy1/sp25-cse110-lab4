1. **What is printed by line 9?**  
   `values added: 20` – Inside the `if` block we declare `var result = 0`, then immediately set `result = num1 + num2` (= 20), so the `console.log` inside the block prints that value.

2. **What is printed by line 13?**  
   `final result: 20` – Because `var` has *function* scope, the `result` variable is still accessible after the `if` block ends, so the second `console.log` also prints 20 (no error is thrown).

3. **Why should you not use `var`?**  
   `var` is function-scoped and *hoisted*, which means:

   - A variable declared with `var` inside a block (`loops`, `if`, etc.) is visible everywhere in the function, making it easy to overwrite or read it unintentionally.  
   - Hoisting moves the declaration to the top of the function, so you can accidentally access a `var` variable before it is initialized (it will be `undefined`).  
   - These behaviors often create naming conflicts and subtle bugs.
  
### 4. What is printed by line 9?  
`values added: 20` – Inside the `if` block `let result = 0` is declared (block-scoped). We then set `result = num1 + num2` (= 20), so the `console.log` on line 9 prints that value.

### 5. What is printed by line 13?  
`ReferenceError: result is not defined` – Because `result` was created with `let`, it exists **only** inside the `if` block. After the block ends, the variable is out of scope, so attempting to log it on line 13 throws a reference error.

---

### 6. What is printed by line 9?  *(const version)*  
Nothing is printed; execution stops with  
`TypeError: Assignment to constant variable.` – `result` is declared with `const`, which makes it immutable. The reassignment `result = num1 + num2` on line 7 violates that rule and throws a runtime error before the `console.log` on line 9 can run.

### 7. What is printed by line 13?  
Line 13 never executes because the function already crashed on line 7.  
If the reassignment were removed, line 13 would still raise  
`ReferenceError: result is not defined`, because `const result` is block-scoped and invisible outside the `if` block.
