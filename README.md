# Koushik Marka Portfolio

A personal portfolio site built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This project is a custom portfolio for Koushik Marka. It highlights:

- profile and introduction
- skills and tech stack
- selected projects
- achievements and certifications
- contact information
- resume download

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
```

## Project Structure

- `src/app` - app routes and pages
- `src/components` - reusable UI sections
- `src/content/portfolio.ts` - central portfolio content
- `src/styles` - global styles
- `public` - static assets and resume file

## Customizing Content

Most portfolio text is managed from:

`src/content/portfolio.ts`

Update that file to change:

- name and role
- summary and focus
- education
- skills
- projects
- achievements
- certifications
- links and resume path

## Resume

The current resume file is stored at:

`public/Koushik_Marka_Resume.pdf`

## Notes

If the site does not load correctly after changes, restart the dev server:

```bash
Ctrl + C
npm run dev
```
