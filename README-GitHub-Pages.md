# Deploying Landis Ventures to GitHub Pages

This guide will help you deploy your Landis Ventures website to GitHub Pages as a static frontend application.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step 1: Quick Deployment (Recommended)

1. **Create a new GitHub repository:**
   - Go to GitHub and create a new repository named `landis-ventures` (or your preferred name)
   - Choose "Public" if you want to use GitHub Pages for free
   - Don't initialize with README, .gitignore, or license (since you have existing files)

2. **Connect to GitHub and deploy:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/landis-ventures.git
   ./deploy-to-github.sh
   ```

   Or manually:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Landis Ventures website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/landis-ventures.git
   git push -u origin main
   ```

## Step 2: Configure for Static Deployment

Since GitHub Pages only serves static files, we need to modify the contact form to work without a backend:

### Option A: Use Formspree (Recommended)

1. **Sign up at [Formspree.io](https://formspree.io)**
2. **Create a new form and get your form endpoint**
3. **Update the form endpoint in the code:**
   - Edit `client/src/lib/api-client.ts`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID

### Option B: Use Netlify Forms

1. **Deploy to Netlify instead of GitHub Pages** (supports forms natively)
2. **Add `netlify` attribute to your form** in the HTML

### Option C: Use EmailJS

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)**
2. **Configure email service and template**
3. **Update the contact form to use EmailJS SDK**

## Step 3: Build and Deploy

1. **GitHub Actions will automatically build and deploy when you push to main**
2. **Enable GitHub Pages in repository settings:**
   - Go to repository Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"

## Step 4: Custom Domain (Optional)

1. **Add CNAME file to the repository root:**
   ```
   yourdomain.com
   ```

2. **Configure DNS:**
   - Point your domain to GitHub Pages IP addresses
   - Or create a CNAME record pointing to `YOUR_USERNAME.github.io`

3. **Update the workflow file:**
   - Uncomment the `cname` line in `.github/workflows/deploy.yml`
   - Replace with your actual domain

## Step 5: Environment Variables

For production deployment, you may need to set environment variables in GitHub repository settings under "Secrets and Variables":

- `VITE_FORM_ENDPOINT` - Your form service endpoint
- `VITE_GA_TRACKING_ID` - Google Analytics tracking ID (optional)

## File Structure for GitHub Pages

```
landis-ventures/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── client/
│   ├── public/
│   │   └── 404.html           # GitHub Pages SPA support
│   ├── src/
│   └── index.html
├── package-gh-pages.json      # Simplified package.json for static build
├── vite-gh-pages.config.ts    # Vite config for static build
└── README.md
```

## Troubleshooting

1. **Build fails:** Check the Actions tab in GitHub for error details
2. **404 errors:** Ensure the base path in vite config matches your repository name
3. **Form not working:** Verify your form service configuration
4. **Styles not loading:** Check that all paths are relative and assets are properly built

## Alternative: Quick Deploy with Netlify

For easier deployment with form handling:

1. **Connect your GitHub repo to Netlify**
2. **Build command:** `npm run build`
3. **Publish directory:** `dist`
4. **Add forms to your HTML with `netlify` attribute**

Your site will be available at `https://YOUR_USERNAME.github.io/landis-ventures` or your custom domain.