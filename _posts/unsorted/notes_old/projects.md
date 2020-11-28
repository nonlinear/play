# Projects

```
snippetToVsCode -s ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/exo -o ~/Desktop/css.json
```

~/Library/Application\ Support/Sublime\ Text\ 3/Packages/exo

## Praxis

```
cd ~/Documents/praxis/site/
git pull
open http://localhost:4000
bundle exec jekyll serve --incremental

```

---

## Style Guide

```
cd ~/Documents/wiley/design-system/brand/
git checkout 1.0
git pull
subl .
yarn storybook

```

---

## REX prototype

```
cd
cd ~/Documents
ls
cd wiley/REX/prototype/src
subl .
open http://localhost:8000
cd ..
git checkout master
git pull
gatsby develop

```

---

## EXO

```
cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/exo
git pull
subl .

```

---

## Mastodon

```
cd /Users/nfrota/Documents/praxis/mastodon-theme
open index.html
subl .
sass styles/application.scss:styles/application.css --watch


```

---

## nonlinear v3

```
cd ~/Documents/nonlinear/v3/
git pull
subl .
open http://localhost:4000
bundle exec jekyll serve --incremental

```

```
cd ~/Documents/nonlinear/v3/
cp -a _site/. docs/
git add -A
git commit -m "publish"
git push
open http://nonlinear.nyc/v3

```
