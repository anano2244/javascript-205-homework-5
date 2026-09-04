# Homework 5 — Functions

Welcome to your fifth homework! 🎉

This time there are two new things. The exercises are all about **functions**, and you will hand in your work through a fork and a **Pull Request** — the full process is explained step by step below.

In this homework you will practice:

* writing functions and using their **return values**
* **default parameters**
* **arrow functions**
* **scope**: global, local and block variables
* **callbacks**: passing a function to another function
* array methods that take a callback: `map`, `filter`, `find`, `some`, `every`, `reduce`
* a little **recursion**

**Deadline:** before Workshop 7.

**How to submit:** fork this repository, put your files in your own folder on your own branch, and open a **Pull Request**. Every step is explained below.

---

## How to submit — with a Pull Request

Until now you mostly sent us a link to your own repository. From now on every homework goes through a fork, a branch and a Pull Request, and the review happens right next to your code. A **fork** is your own copy of the repository, a **branch** is where your changes live, and a **Pull Request (PR)** asks to bring those changes into the original repository.

Follow the steps in order. If a command fails, read the error message carefully — it usually tells you what is wrong.

> Everywhere you see `<your-username>`, replace it with **your GitHub username** (without the angle brackets). For example, if your username is `nino-b`, your branch and your folder are both called `nino-b`.

### 1. Fork this repository

Open https://github.com/JavaScriptADI/javascript-205-homework-5 in your browser.

Click the **Fork** button in the top-right corner, keep the default settings and click **Create fork**.

GitHub creates your own copy of the repository at:

```text
https://github.com/<your-username>/javascript-205-homework-5
```

You can push to your fork. You cannot push to the original repository — that is exactly what the Pull Request is for.

### 2. Clone YOUR fork

On the page of **your fork**, click the green **Code** button, copy the URL and run:

```bash
git clone https://github.com/<your-username>/javascript-205-homework-5.git
cd javascript-205-homework-5
```

You should see something like:

```text
Cloning into 'javascript-205-homework-5'...
remote: Enumerating objects: 12, done.
...
Receiving objects: 100% (12/12), done.
```

> Make sure the URL contains **your** username, not `JavaScriptADI`. If you cloned the original repository by accident, delete the folder and clone again from your fork.

### 3. Create a branch named after your GitHub username

```bash
git checkout -b <your-username>
```

You should see:

```text
Switched to a new branch '<your-username>'
```

You can check which branch you are on at any time with `git branch` — the current branch has a `*` in front of it.

### 4. Create your folder and your files

Inside the `submissions/` folder, create a folder named after your GitHub username and put your exercise files inside it (eight, or nine if you do the bonus):

```bash
mkdir submissions/<your-username>
cd submissions/<your-username>
```

When you are done, your repository should look like this (with your own username instead of `<your-username>`):

```text
javascript-205-homework-5/
│
├── README.md
└── submissions/
    ├── README.md
    └── <your-username>/
        ├── exercise_1.js
        ├── exercise_2.js
        ├── exercise_3.js
        ├── exercise_4.js
        ├── exercise_5.js
        ├── exercise_6.js
        ├── exercise_7.js
        ├── exercise_8.js
        └── exercise_9.js   (optional)
```

Only your own folder changes. Do not edit `README.md` or any other student's folder.

### 5. Run every file before committing

From inside your folder, run every file and compare what you see with the **expected output** under each exercise:

```bash
node exercise_1.js
node exercise_2.js
# ...and so on, up to exercise_9.js
```

A file that stops with an error is not finished yet.

### 6. Commit and push your branch

Go back to the repository folder, then add, commit and push:

```bash
cd ../..
git add .
git commit -m "Add homework 5"
git push -u origin <your-username>
```

If you are not inside your folder any more, skip the `cd ../..` line — check with `pwd` that you are in `javascript-205-homework-5`.

You should see something like:

