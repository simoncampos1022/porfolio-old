# Angular 19 – Fullstack Application 

**👉 Si vous ne parlez pas anglais, la version française est ici** : [![Français](./ui/version-fr.png)](./README.md)

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="logo ganatan">

This repository contains a **fullstack web application** :

- **frontend-angular**: Angular 19 frontend application  
- **backend-javascript**: Javascript API using mocked or real data (PostgreSQL/MySQL)
- **backend-typescript**: Typescript API using mocked or real data (PostgreSQL/MySQL)

---

## 🌐 Live Demo  
[Check the demo](https://angular.ganatan.com)

<p align="center">
  <p align="center">
    <a href="https://angular.ganatan.com/">
      <img src="https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif" alt="Angular 19 Example 
      Application"/>
    </a>
  </p>
</p>

---

## 📁 Project Structure

### 🧩 Frontend

- **`frontend-angular`**  
  Angular 19 application (including Routing, Lazy Loading, SSR, PWA, SEO).

---

### 🚀 Backends

- **`backend-javascript`**  
  Express.js API in JavaScript (ESM)  
  Uses either mocked data or a real database (PostgreSQL/MySQL)

- **`backend-typescript`**  
  Express.js API in TypeScript  
  Uses either mocked data or a real database (PostgreSQL/MySQL)

- **`backend-java21-springboot`**  
  Starter Java21 Spring Boot (JUnit)

---

### 🧪 Technical Starters (bonus)

- **`backend-javascript-commonjs`**  
  JavaScript Node.js starter using CommonJS (`require/module.exports`, ESLint, Jest, Webpack)

- **`backend-javascript-esm`**  
  JavaScript Node.js starter using ESM (`import/export`, ESLint, Jest, Webpack)

---

## 🔧 Frontend Configuration (Angular)

In `environment.ts` :

```ts
useDatabase: false,
backend: 'http://localhost:3000',
```

| `useDatabase` | Mode                                  |
|---------------|---------------------------------------|
| `false`       | **Mocked** data on the frontend       |
| `true`        | **Real** data provided by the backend |

---

## 🛠 Backends Configuration

Dans le fichier `.env` :

```env
PORT=3000
DB_CLIENT=mock # mock | pg | mysql
```

| `DB_CLIENT` | Source de données      |
|-------------|------------------------|
| `mock`      | Mocked Data            |
| `pg`        | PostgreSQL             |
| `mysql`     | MySQL                  |

---

## 🔗 Exposed APIs

| Resource      | URL                                      |
|---------------|------------------------------------------|
| Continents    | [http://localhost:3000/continents](http://localhost:3000/continents) |
| Cities        | [http://localhost:3000/cities](http://localhost:3000/cities)         |
| Countries     | [http://localhost:3000/countries](http://localhost:3000/countries)   |
| Persons       | [http://localhost:3000/persons](http://localhost:3000/persons)       |
| Professions   | [http://localhost:3000/professions](http://localhost:3000/professions) |

---

## ⚙️ Quick Start

### ▶️ Angular Frontend 

```bash
git clone https://github.com/ganatan/angular-app.git
cd angular-app/frontend-angular
npm install
npm start
```

🔗 [http://localhost:4200](http://localhost:4200)

---

### ▶️ Node.js Backend (ESM)

```bash
cd angular-app/backend-javascript
npm install
npm start
```

🔗 [http://localhost:3000](http://localhost:3000)

---

### ▶️ TypeScript Backend 

```bash
cd angular-app/backend-typescript
npm install
npm start
```

🔗 [http://localhost:3000](http://localhost:3000)

---

## 👤 Author

- **Danny** – [www.ganatan.com](https://www.ganatan.com)

---

## 📚 Documentation

- 🇬🇧 [Tutorials in English](https://www.ganatan.com/en/tutorials)
- 🇫🇷 [Tutoriels en français](https://www.ganatan.com/tutorials)
