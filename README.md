# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ✅ Étape 1 : Initialiser le projet Vite avec React 

```bash
npm create vite@latest mom-site -- --template react
cd my-app
npm install
```
## ✅ Étape 2 : Lancer le projet 

```bash
npm run dev
```
## ✅ Structure des dossiers et du projet
mon-site/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   └── Home.jsx       ← ✅ Ta page d’accueil
│   ├── App.jsx
│   ├── main.jsx
│   └── AuthContext.jsx    ← (à venir)
├── index.html
└── package.json

## ✅ Assure-toi d’avoir installé react-router-dom :
```bash
npm install react-router-dom
```
## ✅ Coté Backend - PostgreSQL et Table associés au projet :
1. La Base de Données est sur PostgreSQL.
Ci-joint la table déjà créée et associée au backend :

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  CREATE TABLE IF NOT EXISTS public.users (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      nom VARCHAR(100) NOT NULL,
      prenom VARCHAR(100) NOT NULL,
      adresse TEXT NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      telephone VARCHAR(20) NOT NULL,
      date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      password VARCHAR(255),
      role VARCHAR(20) DEFAULT 'user' NOT NULL CHECK (role IN ('user', 'admin')),
      is_active BOOLEAN DEFAULT true
  );
```

2. Exemples de relations possibles
Exemple : Table annonces :

```sql
CREATE TABLE annonces (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
titre TEXT NOT NULL,
description TEXT,
date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Exemple : Table rendez_vous :

```sql
CREATE TABLE rendez_vous (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  date_rdv TIMESTAMP NOT NULL,
  commentaire TEXT
);
```