```text
[<your-username> 3f2a9c1] Add homework 5
 9 files changed, 150 insertions(+)
...
remote: Create a pull request for '<your-username>' on GitHub by visiting:
remote:      https://github.com/<your-username>/javascript-205-homework-5/pull/new/<your-username>
```

> The first push needs `-u origin <your-username>` because the branch does not exist on GitHub yet. Later pushes to the same branch only need `git push`.

### 7. Open the Pull Request

1. Open your fork on GitHub. A yellow banner says that `<your-username>` had recent pushes — click **Compare & pull request**. (If the banner is gone, click **Pull requests** → **New pull request** and pick your branch in the **compare** dropdown.)
2. Check the four dropdowns at the top of the page:
   * **base repository:** `JavaScriptADI/javascript-205-homework-5` and **base:** `main`
   * **head repository:** `<your-username>/javascript-205-homework-5` and **compare:** `<your-username>`
3. **Title:** "Homework 5 - Your Name" with your real name (a normal dash is fine), for example "Homework 5 - Nino Beridze".
4. The description box already contains a template. Fill in your username and tick every box in the checklist that is true.
5. Click the green **Create pull request** button (not the *draft* option in its dropdown).

Your PR now appears on the page of the original repository, with the instructor listed under **Reviewers**.

### 8. Wait for the review — and fix things on the same branch

The instructor is added as a reviewer automatically and will leave comments on your code.

If something needs fixing, edit the files in your folder, then commit and push to the **same branch**:

```bash
git add .
git commit -m "Fix exercise 3"
git push
```

Your Pull Request updates itself — you do **not** need to open a new one. **Do not open a second PR.** When everything is fine, the instructor approves and merges your PR.

> **Good to know**
>
> * You cannot push to the **original** repository (`JavaScriptADI/javascript-205-homework-5`) and its `main` branch is protected. That is expected: your work always goes to your fork, on your branch, and reaches the original repository only through a Pull Request.
> * One folder per student. Do not touch other students' folders or the `README.md`.
> * If you get stuck, take a screenshot of the error and bring it to the next workshop.

---

## Exercises

Create the files below inside `submissions/<your-username>/` and write JavaScript code to solve each task.

