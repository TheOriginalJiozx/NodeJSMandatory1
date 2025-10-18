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

<code>GET</code> bruges til at hente data fra vores server.

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
      <td class="border px-2 py-1">Host / Domæne</td>
      <td class="border px-2 py-1">Serverens web-adresse</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">:3000</td>
      <td class="border px-2 py-1">Port</td>
      <td class="border px-2 py-1">Hvilken port serveren lytter på</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">/docs/theory</td>
      <td class="border px-2 py-1">Path</td>
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
```

###
```json
// Step 3: Start serveren

{ name: 'Omar', age: 30 } // serverens konsol viser dette
```

###
```bash
Studerende Omar tilføjet! # du (klienten) ser dette
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

### Eksempel - Hent nuværende dato og tid

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

### GET-forespørgsel

```javascript
fetch("api/users")
    // default method er GET
    .then(res => res.json())
    .then(data => console.log(data));
```

### Post-forespørgsel

```javascript
fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Omar", age: 30 })
});
```

### Async/await

```javascript
async function loadUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log(data);
}
```

# 05. Export / Import
**Dato:** 25. september

## Emner dækket
- Visning af statiske filer i Express
- Eksportering og importering i frontend (type="module" attribut)
- CommonJS vs ES Modules i Node.js
- Client-side redirection vs server side redirection
- npm init og meta data i package.json

---

## Visning af statiske filer i Express

**"Visning af statiske filer"** betyder, at vores Express server leverer filer **direkte** til klienten, uden filerne først skal behandles i backend-logikken.

### Eksempler på statiske filer

<code>HTML</code>
<code>CSS</code>
<code>JavaScript</code>
<code>Billeder</code>
<code>TypeScript</code>
<code>MD Filer</code>
<code>PDF'er</code>

### Eksempel

```javascript
// Opret en "public"-mappe i dit root document før du går igang

import express from "express";
import path from "path"; // vigtig!

const app = express();

app.use(express.static(path.join(process.cwd(), "public"))); // "public"-mappen offentliggøres for alle brugere

app.listen(3000, () => console.log("Serveren lytter på port 3000"));

// Nu kan alle statiske filer i "public"-mappen tilgås i en browser.

// public/index.html -> http://localhost:3000 (index er default)
// public/js/main.js -> http://localhost:3000/js/main.js
// public/css/main.css -> http://localhost:3000/css/main.css
```

## Eksportering og importering i frontend (type="module" attribut)

I vores **package.json** kan vi ved brug af <code>"type": "module"</code> eksportere og importere i backend, men ved brug af <code>type="module"</code> som attribut i et <code>script</code>-tag kan vi importere og eksportere i frontend.

### Eksempel

```javascript
// tilføj i en HTML-fil
<script type="module" src="main.js"></script>

// math.js eksportering
export function sum(a + b) {
    return a + b;
}
export const e = 2.718;

// main.js importering
import { sum, e } from './math.js';
console.log(sum(10 + 7));
console.log(e);
```

## CommonJS vs ES Modules i Node.js

**Node.js** understøtter to måder man kan importere og eksportere moduler på:

**CommonJS** og **ES Modules**

**CommonJS** var standarden før **ES Modules** blev introduceret og blev standarden.

### CommonJS Eksempel

```javascript
// tilføj i en HTML-fil
<script type="module" src="main.js"></script>

// math.js
function sum(a, b) {
    return a + b;
}
module.exports = { sum };

// app.js
const { sum } = require("./math.js");
console.log(sum(10, 7));
```

### ES Modules Eksempel
```bash
"type": "module" # husk dette i package.json
```

###
```javascript
// math.js
export function sum(a, b) {
    return a + b;
}

// app.js
import { sum } from "./math.js";
console.log(sum(10 + 7));
```

## Client-side redirection vs server-side redirection

**Client-side redirection** betyder, at browseren håndterer viderestillingen, man bliver viderestillet ved brugerinteraktion eller automatisk ved brug af JavaScript eller HTML.

### Eksempler

```html
<a href="index.html">Gå til forside</a> <!-- kræver brugerinteraktion -->
```

###

```javascript
window.location.href="index.html"; // automatisk viderestilling
```

###

```html
<meta http-equiv="refresh" content="0; url=/index"> <!-- viderestiller efter et bestemt antal milisekunder -->
```

