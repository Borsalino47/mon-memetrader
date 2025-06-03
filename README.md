# MemeTrader Pro V3

Bot de trading ultra-agressif basé sur Binance API, avec interface front-end en HTML/CSS/JavaScript et back-end Node.js/Express.  
Permet de simuler (ou exécuter réel/Testnet) des trades automatisés de memecoins toutes les 30 secondes, avec répartition des profits (80 % principal, 20 % rachat).

---

## 📦 Structure du dépôt

```
mon-memetrader/
├── public/
│   └── index.html           ← Interface front-end (HTML + CSS + JS)
├── server.js                ← Serveur Express + Binance API
├── package.json             ← Dépendances et scripts NPM
├── .env                     ← Variables d'environnement
├── .gitignore               ← Ignorer node_modules, .env
└── README.md                ← Documentation (ce fichier)
```

---

## ⚙️ Prérequis

1. **Node.js** (v16 ou supérieur)  
2. **NPM** (généralement livré avec Node.js)  
3. **Compte GitHub** (pour cloner/pousser le code)  
4. **Clés Binance API** (Testnet ou Mainnet)  
   - Créez un fichier `.env` à la racine contenant :
     ```
     BINANCE_API_KEY=VotreCléAPI
     BINANCE_API_SECRET=VotreCléSecrète
     ```
   - Pour Testnet : remplacez par vos clés Testnet générées sur [Testnet Binance](https://testnet.binance.vision/).

---

## 🚀 Installation & exécution en local

1. **Cloner le dépôt**  
   ```bash
   git clone https://github.com/Borsalino47/mon-memetrader.git
   cd mon-memetrader
   ```

2. **Créer le fichier `.env`**  
   À la racine, créez un fichier `.env` :
   ```text
   BINANCE_API_KEY=VotreCléAPI
   BINANCE_API_SECRET=VotreCléSecrète
   ```

3. **Installer les dépendances**  
   ```bash
   npm install
   ```

4. **Lancer le serveur**  
   ```bash
   npm start
   ```
   - Le serveur écoute sur `http://localhost:3000`.

5. **Ouvrir l’interface**  
   - Dans votre navigateur, allez sur :  
     ```
     http://localhost:3000
     ```

---

## ☁️ Déploiement sur Render

1. **Pousser votre code sur GitHub**  
   ```bash
   git add .
   git commit -m "Préparation déploiement Render"
   git push origin master
   ```

2. **Configurer Render**  
   - **Root Directory** : laisser vide (ou `.`).  
   - **Build Command** : `npm install`  
   - **Start Command** : `npm start`  
   - **Variables d’environnement** sur Render :  
     - `BINANCE_API_KEY` = (votre clé)  
     - `BINANCE_API_SECRET` = (votre clé secrète)

3. **Déployer**  
   - Render clone le repo, exécute `npm install`, puis `npm start`.  
   - L’URL générée (ex. `https://mon-memetrader.onrender.com`) est active.

---

## 📁 Arborescence détaillée

```
mon-memetrader/
├── public/
│   └── index.html           # Interface front-end (HTML + CSS + JS)
├── server.js                # Serveur Express + Binance API
├── package.json             # Dépendances (express, binance-api-node) + script "start"
├── .env                     # Variables d'environnement (clé API)
├── .gitignore               # node_modules, .env
└── README.md                # Documentation
```

---

## ⚠️ Sécurité

- **Variables d’environnement**  
  - Ne **jamais** versionner vos clés API.  
  - Utilisez `.env` localement et définissez les variables sur Render.
- **Testnet vs Mainnet**  
  - Pour le développement, utilisez impérativement des clés **Testnet**.  
  - En production, passez à des clés **Mainnet**.

---

## 📝 Licence

Ce projet est sous licence **MIT**.

Bonne utilisation !
