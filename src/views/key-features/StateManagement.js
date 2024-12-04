import React from "react";

export default function StateManagement() {
  return (
    <div class="p-8 space-y-8">
      <h1 class="text-4xl font-bold mb-6">State Management in React</h1>
      <p class="text-lg mb-8">
        State management refers to handling the dynamic data or information in a React application that determines the behavior and rendering of components. As applications grow in complexity, managing state efficiently becomes crucial.
      </p>

      <section class="mb-10">
        <h2 class="text-3xl font-semibold mb-4">1. State in React Components</h2>

        <h3 class="text-2xl font-medium mb-2">Internal Component State</h3>
        <p class="mb-4">
          <strong>Definition:</strong> State is mutable data managed directly within a React component, often using hooks like
          <code class="bg-gray-200 text-gray-800 px-1 rounded">useState</code> or
          <code class="bg-gray-200 text-gray-800 px-1 rounded">useReducer</code>.
        </p>
        <p class="mb-6">
          <strong>Purpose:</strong> Stores dynamic data such as form inputs, toggle states, counters, or local UI states.
        </p>

        <div class="bg-gray-100 p-4 rounded mb-6">
        <pre className="bg-white p-4 rounded mb-6 shadow"><code>{`import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Internal state

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`}</code></pre>
        </div>

        <h4 class="text-lg font-medium mb-2">Key Points:</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>State is localized to the component and is not accessible by other components.</li>
          <li>Updates to state cause the component to re-render.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-3xl font-semibold mb-4 mt-4">2. Challenges in Larger Applications</h2>
        <p class="mb-6">
          As applications grow, state often needs to be shared or synchronized across multiple components, leading to issues such as:
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>State Propagation:</strong> Passing state down multiple levels of components (prop drilling).</li>
          <li><strong>Redundant State Updates:</strong> Managing the same piece of state in multiple components.</li>
          <li><strong>Complexity:</strong> Difficulty in debugging and maintaining consistency across the app.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-3xl font-semibold mb-4 mt-4">3. External State Management Tools</h2>

        <h3 class="text-2xl font-medium mb-4">Context API (Built-in Solution)</h3>
        <p class="mb-4">
          <strong>Purpose:</strong> Shares state globally across components without prop drilling.
        </p>
        <p class="mb-6">
          <strong>Use Case:</strong> Ideal for medium-scale applications or when managing simple global states like themes, authentication, or user preferences.
        </p>

        <div class="bg-gray-100 p-4 rounded mb-6">
        <pre className="bg-white p-4 rounded mb-6 shadow"><code>{`import React, {createContext, useContext, useState} from 'react';

// Create Context
const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light'); // Shared state

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

// Usage
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}`}</code></pre>
        </div>

        <h4 class="text-lg font-medium mb-2">Advantages:</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Built into React; no external dependencies.</li>
          <li>Suitable for small to medium-scale global state management.</li>
        </ul>

        <h4 class="text-lg font-medium mb-2">Limitations:</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Overhead in performance if the context value changes frequently.</li>
          <li>May lead to unnecessary re-renders for deeply nested components.</li>
        </ul>

        <h3 class="text-2xl font-medium mb-4 mt-4">Redux</h3>
        <p class="mb-4">
          <strong>Purpose:</strong> Provides a centralized store to manage the global state with predictable state updates.
        </p>
        <div class="bg-gray-100 p-4 rounded mb-6">
        <pre className="bg-white p-4 rounded mb-6 shadow"><code>{`import {createStore} from 'redux';

const initialState = {count: 0};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
}

const store = createStore(counterReducer);
export default store;`}</code></pre>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-3xl font-semibold mb-4">4. Choosing the Right State Management Tool</h2>
        <table class="table-auto border-collapse w-full text-left text-gray-800 mb-8">
          <thead>
            <tr class="bg-gray-200">
              <th class="border px-4 py-2">Use Case</th>
              <th class="border px-4 py-2">Recommended Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">Small apps or local state management</td>
              <td class="border px-4 py-2"><code>useState</code>, <code>useReducer</code></td>
            </tr>
            <tr>
              <td class="border px-4 py-2">Medium apps with simple global state</td>
              <td class="border px-4 py-2">Context API</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">Large apps with complex state logic</td>
              <td class="border px-4 py-2">Redux</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">Reactive and flexible state requirements</td>
              <td class="border px-4 py-2">MobX</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 class="text-3xl font-semibold mb-4">5. Emerging Tools</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Zustand:</strong> A lightweight state management library with less boilerplate.</li>
          <li><strong>Recoil:</strong> Built by Facebook, integrates well with React's concurrent mode.</li>
        </ul>
      </section>
    </div>
  );
}
