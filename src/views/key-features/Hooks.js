import React from "react";

export default function Hooks() {
  return (
    <div class="p-8 space-y-8">
      <h1 class="text-3xl font-bold mb-4">React Hooks</h1>
      <p class="mb-6">
        Introduced in <strong>React 16.8</strong>, Hooks are functions that let developers <em>"hook into"</em> React
        features
        (like state and lifecycle) in <strong>functional components</strong>. Before Hooks, managing state or accessing
        lifecycle methods required <strong>class components</strong>. Hooks simplify React development by allowing these
        capabilities directly in functional components, making code cleaner, more reusable, and easier to understand.
      </p>

      <h2 class="text-2xl font-semibold mb-4">Why Hooks Were Introduced</h2>
      <ul class="list-disc list-inside mb-6">
        <li>Simplify code by removing class components for state management and lifecycle methods.</li>
        <li>Avoid the complexity of class components such as <code>this</code> binding.</li>
        <li>Encourage reusable logic through custom hooks.</li>
        <li>Improve composition by splitting logic into smaller, reusable functions.</li>
      </ul>

      <h2 class="text-2xl font-semibold mb-4">Commonly Used React Hooks</h2>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">1. <code>useState</code></h3>
        <p class="mb-4">Manages <strong>state</strong> in a functional component. Returns an array with:</p>
        <ul class="list-disc list-inside mb-4">
          <li>The current state value.</li>
          <li>A function to update the state.</li>
        </ul>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}
          </code>
        </pre>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">2. <code>useEffect</code></h3>
        <p class="mb-4">Handles <strong>side effects</strong> like data fetching, subscriptions, or DOM manipulation.</p>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means it runs once on mount

  return <h1>{count}</h1>;
}`}
          </code>
        </pre>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">3. <code>useContext</code></h3>
        <p class="mb-4">Provides access to the <strong>context</strong> API for sharing data without prop drilling.</p>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>The theme is {theme}</div>;
}`}
          </code>
        </pre>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">4. <code>useReducer</code></h3>
        <p class="mb-4">An alternative to <code>useState</code> for <strong>complex state logic</strong>.</p>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}`}
          </code>
        </pre>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">5. <code>useMemo</code></h3>
        <p class="mb-4">Memoizes expensive calculations to avoid unnecessary re-computations.</p>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import React, { useMemo } from 'react';

function ExpensiveComponent({ num }) {
  const compute = (n) => {
    console.log('Computing...');
    return n * 2;
  };

  const result = useMemo(() => compute(num), [num]);

  return <div>{result}</div>;
}`}
          </code>
        </pre>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">6. <code>useCallback</code></h3>
        <p class="mb-4">Returns a <strong>memoized callback function</strong>, useful for optimizing child component renders.</p>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  console.log('Rendered!');
  return <button onClick={increment}>Increment</button>;
}`}
          </code>
        </pre>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">7. <code>useRef</code></h3>
        <p class="mb-4">Holds a <strong>mutable value</strong> that persists across renders. Often used for accessing DOM elements.</p>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}`}
          </code>
        </pre>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-2">8. Custom Hooks</h3>
        <p class="mb-4">Create reusable logic that can be shared between components.</p>
        <pre class="bg-white p-4">
          <code class="text-sm">
            {`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, [url]);

  return data;
}

function App() {
  const data = useFetch('https://api.example.com/data');
  return <div>{data && JSON.stringify(data)}</div>;
}`}
          </code>
        </pre>
      </div>

      <h2 class="text-2xl font-semibold mb-4">Benefits of Hooks</h2>
      <ul class="list-disc list-inside mb-6">
        <li>Cleaner code without class components.</li>
        <li>Reusable logic through custom hooks.</li>
        <li>Improved readability with reduced boilerplate.</li>
        <li>Encourages functional programming for better separation of concerns.</li>
      </ul>

      <h2 class="text-2xl font-semibold mb-4">Rules of Hooks</h2>
      <ul class="list-disc list-inside mb-6">
        <li><strong>Only Call Hooks at the Top Level:</strong> Don’t call Hooks inside loops, conditions, or nested
          functions.
        </li>
        <li><strong>Only Call Hooks in React Functions:</strong> Use Hooks in functional components or custom Hooks.</li>
      </ul>
    </div>
  );
}
