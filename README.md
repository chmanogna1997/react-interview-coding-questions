# React Interview Coding Questions

React and JavaScript coding questions that come up frequently in frontend
interviews, each implemented as a small, self-contained component.

Built with React 19 + Vite.

## Questions

| # | Question | Implementation | Concepts |
|---|----------|----------------|----------|
| 1 | **Debounced input** — show a value only after the user stops typing | [`src/DebounceText.jsx`](src/DebounceText.jsx) | `useEffect` cleanup, `setTimeout` / `clearTimeout` |
| 2 | **Autocomplete** — search the Open Library API as the user types | [`src/AutoComplete.tsx`](src/AutoComplete.tsx) | debouncing, async fetching, list keys, error state |
| 3 | **Stopwatch** — start, pause, and reset a ticking counter | [`src/Counter.jsx`](src/Counter.jsx) | `setInterval` in an effect, functional state updates, closures |
| 4 | **Flatten an array** — collapse arbitrary nesting without `.flat()` | [`src/FlattenArray.jsx`](src/FlattenArray.jsx) | recursion, `Array.isArray`, `JSON.parse` |
| 5 | **Todo list** — add, edit, delete, kept alphabetically sorted | [`src/TodoList.tsx`](src/TodoList.tsx) | immutable updates, `localeCompare`, conditional rendering |
| 6 | **Chat UI** — unordered messages grouped by day, oldest first | [`src/ChatApp/ChatApp.jsx`](src/ChatApp/ChatApp.jsx) | date math, grouping, sorting, `Object.entries` |
| 7 | **Pagination** — load a page at a time and append to the list | [`src/Pagination.tsx`](src/Pagination.tsx) | offset pagination, appending state, loading limits |
| 8 | **Throttle** — update the display at a fixed rate from high-frequency messages | [`src/Throttle/Throttle.jsx`](src/Throttle/Throttle.jsx) | `useRef`, throttling, high-frequency events, `setInterval` |

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

`App.jsx` renders one exercise at a time — swap which component is commented
out to switch between them.

