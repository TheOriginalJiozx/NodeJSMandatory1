# Teori

Denne side gennemgår alt teori

---

# 01. Introduction

**Dato:** 28. august

## Emner dækket

- Introduktion til faget og eksamensforventninger  
- Introduktion til Node.js  
- Variabler og datatyper i JavaScript  
- REST API-konventioner og Richardson Maturity Model  
- Code Conventions / Clean Code

---

## Hvad er Node.js?
**Node.js** er et JavaScript-runtime miljø, som gør det muligt at køre JavaScript uden for en browser, typisk på en server. Node.js bruges ofte til at bygge backend-applikationer.

### Start en applikation

```bash
node app.js
```

**Moduler** vi bl.a. har brugt i Node.js er **fs** (filsystem) og **path**.

## Variabler

Man kan erklære på tre forskellige måde i JS:

```javascript
var name = "Omar"; // Undgå denne måde!
let age = 30; // Bruges hvis man have variables, som skal kunne ændres
const e = 2.718; // Bruges til konstanter
```

## Datatyper

**Primitiver:**
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- Bigint

**Objekt-typer:**

- Array
- Date
- Object
- Function

## Type Coercion

JavaScript auto-konverter mellem typer i visse situationer.

### Eksempel

```javascript
console.log("5" + 1); // 1 bliver her automatisk konverteret til en string da "5" er en string. Dette udskrives som en string (resultat = 51), da der her blev lagt en ´string´ (1) til "5" (også en string).

console.log("5" - 1); // Dette udskrives som en number (resultat = 4), da der forsøges at konvertere "5" til et tal, og der udføres en numerisk operation efterfølgende. Grunden til dette er, at "-" aldrig bruges til string-sammenklædning.
```

## REST API-konventioner

**REST API'er** definerer hvordan klinter og serverer kommunikerer ved hjælp af HTTP.

**Første konvention:** HTTP-verber
```javascript
GET -> henter data
POST -> opretter data
PUT/PATCH -> opdaterer data
DELETE -> sletter data
```

**Anden konvention:** Rækkefølge og struktur (der skal organiseres efter ressource og ID)
```javascript
/api/users -> alle brugere
/api/users/:id -> specifik bruger
```

**Tredje konvention:** Navngivning (Navneord i flertal) -> brug navneord i flertal

### Eksempel

```javascript
/api/students
/api/teachers
/api/schools
/api/colleges
/api/universities
/api/collegeuniversities
```

## Richardson Maturity Model

**Richardson Maturity Model** siger, at REST API'er kan vurderes ud fra niveauer mellem 0 og 3.

<table class="table-auto border-collapse border border-slate-300 text-sm">
  <thead class="bg-slate-100">
    <tr>
      <th class="border border-slate-300 px-2 py-1 text-left">Niveau</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Beskrivelse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 py-1">0</td>
      <td class="border px-2 py-1">Ingen konventioner - her håndterer et endpoint det hele.</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">1</td>
      <td class="border px-2 py-1">Ressourcer bliver introduceret, f.eks.: <code>/students</code>, 
      <code>/teachers</code></td>
    </tr>
    <tr>
      <td class="border px-2 py-1">2</td>
      <td class="border px-2 py-1">Korrekte HTTP-Metoder bliver brugt: <code>GET</code>, <code>POST</code>, <code>PUT/PATCH</code>, <code>DELETE</code></td>
    </tr>
    <tr>
      <td class="border px-2 py-1">3</td>
      <td class="border px-2 py-1">Hypermedia (hvor tekst, video, billeder er links) bliver brugt til at guide klienten/brugeren.
    </tr>
  </tbody>
</table>

## Code Conventions / Clean Code

**Clean Code** er kode, som er letlæselig, letforståelig og let tilgængelig for ændringer.

Det er vigtigt at variabler, funktioner, metoder og andet har meningsfulde navne.

### Clean Code Eksempel

```javascript
function sumOfAges(a + b) {
    return a + b;
}
```

### Bad Code Eksempel

```javascript
function SOA(a + b) {
    return a + b;
}
```

Det anbefales at bruge en linter for at finde kodefejl og for at forbedre kodekvalitet. En linter hjælper dig med automatisk at overholde alle tre clean code konventioner.

## Git i terminalen

**Git** bruges til versionstyringen direkte i en terminal.

Det man typisk bruger git til er at pushe noget til GitHub:

```bash
git init
git add .
git commit -m "commit besked"
git push origin master
```

# 02. First Server  
**Dato:** 4. september  

## Emner dækket
- Code conventions / Clean Code (Strict Mode & ESLint)  
- Variabler og funktioner  
- Callback functions  
- Build tools og package managers  
- package.json  
- Express  
- GET requests  

---

## Clean Code & Strict Mode

