import React from "react";

export default function JsxInReact() {
    return (
        <div className="p-8 space-y-8">
            <h1 className="text-3xl font-bold mb-6">JSX (JavaScript XML) in React</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What is JSX?</h2>
                <p className="mb-4">
                    JSX stands for <strong>JavaScript XML</strong> and is a syntax extension for JavaScript commonly used in React.
                    It allows you to write HTML-like code directly within JavaScript, making it easier to describe the structure and
                    appearance of the user interface (UI) in a declarative way.
                </p>
                <div className="bg-gray-200 rounded p-4 mb-4">
                    <pre className="bg-white p-4"><code className="text-sm">const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code></pre>
                </div>
                <p>This looks like HTML but is actually JavaScript under the hood. The React library transforms this JSX into JavaScript code that creates React elements.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Use JSX?</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Improved Readability:</strong> JSX looks similar to HTML, making it intuitive for developers familiar with web development.</li>
                    <li><strong>Component-Based:</strong> JSX works seamlessly with React’s component-based architecture, allowing developers to build UIs by composing components.</li>
                    <li><strong>Integration with Logic:</strong> JSX allows embedding JavaScript expressions using curly braces <code>{`{}`}</code> within the markup, enabling dynamic rendering.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">JSX Syntax</h2>
                <p className="mb-4">JSX elements are written using HTML-like syntax:</p>
                <div className="bg-gray-200 rounded p-4 mb-4">
                    <pre className="bg-white p-4"><code className="text-sm">const title = &lt;h1&gt;Welcome to React&lt;/h1&gt;;</code></pre>
                </div>

                <h3 className="text-xl font-semibold mb-2">Embedding JavaScript Expressions</h3>
                <p className="mb-4">Use curly braces <code>{`{}`}</code> to embed JavaScript expressions inside JSX:</p>
                <div className="bg-gray-200 rounded p-4 mb-4">
                    <pre className="bg-white p-4"><code className="text-sm">
                        const user = 'Alice';<br />const greeting = &lt;h1&gt;Hello, {`{user}`}!&lt;/h1&gt;;
                    </code></pre>
                </div>

                <h3 className="text-xl font-semibold mb-2">Attributes</h3>
                <p className="mb-4">JSX uses attributes similar to HTML, but with camelCase naming conventions for properties:</p>
                <div className="bg-gray-200 rounded p-4 mb-4">
                    <pre className="bg-white p-4"><code className="text-sm">const element = &lt;img src="image.png" alt="A description" /&gt;;</code></pre>
                </div>

                <h3 className="text-xl font-semibold mb-2">Children</h3>
                <p className="mb-4">JSX can have child elements, including text, components, or a combination of both:</p>
                <div className="bg-gray-200 rounded p-4 mb-4">
                    <pre className="bg-white p-4"><code className="text-sm">
{`const element = (
  <div>
    <h1>Hello</h1>
    <p>This is a paragraph.</p>
  </div>
);`}
                    </code></pre>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">JSX Under the Hood</h2>
                <p className="mb-4">JSX is not valid JavaScript; it is transformed into JavaScript by a compiler (e.g., Babel). For example:</p>
                <div className="bg-gray-200 rounded p-4 mb-4">
                    <pre className="bg-white p-4"><code className="text-sm">const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code></pre>
                </div>
                <p className="mb-4">is compiled to:</p>
                <div className="bg-gray-200 rounded p-4 mb-4">
                    <pre className="bg-white p-4"><code className="text-sm">const element = React.createElement('h1', null, 'Hello, world!');</code></pre>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">JSX Best Practices</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Keep JSX simple: Break complex JSX into smaller components for better readability.</li>
                    <li>Use fragments: Use <code>&lt;&gt;&lt;/&gt;</code> instead of <code>&lt;div&gt;</code> when a wrapper is necessary but not semantically meaningful.</li>
                    <li>Keys in lists: Always use unique keys for list items to help React manage updates efficiently.</li>
                    <li>Avoid inline logic: Extract complex logic into helper functions instead of embedding it directly in JSX.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p className="mb-4">
                    JSX is a powerful feature of React that simplifies UI development by blending JavaScript and HTML-like syntax.
                    It provides a declarative and component-friendly way to build complex UIs while integrating seamlessly with JavaScript logic.
                    Mastering JSX is a crucial step in becoming proficient in React development.
                </p>
            </section>
        </div>
    );
}
