> 🇬🇧 [English version](./README.md)

# საშინაო დავალება 5 — ფუნქციები

მოგესალმებით მეხუთე საშინაო დავალებაზე! 🎉

ამჯერად ორი სიახლეა. სავარჯიშოები მთლიანად **ფუნქციებზეა**, ნამუშევარს კი ჩააბარებთ fork-ისა და **Pull Request**-ის საშუალებით — სრული პროცესი ნაბიჯ-ნაბიჯ ქვემოთაა ახსნილი.

ამ დავალებაში ივარჯიშებთ:

* ფუნქციების წერასა და მათი **დასაბრუნებელი მნიშვნელობის** (return value) გამოყენებაზე
* **ნაგულისხმევ პარამეტრებზე** (default parameters)
* **ისრიან ფუნქციებზე** (arrow functions)
* **ხედვის არეზე** (scope): გლობალურ, ლოკალურ და ბლოკის ცვლადებზე
* **callback-ებზე**: ერთი ფუნქციის მეორისთვის გადაცემაზე
* მასივის მეთოდებზე, რომლებიც callback-ს იღებენ: `map`, `filter`, `find`, `some`, `every`, `reduce`
* ცოტა **რეკურსიაზე**

**ვადა:** მე-7 workshop-მდე.

**როგორ ჩააბაროთ:** დააფორკეთ ეს რეპოზიტორია, ჩადეთ თქვენი ფაილები თქვენს საკუთარ ფოლდერში, თქვენს საკუთარ ბრენჩზე, და გახსენით **Pull Request**. ყველა ნაბიჯი ქვემოთაა ახსნილი.

---

## როგორ ჩააბაროთ — Pull Request-ით

აქამდე ძირითადად თქვენი რეპოზიტორიის ბმულს გვიგზავნიდით. ამიერიდან ყოველი საშინაო დავალება fork-ს, ბრენჩსა და Pull Request-ს გაივლის, განხილვა (review) კი პირდაპირ თქვენს კოდზე მოხდება. **fork** არის რეპოზიტორიის თქვენი საკუთარი ასლი, **ბრენჩი** (branch) არის ადგილი, სადაც თქვენი ცვლილებები ცხოვრობს, ხოლო **Pull Request (PR)** არის თხოვნა, რომ ეს ცვლილებები თავდაპირველ რეპოზიტორიაში შევიდეს.

მიჰყევით ნაბიჯებს თანმიმდევრობით. თუ ბრძანება ჩავარდა, ყურადღებით წაიკითხეთ შეცდომის ტექსტი — ის ჩვეულებრივ თავად გეუბნებათ, რა არის არასწორად.

> ყველგან, სადაც `<your-username>`-ს ხედავთ, ჩაანაცვლეთ ის **თქვენი GitHub-ის მომხმარებლის სახელით** (კუთხოვანი ფრჩხილების გარეშე). მაგალითად, თუ თქვენი მომხმარებლის სახელია `nino-b`, მაშინ თქვენი ბრენჩიც და ფოლდერიც `nino-b` ერქმევა.

### 1. დააფორკეთ ეს რეპოზიტორია

გახსენით https://github.com/JavaScriptADI/javascript-205-homework-5 ბრაუზერში.

დააჭირეთ ღილაკს **Fork** ზედა მარჯვენა კუთხეში, დატოვეთ ნაგულისხმევი პარამეტრები და დააჭირეთ **Create fork**.

GitHub შექმნის რეპოზიტორიის თქვენს საკუთარ ასლს მისამართზე:

```text
https://github.com/<your-username>/javascript-205-homework-5
```

თქვენს fork-ში push-ის გაკეთება შეგიძლიათ. თავდაპირველ რეპოზიტორიაში — ვერა. სწორედ ამისთვისაა Pull Request.

### 2. დააკლონეთ თქვენი fork

**თქვენი fork-ის** გვერდზე დააჭირეთ მწვანე ღილაკს **Code**, დააკოპირეთ URL და გაუშვით:

```bash
git clone https://github.com/<your-username>/javascript-205-homework-5.git
cd javascript-205-homework-5
```

