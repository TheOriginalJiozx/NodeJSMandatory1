# Tools

Denne side forklarer alle de værktøjer, vi har brugt i undervisningen.

---

## Node.js

**Node.js** er en JavaScript-runtime bygget på Chromes V8-motor.

Den giver os mulighed for at køre JavaScript-kode uden for browseren – for eksempel på en webserver.

Vi bruger Node.js til at køre vores Express-app.

```bash
node app.js
```

## Nodemon

**Nodemon** er et kommandolinjeværktøj, der automatisk genstarter din Express-applikation, når den registrerer ændringer.

```bash
nodemon app.js
```
## Express

**Express** er et Node.js webapplikationsframework, der bruges til at bygge og administrere webservere.

```javascript
import express from "express";
const app = express();
app.get("/", (req, res) => res.send("Hello Express"));
```