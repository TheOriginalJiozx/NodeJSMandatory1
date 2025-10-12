# Tools

This page explains all the tools we have used in class.

---

## Node.js

**Node.js** is a JavaScript runtime built on Chrome’s V8 engine.  
It allows us to run JavaScript code outside of the browser — for example, on a web server.

We use Node.js to run our Express app.

```bash
node app.js
```

## Nodemon

**Nodemon** is a commandline-tool that automatically restarts our Express application whenever it detectcs changes.

```bash
nodemon app.js
```
## Express

**Express** is a Node.js web application framework that is used to build and manage web servers.

```bash
import express from "express";
const app = express();
app.get("/", (req, res) => res.send("Hello Express"));
```