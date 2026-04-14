# Vercel Deployment Fix Guide

## Issues Fixed:

1. ✅ Added `vercel.json` configuration
2. ✅ Added `type: "module"` to package.json
3. ✅ Created `.gitignore` file
4. ✅ Specified build output directory

## Steps to Deploy:

### Option 1: Push to GitHub (Recommended)

1. **Commit all changes:**
```bash
git add .
git commit -m "Fix Vercel deployment configuration"
git push origin main
```

2. **Vercel will automatically redeploy**
   - Go to your Vercel dashboard
   - The deployment should start automatically
   - Wait for it to complete

### Option 2: Manual Deploy via Vercel CLI

1. **Install Vercel CLI (if not installed):**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel --prod
```

## Common Issues & Solutions:

### Issue 1: Build fails with "Cannot find module"
**Solution:** Make sure all imports in your files use correct paths
- Check `src/App.jsx` imports all components correctly
- Verify all component files exist in `src/components/`

### Issue 2: "dist" folder not found
**Solution:** The `vercel.json` now specifies the correct output directory

### Issue 3: Tailwind CSS not working
**Solution:** Make sure these files exist:
- `tailwind.config.js` ✅
- `postcss.config.js` ✅
- `src/index.css` with @tailwind directives ✅

### Issue 4: Resume PDF not loading
**Solution:** 
- Make sure `Abhi's CV.pdf` is in the `public` folder
- Vercel will serve files from `public` at the root URL

## Verify Before Deploying:

Run these commands locally to test:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the build
npm run preview
```

If the build succeeds locally, it should work on Vercel.

## Environment Variables (if needed):

If you're using Web3Forms for contact form:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `VITE_WEB3FORMS_KEY` = your access key
3. Update `Contact.jsx` to use: `import.meta.env.VITE_WEB3FORMS_KEY`

## Expected Build Output:

```
✓ built in 2.5s
✓ 150 modules transformed
dist/index.html                   0.50 kB
dist/assets/index-abc123.css     15.20 kB
dist/assets/index-xyz789.js     145.30 kB
```

## After Successful Deployment:

Your portfolio will be live at:
- `https://your-project-name.vercel.app`
- Or your custom domain if configured

## Need Help?

Check Vercel build logs:
1. Go to Vercel Dashboard
2. Click on your project
3. Click on the failed deployment
4. View "Build Logs" for detailed error messages

## Contact Form Setup:

Don't forget to add your Web3Forms access key in `src/components/Contact.jsx` after deployment!
