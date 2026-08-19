# React Interview Coding Questions

A collection of React coding questions that come up frequently in frontend
interviews, each implemented as a small, self-contained component you can read,
run, and modify.

Built with React 19 + Vite.

## Questions

| # | Question | Implementation | Concepts |
|---|----------|----------------|----------|
| 1 | Debounced text input — show a value that updates only after the user stops typing | [`src/DebounceText.jsx`](src/DebounceText.jsx) | `useState`, `useEffect` cleanup, `setTimeout` / `clearTimeout` |

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

Other scripts:

```bash
npm run build     # production build
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Project layout

```
src/
  main.jsx           # app entry point
  App.jsx            # renders the currently selected exercise
  DebounceText.jsx   # Q1 — debounced input
  index.css          # global styles
  App.css            # app styles
```

## Adding a new question

1. Create `src/<QuestionName>.jsx` exporting a single default component.
2. Render it from `src/App.jsx`.
3. Add a row to the table above describing the question and the concepts it covers.

Keeping one component per question makes each solution easy to review on its
own and easy to revisit before an interview.
