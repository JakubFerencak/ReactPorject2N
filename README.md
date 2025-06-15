# 🥘 Receptová aplikácia

Tento projekt je jednoduchá webová aplikácia na **zdieľanie receptov**.

Používateľ môže:
- pridávať svoje recepty cez modálne okno
- zobraziť si všetky pridané recepty
- rozkliknúť si ich obsah
- vymazať ich cez ikonku koša (s potvrdením)
- recepty sa ukladajú do **MongoDB databázy**

---

## 💻 Použité technológie

- React (frontend)
- Express.js + Node.js (backend)
- MongoDB (databáza)
- Axios (komunikácia frontend-backend)
- FontAwesome (ikony)

---

## ▶️ Ako projekt spustiť

### 🔧 1. Naklonuj repozitár a priprav zložky

```
git clone https://github.com/JakubFerencak/ReactPorject2N.git
```

Projekt má dve časti:
- `client/` – React frontend
- `backend/` – Express backend

---

### 🚀 2. Spustenie backendu (Express + MongoDB)

#### 1️⃣ Prejdi do zložky `backend`:
```
cd backend
```

#### 2️⃣ Nainštaluj potrebné balíčky (iba raz):
```
npm install
```

#### 3️⃣ Spusti server:
```
node server.js
```

✅ Backend pobeží na `http://localhost:5000`

---

#### 🛢️ MongoDB

- Projekt používa lokálnu MongoDB databázu:
```
mongodb://localhost:27017/recepty
```

- Ak máš nainštalovaný MongoDB Compass, môžeš sledovať a spravovať údaje vizuálne.

- Ak chceš používať `nodemon` pre automatický reštart servera:
```
npm install -g nodemon
nodemon server.js
```

---

### 🌐 3. Spustenie frontendu (React)

#### 1️⃣ Prejdi do zložky `client`:
```
cd ../client
```

#### 2️⃣ Nainštaluj balíčky:
```
npm install
```

#### 3️⃣ Spusti React aplikáciu:
```
npm start
```

➡️ Frontend beží na `http://localhost:3000` a automaticky sa otvorí v prehliadači.

---

## 📦 Stručný popis štruktúry

```
/client
  /src
    /Pages         <- Home, About, Recipes
    /Components    <- Header, Footer
    App.js
    index.js

/backend
  models/Recipe.js
  server.js

README.md
```
---

- Aplikácia je rozdelená na frontend a backend.
- Backend API poskytuje REST endpoints na ukladanie a mazanie receptov.
- Všetky recepty sa trvalo ukladajú do databázy MongoDB.
- Modalne okná, dizajn, animácie a rozhranie sú optimalizované pre základné použitie.
- Po kliknutí na uložený recept budeme vidieť detaily. Recept vieme zachovať alebo ho zmazať.