დაახლოებით ასეთი შედეგი უნდა ნახოთ:

```text
Cloning into 'javascript-205-homework-5'...
remote: Enumerating objects: 12, done.
...
Receiving objects: 100% (12/12), done.
```

> დარწმუნდით, რომ URL შეიცავს **თქვენს** მომხმარებლის სახელს და არა `JavaScriptADI`-ს. თუ შემთხვევით თავდაპირველი რეპოზიტორია დააკლონეთ, წაშალეთ ფოლდერი და თავიდან დააკლონეთ თქვენი fork-იდან.

### 3. შექმენით ბრენჩი თქვენი GitHub-ის მომხმარებლის სახელით

```bash
git checkout -b <your-username>
```

უნდა ნახოთ:

```text
Switched to a new branch '<your-username>'
```

ნებისმიერ დროს შეგიძლიათ შეამოწმოთ, რომელ ბრენჩზე ხართ, ბრძანებით `git branch` — მიმდინარე ბრენჩს წინ `*` უწერია.

### 4. შექმენით თქვენი ფოლდერი და ფაილები

`submissions/` ფოლდერის შიგნით შექმენით ფოლდერი თქვენი GitHub-ის მომხმარებლის სახელით და ჩადეთ იქ სავარჯიშოების ფაილები (რვა, ან ცხრა, თუ ბონუსსაც გააკეთებთ):

```bash
mkdir submissions/<your-username>
cd submissions/<your-username>
```

როცა დაასრულებთ, თქვენი რეპოზიტორია ასე უნდა გამოიყურებოდეს (`<your-username>`-ის ნაცვლად თქვენი მომხმარებლის სახელით):

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
        └── exercise_9.js   (არასავალდებულო)
```

იცვლება მხოლოდ თქვენი საკუთარი ფოლდერი. ნუ შეასწორებთ `README.md`-ს ან სხვა სტუდენტის ფოლდერს.

### 5. commit-ამდე გაუშვით ყველა ფაილი

თქვენი ფოლდერიდან გაუშვით ყოველი ფაილი და შეადარეთ ნანახი **მოსალოდნელ შედეგს**, რომელიც თითოეულ სავარჯიშოსთანაა მოცემული:

```bash
node exercise_1.js
node exercise_2.js
# ...და ასე შემდეგ, exercise_9.js-მდე
```

ფაილი, რომელიც შეცდომით ჩერდება, ჯერ დასრულებული არაა.

### 6. გააკეთეთ commit და push თქვენს ბრენჩზე

დაბრუნდით რეპოზიტორიის ფოლდერში, შემდეგ დაამატეთ, დააკომიტეთ და დაპუშეთ:

```bash
cd ../..
git add .
git commit -m "Add homework 5"
git push -u origin <your-username>
```

თუ უკვე აღარ ხართ თქვენს ფოლდერში, გამოტოვეთ `cd ../..` ხაზი — შეამოწმეთ `pwd`-ით, რომ `javascript-205-homework-5`-ში ხართ.

დაახლოებით ასეთი შედეგი უნდა ნახოთ:

```text
[<your-username> 3f2a9c1] Add homework 5
 9 files changed, 150 insertions(+)
