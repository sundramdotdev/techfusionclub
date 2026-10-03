# Tech Fusion Club (TFC) - Deployment & Migration Guide

This document outlines how to deploy the Tech Fusion Club website across different environments. Because the website is built with **TanStack Start (Vite + Nitro)** and uses **Firebase** for its backend, it is 100% portable.

You can host it on serverless platforms (Vercel), static shared hosting (Hostinger standard), or your own private Linux server (VPS).

---

## 🏗 Architecture Overview (Why it's portable)

1. **Frontend:** React + Tailwind CSS + Shadcn UI.
2. **Framework:** TanStack Start. It uses the "Nitro" engine under the hood. Nitro is incredible because it can compile your app for _any_ environment just by changing a single environment variable (`NITRO_PRESET`).
3. **Database:** Firebase Firestore. All your data (Events, Alumni, Members, Gallery) is stored in the cloud. As long as your environment variables are configured, the frontend will connect to Firebase from anywhere.

---

## Scenario A: Deploying to Vercel (Recommended & Easiest)

Vercel is the industry standard for React apps and is 100% free for non-commercial projects.

1. Create an account on [Vercel](https://vercel.com/) and link your GitHub account.
2. Click **Add New Project** and import your Tech Fusion Club GitHub repository.
3. Vercel will automatically detect the framework (Vite/TanStack).
4. **Environment Variables:** Go to the Environment Variables section and add all your Firebase config keys from your `.env` file (e.g., `VITE_FIREBASE_API_KEY`, etc.).
5. **Build Command:** Keep it default or set to `npm run build` (This runs `cross-env NITRO_PRESET=vercel vite build` as defined in your `package.json`).
6. Click **Deploy**. Your site will be live with a free SSL certificate.

---

## Scenario B: Migrating to a Static Shared Hosting (e.g., Hostinger Standard, GoDaddy, cPanel)

Standard shared hosting doesn't support running Node.js servers natively. You need to compile the website into pure Static HTML/JS/CSS files.

### Step 1: Update your Build Script

In your `package.json`, add this script to force a static export:

```json
"scripts": {
  "build:static": "cross-env NITRO_PRESET=static vite build"
}
```

### Step 2: Build the App

Run this on your local computer:

```bash
npm run build:static
```

This will create an `.output/public` folder containing all your final static files.

### Step 3: Upload to Hosting

1. Log into your hosting's cPanel or hPanel.
2. Open the **File Manager** and go to `public_html`.
3. Upload **everything inside** the `.output/public` folder directly into `public_html`.

### Step 4: Add Routing Rules (.htaccess)

Since this is a Single Page Application (SPA), if a user goes directly to `/alumni`, the static server will look for an `alumni.html` file and fail (404 error). We need to redirect all traffic to `index.html`.
Create a file named `.htaccess` in your `public_html` folder and add:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Scenario C: Migrating to a VPS / Dedicated Linux Server (AWS EC2, Hostinger VPS)

If you buy your own Linux server, you can run the app in its native Node.js environment for maximum performance.

### Prerequisites on Server:

- Node.js (v18+)
- PM2 (Process Manager: `npm install -g pm2`)
- Nginx (Web Server)

### Step 1: Build for Node

In your `package.json`, add this script:

```json
"scripts": {
  "build:node": "cross-env NITRO_PRESET=node-server vite build"
}
```

Run `npm run build:node` and upload the entire project (including `.output` and `package.json`) to your server via SSH/SFTP.

### Step 2: Run with PM2

On your server, navigate to the folder and run:

```bash
pm2 start .output/server/index.mjs --name "tfc-website"
```

Your app is now running internally (usually on port 3000).

### Step 3: Configure Nginx (Reverse Proxy)

To expose it to the internet on port 80/443, configure Nginx to proxy traffic to port 3000.

```nginx
server {
    listen 80;
    server_name techfusion.club www.techfusion.club;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Database Migration Notes

Currently, everything lives in Firebase. If you ever want to migrate away from Firebase to a self-hosted database (like Supabase, PostgreSQL, or MongoDB):

1. Your database logic is **isolated** inside `src/lib/db.ts`.
2. You do **not** need to touch the frontend components (`events.tsx`, `alumni.tsx`, etc.).
3. Simply replace the logic inside `getEvents()`, `createEvent()`, etc. in `db.ts` to fetch from your new database's API.
4. The rest of the app will continue to work flawlessly.
