# Teori

Denne side gennemgør alt teori

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

## Start en applikation

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

## Eksempel

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

**Tredje konvention:** Navngivning (Navneord i flertal) -> brug navnord i flertal

## Eksempel

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

## Clean Code Eksempel

```javascript
function sumOfAges(a + b) {
    return a + b;
}
```

## Bad Code Eksempel

```javascript
function SOA(a + b) {
    return a + b;
}
```

Det anbefales at bruge en linter for at finde kodefejl og for at forbedre kodekvalitet.

## Git i terminalen

**Git** bruges til versionstyringen direkte i en terminal.

Det man typisk bruger git til er at pushe noget til GitHub:

```bash
git init
git add .
git commit -m "commit besked"
git push origin master
```

# 04. HTML / Time  
**Dato:** 18. september  

## Emner dækket
- CRUDable REST API – Part II  
- Tid i JavaScript  
- Deployment  
- Fetch  

---

## CRUDable REST API

Et **CRUD-API** består af fire grundlæggende operationer:

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
1. Add New -> Project
2. Import Git Repository -> Import
3. Sørg for at importere .env eller indtaste .env contents
4. Deploy

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