...
remote: Create a pull request for '<your-username>' on GitHub by visiting:
remote:      https://github.com/<your-username>/javascript-205-homework-5/pull/new/<your-username>
```

> პირველ push-ს `-u origin <your-username>` სჭირდება, რადგან ბრენჩი ჯერ არ არსებობს GitHub-ზე. იმავე ბრენჩზე შემდგომ push-ებს მხოლოდ `git push` სჭირდება.

### 7. გახსენით Pull Request

1. გახსენით თქვენი fork GitHub-ზე. ყვითელი ბანერი გეტყვით, რომ `<your-username>`-ზე ახლახან იყო push — დააჭირეთ **Compare & pull request**. (თუ ბანერი გაქრა, დააჭირეთ **Pull requests** → **New pull request** და **compare** ჩამონათვალში აირჩიეთ თქვენი ბრენჩი.)
2. შეამოწმეთ გვერდის თავზე მოცემული ოთხი ჩამონათვალი:
   * **base repository:** `JavaScriptADI/javascript-205-homework-5` და **base:** `main`
   * **head repository:** `<your-username>/javascript-205-homework-5` და **compare:** `<your-username>`
3. **სათაური:** "Homework 5 - Your Name" თქვენი ნამდვილი სახელით (ჩვეულებრივი ტირე გამოდგება), მაგალითად "Homework 5 - Nino Beridze".
4. აღწერის ველი უკვე შეიცავს შაბლონს. ჩაწერეთ თქვენი მომხმარებლის სახელი და მონიშნეთ ჩეკლისტის ყველა ის პუნქტი, რომელიც შესრულებულია.
5. დააჭირეთ მწვანე ღილაკს **Create pull request** (და არა *draft* ვარიანტს მის ჩამონათვალში).

თქვენი PR ახლა თავდაპირველი რეპოზიტორიის გვერდზე გამოჩნდება, ლექტორი კი **Reviewers**-ში იქნება მითითებული.

### 8. დაელოდეთ განხილვას — და შეასწორეთ იმავე ბრენჩზე

ლექტორი ავტომატურად ემატება რევიუერად და თქვენს კოდზე კომენტარებს დატოვებს.

თუ რამის შესწორებაა საჭირო, შეასწორეთ ფაილები თქვენს ფოლდერში, შემდეგ დააკომიტეთ და დაპუშეთ **იმავე ბრენჩზე**:

```bash
git add .
git commit -m "Fix exercise 3"
git push
```

თქვენი Pull Request თავისით განახლდება — ახლის გახსნა **არ** გჭირდებათ. **ნუ გახსნით მეორე PR-ს.** როცა ყველაფერი წესრიგშია, ლექტორი დაამტკიცებს და მოახდენს თქვენი PR-ის merge-ს.

> **კარგია, რომ იცოდეთ**
>
> * **თავდაპირველ** რეპოზიტორიაში (`JavaScriptADI/javascript-205-homework-5`) push ვერ გააკეთებთ და მისი `main` ბრენჩი დაცულია. ეს ასეც უნდა იყოს: თქვენი ნამუშევარი ყოველთვის თქვენს fork-ში, თქვენს ბრენჩზე მიდის და თავდაპირველ რეპოზიტორიას მხოლოდ Pull Request-ით სწვდება.
> * ერთი ფოლდერი ერთ სტუდენტზე. ხელი არ ახლოთ სხვა სტუდენტების ფოლდერებს ან `README.md`-ს.
> * თუ გაიჭედეთ, გადაუღეთ შეცდომას სქრინშოტი და მოიტანეთ შემდეგ workshop-ზე.

---

## სავარჯიშოები

შექმენით ქვემოთ ჩამოთვლილი ფაილები `submissions/<your-username>/`-ის შიგნით და დაწერეთ JavaScript კოდი თითოეული დავალების ამოსახსნელად.

გამოიყენეთ მხოლოდ ის, რაც 1–6 workshop-ებზე გავიარეთ (იხ. [წესები](#წესები) ბოლოში).

თითოეული ფაილის გაშვება შეგიძლიათ ასე:

```bash
node exercise_1.js
```

ყოველი სავარჯიშო აჩვენებს თავის **მოსალოდნელ შედეგს**. თქვენმა პროგრამამ ზუსტად ის უნდა დაბეჭდოს.

როცა მასივს ან ობიექტს ბეჭდავთ, გადაეცით წარწერა და მნიშვნელობა **ორ არგუმენტად**: `console.log("Names:", names);` — მაშინ node მასივებსა და ობიექტებს ფრჩხილებითა და ბრჭყალებით აჩვენებს, ზუსტად ისე, როგორც მოსალოდნელ შედეგშია. გამოიყენეთ თითოეულ მოსალოდნელ შედეგში ნაჩვენები წარწერები.

---

### `exercise_1.js` — ფუნქციის დაწერის სამი გზა

აი, ფუნქციის დეკლარაცია:

```javascript
function triple(n) {
    return n * 3;
}
```

დაწერეთ იგივე ფუნქცია კიდევ ორი გზით:

1. როგორც **ფუნქცია-გამოსახულება** (function expression), შენახული ცვლადში სახელად `tripleExpression`.
2. როგორც **ისრიანი ფუნქცია** (arrow function), შენახული ცვლადში სახელად `tripleArrow`.

გამოიძახეთ სამივე `14`-ით და დაბეჭდეთ შედეგები.

შემდეგ დაწერეთ `isOdd` როგორც **ერთხაზიანი ისრიანი ფუნქცია** (`{ }`-ის და `return`-ის გარეშე), რომელიც `true`-ს აბრუნებს, როცა რიცხვი კენტია, და დაბეჭდეთ `isOdd(7)` და `isOdd(10)`.

მოსალოდნელი შედეგი:

```text
42
42
42
true
false
```

> მინიშნება: ისრიანი ფუნქცია, რომელსაც ერთი გამოსახულება აქვს, მას სიტყვა `return`-ის გარეშე აბრუნებს. იმის შესამოწმებლად, კენტია თუ არა რიცხვი, `%` თქვენი მეგობარია.

---

### `exercise_2.js` — ნაგულისხმევი პარამეტრები

დაწერეთ ფუნქცია `greet(name = "stranger", greeting = "Hello")`, რომელიც **აბრუნებს** სტრიქონს `${greeting}, ${name}!`.

დაბეჭდეთ შედეგი:

```javascript
greet()
greet("Nino")
greet("Nino", "Hi")
```

შემდეგ დაწერეთ ფუნქცია `line(length = 10, char = "-")`, რომელიც აბრუნებს `char`-ს `length`-ჯერ გამეორებულს, და დაბეჭდეთ `line()`, `line(3)` და `line(5, "*")`.

მოსალოდნელი შედეგი:

```text
Hello, stranger!
Hello, Nino!
Hi, Nino!
----------
---
*****
```

> მინიშნება: `"ab".repeat(3)` იძლევა `"ababab"`-ს. ნაგულისხმევი მნიშვნელობა მხოლოდ მაშინ გამოიყენება, როცა ამ არგუმენტს არ გადასცემთ.

---

### `exercise_3.js` — ხედვის არის დეტექტივი

გადაწერეთ ეს კოდი `exercise_3.js`-ში **ზუსტად ისე, როგორც არის**:

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

**სანამ გაუშვებთ**, ჩაწერეთ თქვენი ვარაუდი ყოველი `console.log`-ის გვერდით კომენტარად, ასე:

```javascript
console.log("1:", score); // guess: 10
```

ეს რვა ვარაუდია: `1:`-დან `5:`-მდე, პლუს `A:`, `B:` და `C:` ფუნქციების შიგნით. დაკომენტარებული `6:` ხაზისთვის ჩაწერეთ, რას ფიქრობთ, რა მოხდებოდა, რომ გაშვებულიყო.

შემდეგ გაუშვით ფაილი და შეადარეთ თქვენი ვარაუდები ნამდვილ შედეგს.

ბოლოს დაამატეთ კომენტარი ფაილის ბოლოში, რომელიც ხსნის:

1. რატომ ბეჭდავს `2:` და `4:` კვლავ `10`-ს, მიუხედავად იმისა, რომ ხაზები `let score = 50;` და `let score = 99;` მათამდე სრულდება.
2. რატომ ბეჭდავს `5:` `4:`-ისგან განსხვავებულ მნიშვნელობას.
3. რა ხდება, თუ ბოლო ხაზს დაკომენტარებას მოხსნით. სცადეთ, წაიკითხეთ შეცდომა, შემდეგ ისევ დააკომენტარეთ ხაზი, რომ ფაილი შეცდომების გარეშე გაეშვას.

<details>
<summary>ნამდვილი შედეგი (შეამოწმეთ ვარაუდების შემდეგ)</summary>

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

> მინიშნება: `let` ფუნქციის ან ბლოკის შიგნით ქმნის **ახალ** ცვლადს, რომელიც მხოლოდ იქ ცხოვრობს. `let`-ის გარეშე თქვენ ცვლით იმ ცვლადს, რომელიც უკვე არსებობს გარეთ.

---

### `exercise_4.js` — სუფთაა თუ არა?

დაიწყეთ ამ მასივით:

```javascript
const cart = ["Milk", "Bread"];
```

დაწერეთ ორი ფუნქცია:

1. `addItem(cart, item)` იყენებს `.push()`-ს, რომ `item` დაამატოს იმ მასივს, რომელსაც იღებს. ის არაფერს აბრუნებს.
2. `withItem(cart, item)` აბრუნებს **ახალ** მასივს, რომლის ბოლოშიც დამატებულია ელემენტი, და **არ** ცვლის თავდაპირველ მასივს.

გამოიძახეთ `addItem(cart, "Eggs")` და შემდეგ `withItem(cart, "Cheese")`. ყოველი გამოძახებისთვის დაბეჭდეთ `cart` გამოძახებამდე და მის შემდეგ; `withItem`-ისთვის დაბეჭდეთ ისიც, რასაც ის აბრუნებს — გამოძახებისთანავე და ბოლო `After withItem` ხაზამდე. გამოიყენეთ ქვემოთ მოცემული წარწერები, იმავე თანმიმდევრობით.

მოსალოდნელი შედეგი:

```text
Before addItem: [ 'Milk', 'Bread' ]
After addItem: [ 'Milk', 'Bread', 'Eggs' ]
Before withItem: [ 'Milk', 'Bread', 'Eggs' ]
Returned by withItem: [ 'Milk', 'Bread', 'Eggs', 'Cheese' ]
After withItem: [ 'Milk', 'Bread', 'Eggs' ]
```

ფაილის ბოლოში კომენტარში უპასუხეთ: **ორიდან რომელი ფუნქციაა სუფთა (pure) და რატომ?**

> მინიშნება: ძველი მასივიდან ახლის ასაგებად შეგიძლიათ გადაუაროთ მას ციკლით და ყოველი ელემენტი `.push()`-ით ჩადოთ ცარიელ მასივში, ან გამოიყენოთ spread: `[...cart, item]` ნიშნავს — დააკოპირე `cart`-ის ყოველი ელემენტი ახალ მასივში, შემდეგ დაამატე `item`.
>
> მასივი არ კოპირდება, როცა მას ფუნქციას გადასცემთ. პარამეტრი უბრალოდ იმავე მასივის სხვა სახელია, ამიტომ ფუნქციის შიგნით `.push()` გარეთ არსებულ მასივსაც ცვლის.

---

### `exercise_5.js` — ააგეთ თქვენი საკუთარი filter

დაწერეთ ფუნქცია `filter(array, test)`, რომელიც აბრუნებს ახალ მასივს მხოლოდ იმ ელემენტებით, რომლებისთვისაც `test(element)` `true`-ს აბრუნებს.

მის შიგნით გამოიყენეთ ციკლი. ჩაშენებული `.filter()` **აკრძალულია თქვენი ფუნქციის შიგნით** — მთელი აზრი სწორედ ისაა, რომ თავად ააგოთ ის.

შემდეგ გამოიყენეთ თქვენი `filter` ისრიან callback-ებთან ერთად, რომ მიიღოთ:

* რიცხვები, რომლებიც `3`-ზე ნაშთის გარეშე იყოფა (გამოიყენეთ `%`) მასივიდან `[9, 4, 12, 7, 21, 8]`
* სიტყვები ზუსტად `4` ასოთი მასივიდან `["sun", "planet", "moon", "galaxy", "star"]`

ბოლოს დაბეჭდეთ იგივე ორი შედეგი ჩაშენებული `.filter()`-ის გამოყენებით, რომ დაამტკიცოთ, რომ ისინი ემთხვევა.

მოსალოდნელი შედეგი:

```text
My filter (divisible by 3): [ 9, 12, 21 ]
My filter (4-letter words): [ 'moon', 'star' ]
Built-in filter (divisible by 3): [ 9, 12, 21 ]
Built-in filter (4-letter words): [ 'moon', 'star' ]
```

> მინიშნება: გადახედეთ, როგორ ავაგეთ `filter` workshop-ზე — იგივე იდეაა.

---

### `exercise_6.js` — სტუდენტების ანგარიში

გამოიყენეთ ეს მონაცემები:

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

გამოიყენეთ **მასივის მეთოდები callback-ებით** (და არა ჩვეულებრივი `for` ციკლები), რომ დაბეჭდოთ:

1. `map` → მასივი ყველა სახელით
2. `filter` + `map` → იმ სტუდენტების სახელები, რომლებმაც ჩააბარეს (ქულა `70` ან მეტი)
3. `find` → Mariam-ის ქულა
4. `some` → არის თუ არა ვინმე 18 წელზე ნაკლები?
5. `every` → ყველამ 50-ზე მეტი ქულა აიღო?
6. `reduce` → საშუალო ქულა, დამრგვალებული ერთ ათწილადამდე `.toFixed(1)`-ით
7. `reduce` → საუკეთესო სტუდენტის სახელი (ყველაზე მაღალი ქულა)

მოსალოდნელი შედეგი:

```text
Names: [ 'Nino', 'Giorgi', 'Mariam', 'Luka', 'Ana', 'Dato' ]
Passed: [ 'Nino', 'Mariam', 'Ana', 'Dato' ]
Mariam's score: 75
Anyone under 18? true
Everyone above 50? true
Average score: 73.7
Best student: Nino
```

> მინიშნება: საშუალოსთვის `reduce` ჯამავს ქულებს, თქვენ კი ჰყოფთ `students.length`-ზე. `average.toFixed(1)` რიცხვს ერთათწილადიან ტექსტად აქცევს.
>
> საუკეთესო სტუდენტისთვის აკუმულატორი არის საუკეთესო სტუდენტი **მოცემულ მომენტამდე**: დაიწყეთ `students[0]`-ით და დააბრუნეთ ის, რომელსაც ორიდან უფრო მაღალი ქულა აქვს. callback-ში გამოიყენეთ ფიგურული ფრჩხილები და `return`:
>
> ```javascript
> students.reduce((best, s) => {
>     // compare s.score with best.score and return the better one
> }, students[0]);
> ```

---

### `exercise_7.js` — სიტყვების მთვლელი ⭐

დაიწყეთ ამ წინადადებით:

```javascript
const sentence = "the cat and the dog and the bird";
```

დაყავით ის სიტყვების მასივად `sentence.split(" ")`-ით.

შემდეგ დაბეჭდეთ (გამოიყენეთ მოსალოდნელი შედეგის წარწერები):

1. **(ა)** რამდენი სიტყვაა
2. **(ბ)** ობიექტი, რომელიც ითვლის, რამდენჯერ გვხვდება თითოეული სიტყვა, აგებული `reduce`-ით ცარიელი ობიექტიდან `{}` დაწყებული
3. **(გ)** ყველაზე გრძელი სიტყვა, ასევე `reduce`-ით

მოსალოდნელი შედეგი:

```text
Number of words: 8
Word counts: { the: 3, cat: 1, and: 2, dog: 1, bird: 1 }
Longest word: bird
```

> მინიშნება (ბ)-სთვის: დაიწყეთ ამ ჩონჩხით და შუა ნაწილი შეავსეთ:
>
> ```javascript
> const counts = words.reduce((result, word) => {
>     // update result[word] here
>     return result;
> }, {});
> ```
>
> როცა სიტყვას პირველად შეხვდებით, `result[word]` არის `undefined`. `result[word] = 0`-ის მინიჭება ქმნის გასაღებს, ისევე როგორც `person.pet = "Dog"` ამატებდა გასაღებს ობიექტს მე-5 workshop-ზე. ამის შემდეგ დაუმატეთ `1`. არ დაგავიწყდეთ `return result` callback-ის ბოლოში.
>
> მინიშნება (გ)-სთვის: აკუმულატორი არის ყველაზე გრძელი სიტყვა **მოცემულ მომენტამდე**. დაიწყეთ `""`-ით და ჩაანაცვლეთ მხოლოდ მაშინ, როცა მიმდინარე სიტყვა უფრო გრძელია (და არა იმავე სიგრძის).

---

### `exercise_8.js` — რეკურსია ⭐

რეკურსიული ფუნქცია არის ფუნქცია, რომელიც საკუთარ თავს იძახებს. მას ყოველთვის სჭირდება **საბაზისო შემთხვევა** (როდის გაჩერდეს) რეკურსიულ გამოძახებამდე.

1. დაწერეთ `sumDigits(n)`, რომელიც აბრუნებს მთელი რიცხვის ციფრების ჯამს. ერთციფრიანი რიცხვი თავად არის თავისი ციფრების ჯამი. უფრო დიდი რიცხვისთვის აიღეთ ბოლო ციფრი `% 10`-ით და გამოიძახეთ `sumDigits` ისევ დანარჩენ რიცხვზე — `Math.floor(n / 10)` ბოლო ციფრს აშორებს.

   დაბეჭდეთ `sumDigits(1234)`, `sumDigits(9)` და `sumDigits(99999)`.

2. დაწერეთ `countUp(from, to)`, რომელიც ბეჭდავს `from`, `from + 1`, … `to`-მდე (თითო რიცხვი თითო ხაზზე) და შემდეგ `Done!` — **ციკლის გარეშე**. მსგავსი დათვლა `while`-ით მე-3 საშინაო დავალებაში გააკეთეთ; ამჯერად ფუნქცია საკუთარ თავს `from + 1`-ით იძახებს. გამოიძახეთ `countUp(3, 7)`.

3. დაწერეთ `power(base, exponent)`, რომელიც აბრუნებს `base`-ს `exponent` ხარისხში (მაგალითად, `power(2, 3)` არის `2 * 2 * 2 = 8`) — ისევ ციკლის გარეშე. საბაზისო შემთხვევა: როცა `exponent` არის `0`, პასუხია `1`. სხვა შემთხვევაში გაამრავლეთ `base` `power`-ის შედეგზე უფრო მცირე ხარისხით. დაბეჭდეთ `power(2, 10)` და `power(5, 0)`.

მოსალოდნელი შედეგი:

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

> მინიშნება: ჯერ საბაზისო შემთხვევა: რა უნდა მოხდეს, როცა `from` `to`-ზე დიდია?

---

### `exercise_9.js` — ააგეთ თქვენი საკუთარი map და reduce ⭐⭐ (ბონუსი)

ეს არასავალდებულოა. თუ გამოტოვებთ, უბრალოდ ნუ შექმნით `exercise_9.js`-ს და მისი ჩეკბოქსი მოუნიშნავი დატოვეთ.

ისევე, როგორც მე-5 სავარჯიშოში `filter` ააგეთ, ააგეთ `map`-ისა და `reduce`-ის თქვენი საკუთარი ვერსიები ციკლებით. ჩაშენებული `.map()` და `.reduce()` მათ შიგნით აკრძალულია.

* `myMap(array, transform)` — მუშაობს ჩაშენებული `.map()`-ივით
* `myReduce(array, combine, start)` — მუშაობს ჩაშენებული `.reduce()`-ივით საწყისი მნიშვნელობით

გატესტეთ ისინი და შეადარეთ ჩაშენებულ მეთოდებს:

```javascript
myMap([1, 2, 3], (n) => n * 10)                            // [ 10, 20, 30 ]
myReduce([1, 2, 3, 4], (sum, n) => sum + n, 0)             // 10
myReduce(["a", "b", "c"], (text, ch) => text + ch, "")     // abc
```

მოსალოდნელი შედეგი:

```text
myMap: [ 10, 20, 30 ]
Built-in map: [ 10, 20, 30 ]
myReduce: 10
Built-in reduce: 10
myReduce (text): abc
Built-in reduce (text): abc
```

> მინიშნება: `myReduce` არის `myMap`-ის ბიძაშვილი: იმის ნაცვლად, რომ ყოველი შედეგი მასივში შეაგროვოს, ის ინახავს ერთადერთ `result`-ს, რომელიც ყოველ ნაბიჯზე ახლდება.

---

## წესები

ამოხსენით სავარჯიშოები მხოლოდ იმ ცნებების გამოყენებით, რომლებიც 1–6 workshop-ებზე გავიარეთ.

შეგიძლიათ გამოიყენოთ:

* ყველაფერი 1-4 საშინაო დავალებებიდან: ოპერატორები (`+ - * / % ** += ++ === < >= && || !`), `.length`, მასივის ინდექსები, `.push()` / `.pop()` / `.shift()` / `.unshift()`, `Math.random()`, `Math.max()` / `Math.min()`
* `const` და `let`
* შაბლონური სტრიქონები (template literals)
* სტრიქონის მეთოდები, მათ შორის `.repeat()` და `.split()`
* `if` / `else if` / `else`
* `for`, `while` და `for...of` ციკლები
* მასივები და ობიექტები
* დესტრუქტურიზაცია (destructuring)
* spread მასივის შიგნით: `[...cart, item]`
* `Object.keys()`, `Object.values()`, `Object.entries()`
* ფუნქციები: დეკლარაციები, ფუნქცია-გამოსახულებები და ისრიანი ფუნქციები
* ნაგულისხმევი პარამეტრები
* `return`
* callback-ები (ფუნქციის სხვა ფუნქციისთვის გადაცემა)
* `forEach`, `map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`
* `Math.floor()`, `Math.round()`, `.toFixed()`
* რეკურსია (ფუნქცია, რომელიც საკუთარ თავს იძახებს)

აკრძალულია:

* `prompt()` — ის Node.js-ში არ არსებობს, ამიტომ ფაილი ჩავარდება
* ყველაფერი, რაც ჯერ არ გაგვივლია
* ჩაშენებული `.filter()`, `.map()` და `.reduce()` თქვენივე `filter`-ის, `myMap`-ისა და `myReduce`-ის **შიგნით** (მე-5 და მე-9 სავარჯიშოები). სხვაგან მათი გამოყენება სრულიად დასაშვებია.

---

## ჩეკლისტი ჩაბარებამდე

* [ ] `exercise_1.js` … `exercise_8.js` არის `submissions/<your-username>/`-ის შიგნით
* [ ] `exercise_9.js` (არასავალდებულო) ასევე იქაა
* [ ] ყოველი ფაილი `node`-ით შეცდომების გარეშე გაეშვება და ბეჭდავს მოსალოდნელ შედეგს
* [ ] გამოყენებულია მხოლოდ 1–6 workshop-ებზე გავლილი ცნებები (`prompt()`-ის გარეშე)
* [ ] `exercise_3.js`: ვარაუდები კომენტარებში **გაშვებამდე** ჩაიწერა და ახსნაც ადგილზეა
* [ ] `exercise_4.js`: კომენტარი იმის შესახებ, რომელი ფუნქციაა სუფთა (და რატომ), ადგილზეა
* [ ] თქვენი ფოლდერის გარეთ არცერთი ფაილი არ შეცვლილა
* [ ] თქვენი ბრენჩი თქვენი GitHub-ის მომხმარებლის სახელით არის დასახელებული
* [ ] Pull Request გახსნილია სათაურით "Homework 5 - Your Name"
* [ ] Pull Request-ის აღწერაში ჩეკლისტი შევსებულია

წარმატებები! 🚀

---

## სასარგებლო ბმულები

* ფუნქციები: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
* ისრიანი ფუნქციები: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* ნაგულისხმევი პარამეტრები: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
* ხედვის არე (scope): https://developer.mozilla.org/en-US/docs/Glossary/Scope
* რეკურსია: https://developer.mozilla.org/en-US/docs/Glossary/Recursion
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
* spread სინტაქსი (`[...cart, item]`): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
* GitHub Docs — რეპოზიტორიის fork: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
* GitHub Docs — Pull Request-ის შექმნა fork-იდან: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
