#!/bin/bash

# Landis Ventures - GitHub Pages Deployment Script

echo "🚀 Starting GitHub Pages deployment for Landis Ventures..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
fi

# Add all files
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy Landis Ventures to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# Check if origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No GitHub remote found!"
    echo "Please set up your GitHub repository first:"
    echo "1. Create a new repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    echo "3. Run this script again"
    exit 1
fi

# Push to GitHub
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Code pushed to GitHub!"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Set source to 'Deploy from a branch'"
echo "4. Select 'gh-pages' branch and '/ (root)' folder"
echo "5. Your site will be available at https://USERNAME.github.io/REPOSITORY"
echo ""
echo "📝 Don't forget to:"
echo "• Update the CNAME in .github/workflows/deploy.yml if using a custom domain"
echo "• Set up Formspree for contact forms (see README-GitHub-Pages.md)"
echo "• Configure any environment variables needed"
echo ""
echo "🎉 Deployment initiated! Check the Actions tab on GitHub for build status."