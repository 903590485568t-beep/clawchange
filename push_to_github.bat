@echo off
echo ==========================================
echo Uploading ClawChange to GitHub...
echo ==========================================

:: Remove existing origin if it exists to avoid errors
git remote remove origin 2>nul

:: Add the new remote origin
echo Adding remote origin...
git remote add origin https://github.com/903590485568t-beep/clawchange.git

:: Rename branch to main
git branch -M main

:: Push to GitHub
echo Pushing code to main branch...
git push -u origin main

echo ==========================================
echo Done! If you saw a login prompt, please sign in.
echo ==========================================
pause
