# Kuruva Vamshi Portfolio

A premium full-stack developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The design aims to feel closer to a SaaS landing page than a traditional personal site.

## Stack

- React.js with Vite
- Tailwind CSS
- Framer Motion
- EmailJS for contact form delivery
- Lucide React and React Icons

## Features

- Full-screen animated hero with typing effect
- Story-driven about section with timeline layout
- Interactive skills section with animated progress bars
- Filterable premium project cards
- Certifications timeline
- Glassmorphism contact form
- Scroll progress indicator
- Loading screen
- Custom cursor
- Back-to-top button
- Dark/light theme toggle
- Fully responsive navigation

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## EmailJS Setup

To enable the contact form, create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The form will show a helpful warning until these values are added.

## Customize Before Deploying

- Replace placeholder GitHub and LinkedIn links in `src/data/portfolio.js`
- Replace placeholder project demo and repository URLs in `src/data/portfolio.js`
- Update certification issuer names or years if needed
- Add your resume link if you want a direct download CTA

## Deployment

This project is ready for Vercel or Netlify.

- Vercel: import the repo and deploy with the default Vite settings
- Netlify: build command `npm run build`, publish directory `dist`
