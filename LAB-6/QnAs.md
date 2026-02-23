# Question and Answers:

### 1. Framework Vs. Library

**Framework:**

- Provides a complete structure for building applications
- Dictates the overall architecture and flow of your code
- Inverts control (framework calls your code)
- Examples: React, Angular, Django, Spring

**Library:**

- Provides reusable functionality for specific tasks
- You control when and how to use it
- You call the library code
- Examples: jQuery, Lodash, NumPy, Axios

**Key Difference:** A framework tells you how to build your application, while a library is a tool you use within your application.

---

### 2. CSR (Client Side Rendering) Vs. SSR (Server Side Rendering)

**Client Side Rendering (CSR):**

- Browser downloads minimal HTML and renders content using JavaScript
- All rendering happens on the client
- Better user experience after initial load
- Examples: React, Vue, Angular SPAs

**Server Side Rendering (SSR):**

- Server renders HTML and sends complete page to browser
- Faster initial page load
- Better for SEO
- Examples: Next.js, Nuxt, Django templates

**Key Difference:** CSR renders in the browser; SSR renders on the server before sending to the browser.

---

### 3. Single Page Application (SPA)

- Web application that dynamically updates content without full page reloads
- Uses client-side routing to navigate between views
- Loads initial HTML once, then fetches data via APIs
- Provides fast, app-like experience
- Examples: Gmail, Google Maps, Trello

---

### 4. React Vs. Vite Vs. Next Vs. Angular

| Feature        | React             | Vite       | Next.js   | Angular   |
| -------------- | ----------------- | ---------- | --------- | --------- |
| Type           | Library           | Build tool | Framework | Framework |
| Learning Curve | Moderate          | Easy       | Moderate  | Steep     |
| Bundle Size    | Medium            | Small      | Medium    | Large     |
| SSR Support    | No (need Next.js) | No         | Yes       | Yes       |
| Routing        | React Router      | Manual     | Built-in  | Built-in  |

---

### 5. TypeScript Vs. JavaScript

**JavaScript:**

- Dynamically typed scripting language
- Flexible and lightweight
- Easier to learn
- Runtime errors

**TypeScript:**

- Superset of JavaScript with static typing
- Compiled to JavaScript
- Better IDE support and error detection
- Catches errors at compile-time
- Steeper learning curve

**Key Difference:** TypeScript adds type safety to JavaScript before runtime.

---
