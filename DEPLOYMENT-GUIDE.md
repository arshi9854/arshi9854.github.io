# 🚀 Deploy Your Portfolio to GitHub Pages

Follow these simple steps to get your portfolio live on the internet!

## Step 1: Initialize Git Repository

Open your terminal in the Portfolio folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Name it: `arshi9854.github.io` (use your exact GitHub username)
5. Keep it **Public**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

## Step 3: Connect and Push to GitHub

Copy and run these commands in your terminal:

```bash
git remote add origin https://github.com/arshi9854/arshi9854.github.io.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under "Source", select **"main"** branch
5. Click **"Save"**

## Step 5: Wait & Access

- Wait 2-3 minutes for deployment
- Your portfolio will be live at: **https://arshi9854.github.io**
- Share this URL with recruiters!

---

## 🔄 How to Update Your Portfolio Later

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Your site will automatically update in 1-2 minutes!

---

## ✅ Verification

After deployment, check:
- [ ] Site loads at https://arshi9854.github.io
- [ ] All sections work (About, Projects, Skills, etc.)
- [ ] Particle background animates
- [ ] Theme toggle works
- [ ] All links work (LinkedIn, GitHub, Email)

---

## 🎯 Pro Tips

1. **Custom Domain** (Optional): You can use your own domain like `arshiyashaik.com`
   - Buy domain from Namecheap/GoDaddy
   - Add CNAME file with your domain
   - Configure DNS settings

2. **SEO**: Add meta tags for better Google ranking (already included!)

3. **Analytics**: Add Google Analytics to track visitors

4. **Share**: Add this URL to:
   - LinkedIn profile
   - Resume
   - Email signature
   - GitHub profile README

---

## 🆘 Troubleshooting

**Problem**: Site shows 404
- **Solution**: Make sure repository name is exactly `arshi9854.github.io`

**Problem**: Changes not showing
- **Solution**: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Problem**: Push rejected
- **Solution**: Run `git pull origin main` first, then push again

---

## 📞 Need Help?

If you encounter any issues:
1. Check GitHub Pages status in repository settings
2. Look at the "Actions" tab for deployment logs
3. Make sure all files are committed and pushed

---

**Congratulations! Your portfolio is now live! 🎉**

Share it with the world: https://arshi9854.github.io
