# East Africa Luxe Trails

A luxury safari & travel website built with React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy

- **Netlify**: Connect repo, build command `npm run build`, publish dir `dist`
- **Vercel**: Import repo, framework preset Vite — zero config needed

## Structure

```
src/
├── components/   # All UI components + CSS
├── data/         # packages.js, blogs.js
├── pages/        # Home, BlogPage, BlogSingle
├── App.jsx
├── main.jsx
└── index.css
```

## Customisation

- Update WhatsApp number in `WhatsappButton.jsx` and `Contact.jsx`
- Update email in `Contact.jsx`
- Add/edit packages in `src/data/packages.js`
- Add/edit blog posts in `src/data/blogs.js`
- Brand colors live in `src/index.css` as CSS variables
