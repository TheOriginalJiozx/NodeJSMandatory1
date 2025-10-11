import express from "express";
import fs from "fs/promises";
import path from "path";
import MarkdownIt from "markdown-it";
import mk from "markdown-it-anchor";
import hljs from "highlight.js";
import expressLayouts from "express-ejs-layouts";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.static(path.join(process.cwd(), "public")));
app.use(expressLayouts);

const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code class="hljs">${hljs.highlight(str, { language: lang }).value}</code></pre>`;
      } catch (__) {}
    }
    return `<pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`;
  }
}).use(mk);

async function renderDoc(slug = "index") {
  const file = path.join(process.cwd(), "docs-md", `${slug}.md`);
  const content = await fs.readFile(file, "utf8");
  const html = md.render(content);
  return html;
}

app.get("/", async (req, res) => {
  const html = await renderDoc("index");
  res.render("doc", { title: "Forside", content: html });
});

app.get("/docs/:slug", async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const html = await renderDoc(slug);
    res.render("doc", { title: slug, content: html });
  } catch (err) {
    next();
  }
});

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(PORT, () => {
  console.log(`Server kører på http://localhost:${PORT}`);
});