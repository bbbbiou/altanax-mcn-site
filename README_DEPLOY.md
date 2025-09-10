# AltanaX MCN — Static Landing Page

A lightweight multilingual (ZH/EN/TH) landing page for fast testing online.

## Quick Deploy (No Code)

### Option A — Netlify Drop (fastest)
1. Go to `https://app.netlify.com/drop`.
2. Drag & drop the whole folder **AltanaX-MCN-site**.
3. Netlify will return a temporary URL like `https://something.netlify.app`.

### Option B — Vercel
1. Create a new project at `https://vercel.com/new`.
2. Choose **Deploy from Git** or **Deploy Folder**.
3. If using Git: push this folder to a repo, then import it. Framework preset: **Other** (static).
4. Build command: **None**. Output directory: **/**.

## Edit Content
- Open `index.html`.
- Change texts in the `dict` object (Chinese/Thai/English) or default language by calling `setLang('zh'|'th'|'en')` at the bottom.
- Replace placeholders in the **Hero Media** & **Brands** sections.
- Update contact links (email/phone/LINE).

## SEO & Analytics (later)
- Add OG tags in `<head>`.
- Add pixel scripts or GA near the end of `</head>` or before `</body>`.

## Notes
- This is a pure static page (HTML + Tailwind via CDN). No backend required.
