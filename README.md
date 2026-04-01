# Arjun Sharma Portfolio

A modern, interactive Sales Engineer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
- **AI Voice Narration**: Click the volume icon to have an AI read the portfolio summary.
- **Interactive Scroll**: Background colors and elements fade and transform as you scroll.
- **Light/Dark Mode**: Custom light green and white aesthetic for both modes.
- **Loom Integration**: Embedded demo video that can be triggered manually or after AI narration.
- **Responsive Design**: Fully optimized for mobile and desktop.

## How to Edit
1. **Content**: Open `src/constants.ts` to update your projects, experience, skills, and certifications.
2. **Video**: In `src/App.tsx`, update the Loom embed URL with your own video ID.
3. **Styles**: Modify `src/index.css` or Tailwind classes in components to change the look.

## Deployment to GitHub Pages
1. Push this code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select **GitHub Actions** as the source.
4. Use a standard "Static HTML" or "Vite" deployment workflow (GitHub provides templates for this).
   - Alternatively, run `npm run build` and upload the `dist` folder to the `gh-pages` branch.

## Local Development
```bash
npm install
npm run dev
```
