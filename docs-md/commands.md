# Terminal kommandoer

Her er nogle terminal kommandoer vi har brugt

## Installation
```bash
# klon repo
git clone github.com/user/repo.git
git clone git@github.com:user/repo.git # alternativ måde

# push applikation til github
git init
git add .
git commit -m "commit besked"
git push origin master

# installer dependencies
npm install
npm i # alternativ måde

# installer dependencies globalt
npm install -g
npm i -g # alternativ måde

# kør dev
npm run dev

# kør build
npm run build

# opret package.json
npm init

# installer Express for at oprette package-lock.json
npm install express
npm i express # alternativ måde

# auto genstart applikation når ændringer opfanges
nodemon app.js