I JavaScript kan man lave fejl som f.eks.:

```bash
ReferenceError
Undefined Variables
Type Coercion Error
ASI Error
TypeError
Syntax Error
```

Som JavaScript tillader.

Ved at bruge **Strict Mode** og **Clean Code-Principper** (ikke nødvendigvis alle principperne) kan vi undgå mange af disse fejl.

For at bruge **Strict Mode** skal du blot tilføje dette øverst i dine JS filer:

```javascript
"use strict";
```

**Strict Mode** forbyder eksempelvis Undefined Variables, TypeError, Syntax Error og utilsigtet overskrivelse af Global Variables.

### Installation

```bash
npm install eslint --save-dev
npx eslint --init
```

### Fejl og advarsels-tjek

```bash
npx eslint .
```

## Variabler og Scoping

<code>const</code> bruges til konstanter

<code>let</code> bruges hvis værdierne skal ændres

<code>var</code> bør undgås!

### Eksempel

```javascript
function aboutMe() {
    const name = "Omar";
    let age = 30;
}
```

## Functions & Callback Functions

En callback function er en funktion, som gives som et argument til en anden funktion og bliver kaldt på et senere tidspunkt.

### Eksempel på klassisk callback

```javascript
function helloYou(name) {
    console.log(`Hej ${name}`);
}

function processPerson(callback) {
    const person = "Kasper";
    callback(person);
}

processPerson(helloYou);
```

### Resultat hvis eksekveret

```bash
Hej Kasper
```

### Eksempel på anonym callback

```javascript
function helloYou(callback) {
    const person = "Kasper";
    callback(person);
}

helloYou((name) => {
    console.log(`Hej ${name}`);
});
```

<code>(name) => { ... }</code> eller <code>function(name) => { ... }</code> er her anonyme funktioner, og de bliver hverken gemt i en variabel eller har et navn. De bliver sendt som et argument til <code>helloYou</code> og bliver kaldt med callback(person).

### Resultat hvis eksekveret

```bash
Hej Kasper
```

## Build Tools & Package Managers

En package manager styrer dependencies i et projekt. Vi har gjort brug af NPM, men der findes andre.

<table class="table-auto border-collapse border border-slate-300 text-sm">
  <thead class="bg-slate-100">
    <tr>
      <th class="border border-slate-300 px-2 py-1 text-left">Værktøj</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Beskrivelse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 py-1">NPM</td>
      <td class="border px-2 py-1">Standard Node.js package manager.</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Yarn</td>
      <td class="border px-2 py-1">Indeholder hurtigere alternativer med caching.</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">pnpm</td>
      <td class="border px-2 py-1">Gemmer pakker effekt og sparer diskplads<br>
      ("disk space efficient package manager").<br>
      2x hurtigere end npm.</td>
    </tr>
  </tbody>
</table>

## package.json

<code>package.json</code> indeholder beskrivelse af dit projekt og alle dets dependencies.

### Opret package.json manuelt

```bash
npm init
```

### Opret package.json automatisk

```bash
npm init -y
```

"-y" betyder "yes" til alle prompts og udfylder alt "by default".

## Express

Express er et Node.js web-applikations framework, som gør det nemmere at oprette HTTP-servere.

### Installation

```bash
npm install express
npm i express # alternativ måde (i = install)
```

### Eksempel

```javascript
import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.listen(PORT, () => console.log(`Serveren lytter på port ${PORT}`));
```

### Terminal

```
Serveren lytter på port 3000
```

### Vist på Index

```
Hello from Express!
```

## GET Requests

<code>GET bruges til at hende data fra vores server.</code>

### Eksempel på GET Request

```javascript
app.get("/hellYou", (req, res) => {
    const name = req.query.name || "Gæst";
    res.send(`Hej ${name}!`);
});
```

### Tilgå siden i tilfælde af med og uden navn

```bash
http://localhost:3000/helloYou?name=Omar; # Hej Omar!

http://localhost:3000/helloYou # Hej Gæst!
```

## node_modules

<code>node_modules</code> er en mappe, som indeholder alle de pakker vores projekt afhænger af. Hver gang man eksekverer nedenstående, så bliver mappen automatisk gendannet.

### Node Package Manager Installation
```bash
npm install
```

# 03. Loops methods
**Dato** 11. september

## Emner dækket
- Nodemon
- Loops og loop methods i JavaScript
- CRUDable REST API - Part I
- Anatomy af et URL
- Alle måder man kan sende fra en klient til en server
- Visning af HTML med Express

---

## Nodemon

**Nodemon** er et værktøj, som er god til at hjælpe i udviklingsfasen. Nodemon genstarter applikationen når den opfanger ændringer.

```bash
nodemon app.js
```

## Loops & Loop methods

