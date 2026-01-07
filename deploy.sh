#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Add all files
echo ""
echo "📝 Adding files to Git..."
git add .

# Commit
echo ""
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio"
fi
git commit -m "$commit_msg"

# Check if remote exists
if git remote | grep -q "origin"; then
    echo ""
    echo "🔄 Pushing to GitHub..."
    git push origin main
else
    echo ""
    echo "⚠️  No remote repository configured yet!"
    echo ""
    echo "Please run these commands to set up GitHub:"
    echo "1. Create a repository named 'arshi9854.github.io' on GitHub"
    echo "2. Run: git remote add origin https://github.com/arshi9854/arshi9854.github.io.git"
    echo "3. Run: git branch -M main"
    echo "4. Run: git push -u origin main"
fi

echo ""
echo "✨ Done!"