**Server-side redirection** betyder, at serveren håndterer viderestillingen, man bliver automatisk viderestillet til en ny side. Dette sker typisk ved, at der bliver sendt en HTTP-statuskode (301, 302, 303, 307, 308 m.fl.) sammen med en <code>Location</code>-header.

### Eksempler

```javascript
res.redirect('/index'); // (Standard 302 redirect)
res.redirect(301, '/index'); // Permanent redirect
res.redirect(302, '/index'); // Midlertidig redirect

// alle ovenstående medfører automatiske viderestillinger
```

###

```javascript
setTimeout(() => {
    res.redirect('/index'); 
}, 2000); // viderestiller efter 2 sek
```

## npm init og meta data i package.json

<code>npm init</code> er en terminal-kommando, som bruges til at oprette package.json filen manuelt. Du initialiserer en ny package og opretter dermed et nyt Node.js projekt.

### Hvad sker der præcis når man kører npm init?

```bash
npm init
```

### Terminal prompts
```bash
- name: hvad skal dit projekt hedde?
- version: initiel projekt version
- description: kort beskrivelse af dit projekt
- entry point: main fil i dit projekt # default er index.js
- test command: hvilken kommando vil du bruge til at køre tests?
- git repository: dit GitHub repository url
- keywords: et array af keywords, som kan hjælpe andre med at finde dit projekt
- author: hvad hedder du?
- license: hvilken license vil du bruge? # default er "ISC"
```

<code>meta-data</code> i package.json er alt hvad du bliver promptet til at udfylde efter du har kørt <code>npm init</code>.

```json
{
"name": "...",
"version": "...",
"description": "...",
"main": "...",
"repository": {
    "type": "git",
    "url": "..."
  },
"type": "...",
"keywords": [...],
"author": "...",
"license": "..."
}
```

# 06. Client vs Server / Miljøvariabler
**Dato:** 02. oktober

## Emner dækket
- Package.json scripts
- Miljøvariabler
- Fetching i Node.js
- Semantisk HTML: nav, main, footer

---

## Package.json scripts

I package.json kan man gemme nogle scripts, som kan bruge til at udføre diverse opgaver såsom <code>test</code>.

### Eksempler på scripts

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", // ingen test (npm run test)
    "start": "node app.js", // start app.js (npm start / npm run start)
    "dev": "nodemon app.js", // start app.js med nodemon (npm run dev)
}
```

## Miljøvariabler
Miljøvariabler bruges til gemme følsomme ting såsom API-nøgler og database oplysninger uden at hardcode dem i koden, så de ikke bliver misbrugt. Dette gør applikationen mere sikker, fleksibel og nemmere at konfigurere på diverse systemer da alt lægger i en <code>.env</code> fil.

### Eksempel .env
```bash
PORT=3000
MySQL_URL="mysql://localhost:3000/mandatory"
MySQL_USER="root"
MySQL_PASSWORD="mysecretpassword"
```

### Eksempel hent port fra .env
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveren lytter på port ${PORT}`));
```

## Fetching i Node.js (backend) vs Fetching i Browseren (client)

Der er verden til forskel på at fetch'e data i klienten (frontend) og at fetch'e i backend (Node.js)

I frontend kører koden i browseren, og i backenden kører koden i serveren.

Frontendens API-adgang er samme origin eller defineret i CORS, hvorimod backenden har direkte adgang.

### Eksempel
```javascript
fetch('/api/frontendDataExample')