**Loops** er brugbare hvis man vil køre den samme kode gentagene gang med en ny værdi hver gang. Bruges ofte når man arbejder med arrays.

### Copy + Paste

```javascript
text += footballs[0] + "<br>";
text += footballs[1] + "<br>";
text += footballs[2] + "<br>";
text += footballs[3] + "<br>";
text += footballs[4] + "<br>";
text += footballs[5] + "<br>";
```

### For Loop
```javascript
let footballs = ["Adidas", "Nike", "Puma"];
let text = "";

for (let i = 0; i < footballs.length; i++) {
    text += footballs[i] + "<br>";
} // bruges når man ved hvor mange gange koden skal køre.
```

### While Loop
```javascript
let footballs = ["Adidas", "Nike", "Puma"];
let text = "";

while (i < footballs.length) {
    text += footballs[i] + "<br>";
    i++;
} // kører KUN hvis betingelsen er sand.
```

### Do While Loop
```javascript
let footballs = ["Adidas", "Nike", "Puma"];
let text = "";

do {
    text += footballs[i] + "<br>";
    i++;
} while (i < footballs.length); // kører mindst en gang, selvom betingelsen er falsk.
```

**Loop methods** gør det nemt at arbejde med arrays uden at skulle skrive de klassiske loops, som ses foroven.

### forEach()
```javascript
const footballs = ["Adidas", "Nike", "Puma"];

footballs.forEach(function(ball) {
    console.log(ball);
}); // udfører en funktion for hvert element i const arrayet.
```

### map()
```javascript
const ratings = [10, 7, 7];
const doubledRatings = numbers.map(doubleRating => doubleRating * 2);
console.log(doubledRatings); // returnerer et nyt array ([20, 14, 14]) baseret på const ratings arrayet.
```

### filter()
```javascript
const ratings = [10, 7, 7];
const over7 = ratings.filter(rating => rating > 7);
console.log(over7); // returnerer et nyt array med elementer, som opfylder betingelsen rating > 7 ([10])
```

### find()
```javascript
const ratings = [10, 7, 7];
const found = ratings.find(rating => rating <> 10);
console.log(found); // finder det første element, som opfylder betingelsen rating < 10 ([7])
```

### reduce()
```javascript
const ratings = [10, 7, 7];
const sum = ratings.reduce((total, rating) => total + rating);
console.log(sum); // returerner summen af alle ratings (24)
```

Der findes også <code>for...of</code> og <code>for...in</code> loop methods, som jeg ikke vil komme ind på.

### Funktionel tænkning og sideeffekter

**Funktionel tilgang** betyder, at vi undgår at ændre eksisterende data og i stedet returner nye værdier.

### Eksempel
```javascript
// Ikke-funktionel: ændrer det originale array
let ratings = [10, 7, 7];
ratings.forEach((_, i) => ratings[i] *= 2);

// Funktionel: oprettet et nyt array
const doubledRatings = ratings.map(r => r * 2);
```

## CRUDable REST API - Part I

Et **CRUDable REST API** betyder, at dit API understøtter de 4 CRUD operationer, <code>Create</code>, <code>Read</code>, <code>Update</code>, <code>Delete</code>.

Mere om CRUDable REST API'er vil blive nævn i næste part.

## Anatomy af et URL

Et **URL** viser hvor en ressource eksisterer på nettet.

### Eksempel

```bash
http://localhost:3000/aflevering/docs/theory
```

###
<table class="table-auto border-collapse border border-slate-300 text-sm">
  <thead class="bg-slate-100">
    <tr>
      <th class="border border-slate-300 px-2 py-1 text-left">Del</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Navn</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Forklaring</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 py-1">http</td>
      <td class="border px-2 py-1">Protokol</td>
      <td class="border px-2 py-1">Hvordan klienten kommunikerer med serveren</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">localhost</td>
      <td class="border px-2 py-1"><code>Host / Domæne</code></td>
      <td class="border px-2 py-1">Serverens web-adresse</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">:3000</td>
      <td class="border px-2 py-1">Port</td>
      <td class="border px-2 py-1">Hvilken port serveren lytter på</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">/docs/theory</td>
      <td class="border px-2 py-1"><code>Path</td>
      <td class="border px-2 py-1">Den konkrete rute på serveren</td>
    </tr>
  </tbody>
</table>

## Data fra klient til server

Der kan sendes data fra klienten til serveren på flere forskellige måder, som f.eks. ved brug af cookies.

