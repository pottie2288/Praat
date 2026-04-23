# Praat landing page

Zero-dependency, single-file landing page. Drop it anywhere that serves HTML.

## Before deploying

1. Open `index.html` and find this line near the end:

   ```js
   const REPO = "YOUR-USERNAME/praat";
   ```

   Replace `YOUR-USERNAME/praat` with your actual GitHub repo (e.g. `pottie2288/praat`).

2. Also replace the two `YOUR-USERNAME` strings in the `<a>` tags in the HTML (the header GitHub link and the platform card fallback `href`s). You can find them with:

   ```bash
   grep -n "YOUR-USERNAME" index.html
   ```

## Deploying

### Option A — Vercel (easiest)

```bash
# one-time
npm i -g vercel

# from inside the /landing folder
vercel deploy --prod
```

Gives you a free `praat.vercel.app` URL instantly. Add a custom domain later in the Vercel dashboard.

### Option B — Netlify drop

1. Go to <https://app.netlify.com/drop>
2. Drag the `landing` folder onto the page
3. Done. Free subdomain issued immediately.

### Option C — GitHub Pages

1. In your repo settings → Pages → Source = Deploy from a branch → `main` / `/landing`
2. Visit `https://YOUR-USERNAME.github.io/praat/`

### Option D — Cloudflare Pages

1. Connect the repo
2. Build command: _(none)_
3. Build output directory: `landing`

## How the download buttons work

The page fetches your GitHub repo's latest release via the public GitHub API on page load and:

- Detects the user's OS (macOS / Windows / Linux)
- Detects arch (ARM vs x86/x64) when the browser reports it
- Populates the primary download button with the best matching installer
- Populates the three platform cards with their respective installers

If the API call fails (rate limit, offline, etc.), the buttons fall back to your GitHub releases page so users still get where they need to go.

**No build step. No npm install. No framework. One HTML file.**