Use only what we covered in Workshops 1–6 (see the [Rules](#rules) at the bottom).

You can run each file with:

```bash
node exercise_1.js
```

Every exercise shows its **expected output**. Your program should print exactly that.

When you print an array or an object, pass the label and the value as **two arguments**: `console.log("Names:", names);` — node then shows arrays and objects with brackets and quotes, exactly like the expected output. Use the labels shown in each expected output.

---

### `exercise_1.js` — Three ways to write a function

Here is a function declaration:

```javascript
function triple(n) {
    return n * 3;
}
```

Write the same function in two more ways:

1. As a **function expression** stored in a variable called `tripleExpression`.
2. As an **arrow function** stored in a variable called `tripleArrow`.

Call all three with `14` and print the results.

Then write `isOdd` as a **one-line arrow function** (no `{ }`, no `return`) that returns `true` when a number is odd, and print `isOdd(7)` and `isOdd(10)`.

Expected output:

```text
42
42
42
true
false
```

> Hint: An arrow function with a single expression returns it without the word `return`. To check whether a number is odd, `%` is your friend.

---

### `exercise_2.js` — Default parameters

Write a function `greet(name = "stranger", greeting = "Hello")` that **returns** the string `${greeting}, ${name}!`.

Print the result of:

```javascript
greet()
greet("Nino")
greet("Nino", "Hi")
```

Then write a function `line(length = 10, char = "-")` that returns `char` repeated `length` times, and print `line()`, `line(3)` and `line(5, "*")`.

Expected output:

```text
Hello, stranger!
Hello, Nino!
Hi, Nino!
----------
---
*****
```

> Hint: `"ab".repeat(3)` gives `"ababab"`. A default value is used only when you do not pass that argument.

---

### `exercise_3.js` — Scope detective

Copy this code into `exercise_3.js` **exactly as it is**:

```javascript
let score = 10;

function showLocalScore() {
    let score = 50;
    console.log("A:", score);
}

function addBonus() {
    score += 5;
    console.log("B:", score);
}

function makeMessage() {
    let message = "Well done!";
    console.log("C:", message);
}

console.log("1:", score);

showLocalScore();
console.log("2:", score);

if (score > 5) {
    let score = 99;
    console.log("3:", score);
}
console.log("4:", score);

addBonus();
console.log("5:", score);

makeMessage();
// console.log("6:", message);
```

**Before you run it**, write your guess next to every `console.log` as a comment, like this:

```javascript
console.log("1:", score); // guess: 10
```

That is eight guesses: `1:` to `5:` plus `A:`, `B:` and `C:` inside the functions. For the commented-out `6:` line, write what you think would happen if it ran.

Then run the file and compare your guesses with the real output.

Finally, add a comment at the bottom of the file that explains:

1. Why `2:` and `4:` still print `10`, even though the lines `let score = 50;` and `let score = 99;` run before them.
2. Why `5:` prints a different value than `4:`.
3. What happens if you uncomment the last line. Try it, read the error, then comment the line out again so the file runs without errors.

<details>
<summary>Actual output (check after guessing)</summary>

```text
1: 10
A: 50
2: 10
3: 99
4: 10
B: 15
5: 15
C: Well done!
```

</details>

> Hint: `let` inside a function or a block creates a **new** variable that lives only there. Without `let`, you are changing the variable that already exists outside.

---

### `exercise_4.js` — Pure or not?

Start with this array:

```javascript
const cart = ["Milk", "Bread"];
```

Write two functions:

1. `addItem(cart, item)` uses `.push()` to add `item` to the array it receives. It does not return anything.
2. `withItem(cart, item)` returns a **new** array with the item added at the end and does **not** change the original array.

Call `addItem(cart, "Eggs")` and then `withItem(cart, "Cheese")`. For each call, print `cart` before the call and after it; for `withItem`, also print the array it returns, right after the call and before the final `After withItem` line. Use the labels below, in the same order.

Expected output:

```text
Before addItem: [ 'Milk', 'Bread' ]
After addItem: [ 'Milk', 'Bread', 'Eggs' ]
Before withItem: [ 'Milk', 'Bread', 'Eggs' ]
Returned by withItem: [ 'Milk', 'Bread', 'Eggs', 'Cheese' ]
After withItem: [ 'Milk', 'Bread', 'Eggs' ]
```

At the bottom of the file, answer in a comment: **which of the two functions is pure, and why?**

> Hint: To build a new array from an old one you can loop over it and `.push()` every element into an empty array, or use spread: `[...cart, item]` means: copy every element of `cart` into a new array, then add `item`.
>
> An array is not copied when you pass it to a function. The parameter is just another name for the same array, so `.push()` inside the function changes the array outside too.

---

### `exercise_5.js` — Build your own filter

Write a function `filter(array, test)` that returns a new array containing only the elements for which `test(element)` returns `true`.

Use a loop inside it. The built-in `.filter()` is **not allowed inside your function** — the whole point is to build it yourself.

Then use your `filter` with arrow-function callbacks to get:

* the numbers that can be divided by `3` with no remainder (use `%`) from `[9, 4, 12, 7, 21, 8]`
* the words with exactly `4` letters from `["sun", "planet", "moon", "galaxy", "star"]`

Finally, print the same two results using the built-in `.filter()` to prove that they match.

Expected output:

```text
My filter (divisible by 3): [ 9, 12, 21 ]
My filter (4-letter words): [ 'moon', 'star' ]
Built-in filter (divisible by 3): [ 9, 12, 21 ]
Built-in filter (4-letter words): [ 'moon', 'star' ]
```

> Hint: Look at how we built `filter` in the workshop — same idea.

---

### `exercise_6.js` — Student report

Use this data:

```javascript
const students = [
    { name: "Nino", age: 19, score: 91 },
    { name: "Giorgi", age: 17, score: 68 },
    { name: "Mariam", age: 22, score: 75 },
    { name: "Luka", age: 20, score: 55 },
    { name: "Ana", age: 18, score: 83 },
    { name: "Dato", age: 21, score: 70 },
];
```

Use **array methods with callbacks** (not plain `for` loops) to print:

1. `map` → an array with all the names
2. `filter` + `map` → the names of the students who passed (score `70` or more)
3. `find` → Mariam's score
4. `some` → is anyone under 18?
5. `every` → did everyone score above 50?
6. `reduce` → the average score, rounded to one decimal with `.toFixed(1)`
7. `reduce` → the name of the best student (highest score)

Expected output:

```text
Names: [ 'Nino', 'Giorgi', 'Mariam', 'Luka', 'Ana', 'Dato' ]
Passed: [ 'Nino', 'Mariam', 'Ana', 'Dato' ]
Mariam's score: 75
Anyone under 18? true
Everyone above 50? true
Average score: 73.7
Best student: Nino
```

> Hint: For the average, `reduce` adds up the scores and you divide by `students.length`. `average.toFixed(1)` turns the number into text with one decimal.
>
> For the best student, the accumulator is the best student **so far**: start with `students[0]` and return whichever of the two has the higher score. Use braces and `return` in the callback:
>
> ```javascript
> students.reduce((best, s) => {
>     // compare s.score with best.score and return the better one
> }, students[0]);
> ```

---

### `exercise_7.js` — Word counter ⭐

Start with this sentence:

```javascript
const sentence = "the cat and the dog and the bird";
```

Split it into an array of words with `sentence.split(" ")`.

Then print (use the labels from the expected output):

1. **(a)** how many words there are
2. **(b)** an object that counts how many times each word appears, built with `reduce` starting from an empty object `{}`
3. **(c)** the longest word, also with `reduce`

Expected output:

```text
Number of words: 8
Word counts: { the: 3, cat: 1, and: 2, dog: 1, bird: 1 }
Longest word: bird
```

> Hint for (b): Start from this skeleton and fill in the middle:
>
> ```javascript
> const counts = words.reduce((result, word) => {
>     // update result[word] here
>     return result;
> }, {});
> ```
>
> The first time you meet a word, `result[word]` is `undefined`. Setting `result[word] = 0` creates the key, the same way `person.pet = "Dog"` added a key to an object in Workshop 5. After that, add `1`. Do not forget the `return result` at the end of the callback.
>
> Hint for (c): The accumulator is the longest word found **so far**. Start with `""` and only replace it when the current word is longer (not the same length).

---

### `exercise_8.js` — Recursion ⭐

A recursive function is a function that calls itself. It always needs a **base case** (when to stop) before the recursive call.

1. Write `sumDigits(n)` that returns the sum of the digits of a whole number. A one-digit number is its own digit sum. For a bigger number, take the last digit with `% 10` and call `sumDigits` again on the rest of the number — `Math.floor(n / 10)` removes the last digit.

   Print `sumDigits(1234)`, `sumDigits(9)` and `sumDigits(99999)`.

2. Write `countUp(from, to)` that prints `from`, `from + 1`, … up to `to` (one number per line) and then `Done!` — **without a loop**. You did this kind of counting with `while` in Homework 3; this time the function calls itself with `from + 1`. Call it with `countUp(3, 7)`.

3. Write `power(base, exponent)` that returns `base` to the power of `exponent` (for example `power(2, 3)` is `2 * 2 * 2 = 8`) — again without a loop. Base case: when `exponent` is `0`, the answer is `1`. Otherwise multiply `base` by the result of `power` with a smaller exponent. Print `power(2, 10)` and `power(5, 0)`.

Expected output:

```text
10
9
45
3
4
5
6
7
Done!
1024
1
```

> Hint: Base case first: what should happen when `from` is bigger than `to`?

---

### `exercise_9.js` — Build your own map and reduce ⭐⭐ (bonus)

This one is optional. If you skip it, simply do not create `exercise_9.js` and leave its checkbox unticked.

Just like you built `filter` in exercise 5, build your own versions of `map` and `reduce` with loops. The built-in `.map()` and `.reduce()` are not allowed inside them.

* `myMap(array, transform)` — works like the built-in `.map()`
* `myReduce(array, combine, start)` — works like the built-in `.reduce()` with a start value

Test them and compare with the built-in methods:

```javascript
myMap([1, 2, 3], (n) => n * 10)                            // [ 10, 20, 30 ]
myReduce([1, 2, 3, 4], (sum, n) => sum + n, 0)             // 10
myReduce(["a", "b", "c"], (text, ch) => text + ch, "")     // abc
```

Expected output:

```text
myMap: [ 10, 20, 30 ]
Built-in map: [ 10, 20, 30 ]
myReduce: 10
Built-in reduce: 10
myReduce (text): abc
Built-in reduce (text): abc
```

> Hint: `myReduce` is the cousin of `myMap`: instead of collecting every result in an array, it keeps a single `result` that is updated on every step.

---

## Rules

Solve the exercises using only concepts covered in Workshops 1–6.

You may use:

* Everything from Homeworks 1-4: operators (`+ - * / % ** += ++ === < >= && || !`), `.length`, array indexes, `.push()` / `.pop()` / `.shift()` / `.unshift()`, `Math.random()`, `Math.max()` / `Math.min()`
* `const` and `let`
* Template literals
* String methods, including `.repeat()` and `.split()`
* `if` / `else if` / `else`
* `for`, `while` and `for...of` loops
* Arrays and objects
* Destructuring
* Spread inside an array: `[...cart, item]`
* `Object.keys()`, `Object.values()`, `Object.entries()`
* Functions: declarations, function expressions and arrow functions
* Default parameters
* `return`
* Callbacks (passing a function to another function)
* `forEach`, `map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`
* `Math.floor()`, `Math.round()`, `.toFixed()`
* Recursion (a function calling itself)

Not allowed:

* `prompt()` — it does not exist in Node.js, so the file would crash
* anything we have not covered yet
* the built-in `.filter()`, `.map()` and `.reduce()` **inside** your own `filter`, `myMap` and `myReduce` (exercises 5 and 9). Using them anywhere else is fine.

---

## Checklist before you submit

* [ ] `exercise_1.js` … `exercise_8.js` are inside `submissions/<your-username>/`
* [ ] `exercise_9.js` (optional) is there too
* [ ] Every file runs with `node` without errors and prints the expected output
* [ ] Only concepts covered in Workshops 1–6 are used (no `prompt()`)
* [ ] `exercise_3.js`: guesses were written in comments **before** running, and the explanation is there too
* [ ] `exercise_4.js`: the comment saying which function is pure (and why) is there
* [ ] No files outside your own folder were changed
* [ ] Your branch is named after your GitHub username
* [ ] The Pull Request is open with the title "Homework 5 - Your Name"
* [ ] The checklist in the Pull Request description is filled in

Good luck! 🚀

---

## Helpful links

* Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
* Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* Default parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
* Scope: https://developer.mozilla.org/en-US/docs/Glossary/Scope
* Recursion: https://developer.mozilla.org/en-US/docs/Glossary/Recursion
* `Array.prototype.map()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* `Array.prototype.filter()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* `Array.prototype.find()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* `Array.prototype.findIndex()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
* `Array.prototype.some()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
* `Array.prototype.every()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
* `Array.prototype.reduce()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
* `Array.prototype.forEach()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* `String.prototype.split()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
* `String.prototype.repeat()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
* `Number.prototype.toFixed()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
* Spread syntax (`[...cart, item]`): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
* GitHub Docs — Fork a repository: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
* GitHub Docs — Creating a pull request from a fork: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