###
<table class="table-auto border-collapse border border-slate-300 text-sm">
  <thead class="bg-slate-100">
    <tr>
      <th class="border border-slate-300 px-2 py-1 text-left">Metode</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Eksempel</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Bruges typisk til</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 py-1">Query parametre</td>
      <td class="border px-2 py-1">/api/students?id=1</td>
      <td class="border px-2 py-1">Filtrering eller små forespørgelser</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">URL parametre</td>
      <td class="border px-2 py-1"><code>/api/students/1</code></td>
      <td class="border px-2 py-1">Ressource-ID'er i REST API'er</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Request body (POST/PUT)</td>
      <td class="border px-2 py-1">JSON-data i body</td>
      <td class="border px-2 py-1">Oprette eller opdatere data</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Headers</td>
      <td class="border px-2 py-1"><code>Authorization: Bearer ...</td>
      <td class="border px-2 py-1">Autentifikation</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Cookies</td>
      <td class="border px-2 py-1"><code>Sendes automatisk med requests</td>
      <td class="border px-2 py-1">Sessioner og log ind</td>
    </tr>
  </tbody>
</table>

### Request body

```javascript

// Step 1: Lav en fetch

fetch("http://localhost:3000/api/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Omar",
        age: 30
    })
});

// Step 2: Brug middleware'en

import express from "express";
const app = express();
app.use(express.json()); // det er middleware'en

app.post("/api/students", (req, res) => {
    console.log(req.body); // viser JSON-data i body
    res.send(`Studerende ${req.body.name} tilføjet!`);
});

app.listen(3000, () => console.log("Serveren lytter på port 3000"));

// Step 3: Start serveren

{ name: 'Omar', age: 30 } // serverens konsol viser dette

Studerende Omar tilføjet! // du (klienten) ser dette
```

## Visning af HTML med Express

Express kan vise HTML-filer på denne måde (som request):

```javascript
import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.listen(3000, () => console.log("Serveren lytter på port 3000"));
```

# 04. HTML / Time  
**Dato:** 18. september  

## Emner dækket
- CRUDable REST API – Part II  
- Tid i JavaScript  
- Deployment  
- Fetch  

---

## CRUDable REST API - Part II

Et **CRUDable REST API** består af fire grundlæggende operationer:

<table class="table-auto border-collapse border border-slate-300 text-sm">
  <thead class="bg-slate-100">
    <tr>
      <th class="border border-slate-300 px-2 py-1 text-left">Operation</th>
      <th class="border border-slate-300 px-2 py-1 text-left">HTTP-metode</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Endpoint</th>
      <th class="border border-slate-300 px-2 py-1 text-left">Beskrivelse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 py-1">Create</td>
      <td class="border px-2 py-1"><code>POST</code></td>
      <td class="border px-2 py-1"><code>/api/users</code></td>
      <td class="border px-2 py-1">Opretter en ny ressource</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Read</td>
      <td class="border px-2 py-1"><code>GET</code></td>
      <td class="border px-2 py-1"><code>/api/users</code> eller <code>/api/users/:id</code></td>
      <td class="border px-2 py-1">Henter data</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Update</td>
      <td class="border px-2 py-1"><code>PUT</code> / <code>PATCH</code></td>
      <td class="border px-2 py-1"><code>/api/users/:id</code></td>
      <td class="border px-2 py-1">Opdaterer en eksisterende ressource</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Delete</td>
      <td class="border px-2 py-1"><code>DELETE</code></td>
      <td class="border px-2 py-1"><code>/api/users/:id</code></td>
      <td class="border px-2 py-1">Sletter en ressource</td>
    </tr>
  </tbody>
</table>

Et **REST API** (Representational State Transfer) følger konventioner, hvor HTTP-metoderne afspejler handlingen.  
Data sendes og modtages typisk i **JSON-format**, hvilket gør det nemt at arbejde med i JavaScript.

### Eksempel – Express router
```javascript
import express from "express";
const app = express();

app.get("/users", (req, res) => res.json(users));         // Read
app.post("/users", (req, res) => res.json(req.body));     // Create
app.put("/users/:id", (req, res) => res.sendStatus(204)); // Update
app.delete("/users/:id", (req, res) => res.sendStatus(204)); // Delete

export default router;
```

## Tid i JavaScript

**JavaScript** håndterer datoer og tid med et Date-objekt.

### Eksempel - Hent nuværende tid

```javascript
const now = new Date();
console.log(now.toISOString()); // Live
```

## Deployment

**Deployment** betyder at offentliggøre applikationen.
Typiske steps er (Eksemplet er: Vercel efter log ind):

```bash
1. Add New -> Project
2. Import Git Repository -> Import
3. Sørg for at importere .env eller indtaste .env contents hvis du eksempelvis har en database
4. Deploy
```

## Fetch

**Fetch** betyder at hente data, og det bruges til at hente/sende data mellem frontend og backend.

## GET-forespørgsel

```javascript
fetch("api/users")
    // default method er GET
    .then(res => res.json())
    .then(data => console.log(data));
```

## Post-forespørgsel

```javascript
fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Omar", age: 30 })
});
```

## Async/await

```javascript
async function loadUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log(data);
}
```