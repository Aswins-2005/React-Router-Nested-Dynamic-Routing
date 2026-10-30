# React Router – Nested & Dynamic Routing

A beginner-friendly React project demonstrating client-side navigation and routing using **React Router DOM**. This project explores how to organize multiple pages, create nested routes, handle dynamic URL parameters, and display a custom 404 error page.

## 🚀 Features

- **Client-Side Routing:** Navigate between pages without full-page reloads.
- **Nested Routing:** Organize multiple pages under a shared parent layout.
- **Reusable Layout:** Use the `Outlet` component to render child routes inside a common template.
- **Dynamic Routing:** Display personalized welcome messages using URL parameters.
- **Navigation Links:** Navigate between pages using React Router's `Link` component.
- **404 Error Page:** Display a custom error page for unmatched routes.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- React Router DOM
- HTML
- CSS
- Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Services.jsx
│   ├── WelcomeMsg.jsx
│   ├── Error.jsx
│   └── Template.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project folder

```bash
cd <your-project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install React Router DOM

```bash
npm install react-router-dom
```

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 🌐 Available Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | About page |
| `/contact` | Contact page |
| `/services` | Services page |
| `/welcome/:username` | Dynamic welcome message |
| Any unmatched route | Custom 404 error page |

### Example: Dynamic Routing

Visit `/welcome/Aswin` to display:

```text
Welcome Aswin
```

The username is extracted from the URL using React Router's `useParams()` hook.

## 📖 Concepts Learned

- `createBrowserRouter()` – Define the application's routes.
- `RouterProvider` – Provide routing functionality to the application.
- `Link` – Navigate between routes without reloading the page.
- `Outlet` – Render matched child routes inside a parent layout.
- `useParams()` – Access dynamic URL parameters.
- Nested routes – Share a common layout across multiple pages.
- Wildcard routes (`*`) – Handle unmatched URLs with a custom error page.

## 🎯 Project Objective

The goal of this project is to understand the fundamentals of React Router DOM and build a foundation for developing multi-page React applications with reusable layouts and dynamic navigation.

## 👨‍💻 Author

**Aswin**

B.Tech – Computer Science and Business Systems

Aspiring MERN Stack Developer

---

⭐ If you find this project useful, consider giving the repository a star!
