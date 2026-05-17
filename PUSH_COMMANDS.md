# Push alena-demo na GitHub — krok za krokom

## 1. Vytvor repo na GitHub
# Choď na github.com → New repository
# Name: alena-demo
# Visibility: Public
# NEstávaj README (už ho máš)
# Klikni Create repository

## 2. Presun súbory
# Stiahni alena-demo/ priečinok z Claude outputu
# Presun do tvojho dev priečinka

## 3. Push
cd alena-demo

git init
git add .
git commit -m "feat: initial UI demo — MedicationsScreen + 5 screenshots

Complete medications list screen with:
- Color-coded gradient cards per medication  
- Schedule pill tags (green/blue/yellow/gray)
- Supply warning with alert icon
- Stats row (total / today / low stock)

TypeScript + React Native + Expo + expo-linear-gradient"

git branch -M main
git remote add origin https://github.com/sebastian414/alena-demo.git
git push -u origin main

## 4. Pin na profile
# github.com/sebastian414 → Edit profile → Customize pins
# Pridaj alena-demo
