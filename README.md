# Gabriele Baiamonte Portfolio

Portfolio personale statico realizzato con Next.js App Router, TypeScript, Tailwind CSS e Framer Motion.

Il sito e' pensato per GitHub Pages sul repository `Gabriele30.github.io`, quindi non usa `basePath` o `assetPrefix`.

## Comandi

```bash
npm install
npm run dev
npm run build
```

La build statica viene generata nella cartella `out/`.

## Struttura

```text
app/
components/
components/sections/
components/ui/
data/
lib/
public/
```

## Deploy su GitHub Pages

1. Crea su GitHub un repository pubblico chiamato:

```text
Gabriele30.github.io
```

2. Collega questo progetto al repository e fai push su `main`:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Gabriele30/Gabriele30.github.io.git
git push -u origin main
```

3. Vai nelle impostazioni del repository:

```text
Settings -> Pages
```

4. In `Build and deployment`, seleziona:

```text
Source: GitHub Actions
```

5. A ogni push su `main`, il workflow `.github/workflows/deploy.yml` esegue:

```bash
npm ci
npm run build
```

e pubblica automaticamente la cartella `out/` su GitHub Pages.

6. Dopo il deploy, il sito sara' raggiungibile da:

```text
https://Gabriele30.github.io
```

## Configurazione GitHub Pages

La configurazione Next.js usa:

- `output: "export"`
- `images.unoptimized: true`
- nessun `basePath`
- nessun `assetPrefix`
- nessuna API route
- nessuna server action
- nessun database

Il workflow imposta `NEXT_PUBLIC_SITE_URL=https://Gabriele30.github.io` durante la build, cosi' i metadata social usano l'URL pubblico corretto.

## CV

Il pulsante `Scarica CV` punta a `public/cv.pdf`, esportato come `/cv.pdf` nella build statica.

Prima del deploy finale, sostituisci `public/cv.pdf` con il CV aggiornato di Gabriele Baiamonte mantenendo lo stesso nome.

## Note tecniche

- Form di richiesta servizio statico via `mailto:`
- Link interni con anchor alle sezioni
- Layout responsive mobile-first
- Compatibile con hosting statico gratuito su GitHub Pages