await fetch('https://api.backendExample')
```

### Eksempel (Backend) fetch TheOriginalJiozx på GitHub (mig)

```javascript
const res = await fetch("https://api.github.com/users/TheOriginalJiozx");
const data = await res.json();
console.log(data);
```

## Semantisk HTML: nav, main, footer

I HTML er der nogle semantiske elementer:

Navigationen, <code>nav</code>, skal være øverst på siden, indhold skal være i et <code>main</code>-tag og footer skal være på bunden i et <code>footer</code>-tag.

## Bedre struktur i frontend

En velstruktureret frontend har typisk assets og pages mapper hvori de seperarer CSS og JS fra HTML filer.

HTML filerne placeres i pages mappen og CSS samt JS filerne places i hhv. css og js mapper i assets mappen.

Dette gøres for at gøre koden genanvendelig og skalerbart.

# 07. Server-side Rendering (SSR) / Routers
**Dato:** 09. oktober

## Emner dækket
- Server-Side Rendering vs Client-Side Rendering
- Fillæsning
- Nodemon Extensions

---

## Server-Side Rendering (SSR) / Routers

SSR refererer til webudviklingsteknik hvor serveren genererer HTML og sender det til browseren, dvs. klienten (Server -> Client).

###
Dette er i kontrast til CSR (Client-Side Rendering) hvor klienten modtage rå data (raw data) og bruger JavaScript til at gengive HTML.

###
CSR giver hurtigere interaktivitet på hjemmesiden, reduceret server load og er god for hjemmesider, som påkræver dynamiske opdatering. Flere fordele er hurtigere navigering og SPA med dynamisk routing er muligt.

###
Men det har også sine ulemper såsom SEO limits, længere initial loading time, brugere ser en blank side hvis JavaScript er deaktiveret og caching er ikke muligt før hele siden er 100% loaded og det kan give CORS-problemer når klienten skal fetch'e data fra eksterne API'er.

###
SSR forbedrer SEO, giver hurtigere loading time, er god for statiske hjemmesider, eliminerer loading screens, giver ingen CORS-problemer, mindre serverbelastning.

###
SSR har også sine ulemper såsom øget server load, forsinket hjemmesideaktivitet, øget server belastning, øget udviklingskompleksitet og omkostningsmæssige konsekvenser (cost implications). Hver interaktion kræver ny serverforespørgsel (medfører længere gengivelsestid).

### Sammenligning

<table class="table-auto border-collapse border border-slate-300 text-sm">
  <thead class="bg-slate-100">
    <tr>
      <th class="border border-slate-300 px-2 py-1 text-left">Faktor</th>
      <th class="border border-slate-300 px-2 py-1 text-left">SSR</th>
      <th class="border border-slate-300 px-2 py-1 text-left">CSR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-2 py-1">Loading time</td>
      <td class="border px-2 py-1">Hurtig</td>
      <td class="border px-2 py-1">Langsom</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">Ressourceforbrug</td>
      <td class="border px-2 py-1">På serveren</td>
      <td class="border px-2 py-1">På klienten</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">SEO</td>
      <td class="border px-2 py-1">Meget godt</td>
      <td class="border px-2 py-1">Dårligt</td>
    </tr>
    <tr>
      <td class="border px-2 py-1">CORS</td>
      <td class="border px-2 py-1">Ingen problemer</td>
      <td class="border px-2 py-1">Kræver håndtering via CORS headers/proxy</td>
    </tr>
  </tbody>
</table>


### SSR Eksempel (Embedded JavaScript / Express)

```javascript
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
```

### CSR Eksempel

```javascript
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

## Fillæsning

For at læse filer i Node.js skal man benytte sig af modulet <code>fs</code> (File System).

### Eksempel på asynkron læsning (async)

```javascript
import fs from "fs/promises";

const content = await fs.readFile("fileData.txt", "utf-8");
console.log(content);
```

### Eksempel på synkron læsning (sync)

```javascript
import fs from "fs";

const content = fs.readFileSync("fileData.txt", "utf-8");
console.log(content);
```

Forskellen på Asynkron læsning (async) og Synkron læsning (sync), er at async blokerer ikke event loopet (await blokerer ikke) og sync kan gøre vores applikation langsommere.

## Nodemon Extensions

Nodemon genstarter vores server/applikation automatisk når den opfanger ændringer. Du kan ved brug af <command>--ext</command> specificere hvilke filtyper den skal overvåge.

### Eksempel
```bash
nodemon app.js --ext js,json,ejs,css,md
```

## Kodestruktur & vedligeholdelse

Det er vigtigt med en god kodestruktur/mappestruktur da kode i lange file er svære at læse, teste og vedligeholde. Derfor er en god løsning at opdele filer i controllers, services, repositories, models og routes.

### Eksempel på mappestruktur

```css
src/
├── controllers/
├── services/
├── models/
└── routes/
```

Dette giver et bedre overblik over projekter, skaber modularitet (reduceret kompleksitet) og mindre hukommelsesforbrug.