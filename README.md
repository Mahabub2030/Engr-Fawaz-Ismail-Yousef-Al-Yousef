# React Portfolio Template

**Minimal Vite + React portfolio template** using Tailwind CSS, Lottie animations, text animation, React Icons, and Web3Forms for contact/email. Includes ESLint setup and recommended scripts.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)

- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Styling with Tailwind CSS](#styling-with-tailwind-css)
- [Adding Lottie Animations](#adding-lottie-animations)
- [Text Animations](#text-animations)
- [Contact Form with Web3Forms](#contact-form-with-web3forms)
- [ESLint](#eslint)
- [Deployment](#deployment)
- [Customization Tips](#customization-tips)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact](#contact)

---

## Overview

This repository is a lightweight, production-ready React portfolio template scaffolded with Vite and styled with Tailwind CSS. It demonstrates how to integrate:

- Lottie animations for polished motion
- Text typing/typing-like animations for hero headers
- React Icons for consistent iconography
- Web3Forms as a serverless contact/email provider
- ESLint for consistent code quality

It's ideal for creating a modern, responsive portfolio site to show a client's work and let visitors get in touch.

---

## Features

- Fast build with Vite + React
- Tailwind CSS utility-first styling
- Lottie animation support (vector/interactivemotion)
- Simple, configurable text animation for hero/title
- Contact form wired to Web3Forms (serverless)
- ESLint + recommended rules
- Ready-to-deploy (Vercel, Netlify, or static hosting)

---

## Tech Stack

- React (via Vite)
- Tailwind CSS
- Lottie (`lottie-react` or similar)
- React Icons (`react-icons`)
- Text animation (example: `react-type-animation` — or your preferred library)
- Web3Forms for contact/email
- ESLint

---

## Getting Started

### Prerequisites

- Node.js (>= 16 recommended)
- npm or yarn

### Installation

1. Scaffold a new Vite React project (if you haven't already):

```bash
# with npm
npm create vite@latest my-portfolio -- --template react
cd my-portfolio

# or with yarn
yarn create vite my-portfolio --template react
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Install recommended libraries:

```bash
npm install tailwindcss postcss autoprefixer lottie-react react-icons react-type-animation
# if you use yarn:
# yarn add tailwindcss postcss autoprefixer lottie-react react-icons react-type-animation
```

4. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

Then update `tailwind.config.cjs` (or `.js`) and your CSS entry (e.g. `src/index.css`) as described in the Tailwind docs.

### Environment variables

Create a `.env` file in the project root for any secrets (do not commit this file):

```env
# Example for Web3Forms
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

Use `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` in your client code to access it.

---

## Project Structure (suggested)

```
my-portfolio/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Projects.jsx
│  │  └─ Contact.jsx
│  ├─ styles/index.css
│  ├─ App.jsx
│  └─ main.jsx
├─ .eslintrc.cjs
├─ tailwind.config.cjs
├─ postcss.config.cjs
└─ package.json
```

---

## Scripts

Add or use these scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx src"
  }
}
```

---

## Styling with Tailwind CSS

1. In `src/index.css` (or `src/styles/index.css`) import Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. In `tailwind.config.cjs` set content paths (example):

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

3. Use utility classes directly in components. Tailwind makes responsive and accessible layouts quick.

---

## Adding Lottie Animations

Install a Lottie React library (example in `Installation`). Then use a Lottie component in your React component:

```jsx
import { Player } from "lottie-react";
import heroAnim from "../assets/hero.json";

export default function Hero() {
  return (
    <section className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Hello — I'm Jane Doe</h1>
          <p className="mt-4">A short intro about the client.</p>
        </div>
        <div className="w-64 h-64">
          <Player animationData={heroAnim} loop autoplay />
        </div>
      </div>
    </section>
  );
}
```

> Use Lottie JSON files exported from Adobe After Effects (Bodymovin) or get free animations from sites like LottieFiles.

---

## Text Animations

There are several lightweight text animation libraries. Example using `react-type-animation` style API:

```jsx
import { TypeAnimation } from "react-type-animation";

<TypeAnimation
  sequence={[
    "Frontend Developer",
    1500,
    "UI/UX Enthusiast",
    1500,
    "Open Source Contributor",
    1500,
  ]}
  wrapper="span"
  cursor={true}
  repeat={Infinity}
  className="text-primary font-semibold"
/>;
```

If you prefer more control, you can create a simple custom hook that types characters using `setTimeout`.

---

## Contact Form with Web3Forms

Web3Forms provides a serverless form endpoint so you can submit contact messages directly from the client. Example form (replace `YOUR_ACCESS_KEY` with the key from Web3Forms):

```jsx
// src/components/Contact.jsx
export default function Contact() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="grid gap-4 max-w-xl"
    >
      <input
        type="hidden"
        name="access_key"
        value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
      />
      <input
        type="hidden"
        name="subject"
        value="New message from portfolio contact form"
      />

      <label>
        <span>Name</span>
        <input name="name" required />
      </label>

      <label>
        <span>Email</span>
        <input name="email" type="email" required />
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" required />
      </label>

      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
}
```

**Notes:**

- Set `VITE_WEB3FORMS_ACCESS_KEY` in `.env` or substitute the raw access key (not recommended).
- Web3Forms supports advanced options like redirect URL, attachments, and spam protection — check your Web3Forms dashboard for available parameters.

---

## ESLint

A minimal `.eslintrc.cjs` to get started:

```js
module.exports = {
  env: { browser: true, es2021: true },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    // add or adjust rules as your team prefers
  },
};
```

Run linting with `npm run lint`.

---

## Deployment

Recommended static deployment platforms:

- **Vercel** — great for Vite; connect repo and deploy
- **Netlify** — set build command `npm run build` and publish directory `dist`
- **Static hosting / S3 + CloudFront** — upload `dist` after build

Build & preview locally:

```bash
npm run build
npm run preview
```

---

## Customization Tips

- Replace placeholder text and images with client copy and assets in `src/assets`.
- Keep Lottie animations lightweight — large JSON files can impact page load.
- Use Tailwind's `@apply` to build common utility classes for buttons and cards.
- Add accessibility labels and `aria-*` attributes to interactive elements.

---

## Troubleshooting

- If Tailwind classes don't appear: verify `tailwind.config.cjs` `content` paths include `./index.html` and `./src/**/*.{js,jsx}`.
- If environment variables are missing in production, set them in your hosting provider (Vercel/Netlify) — remember `VITE_` prefix for client runtime variables.

---

## License

MIT — feel free to adapt for client use.

---

## Contact

mahabub alam
