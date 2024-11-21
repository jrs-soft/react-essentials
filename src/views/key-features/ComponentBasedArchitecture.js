import React from "react";

export default function ComponentBasedArchitecture() {
    return (
        <div className="p-8 space-y-8">
            <h1 className="text-3xl font-bold">Component-Based Architecture in React</h1>
            <p className="text-lg mt-4">
                Component-based architecture is a fundamental concept in React, where the application
                is built as a collection of <strong>reusable, self-contained, and composable components</strong>.
                These components work together to form the user interface (UI) and handle application logic.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Key Features of Component-Based Architecture</h2>
            <ul className="space-y-4 list-disc list-inside mt-4">
                <li>
                    <strong>Reusability</strong>
                    <p className="mt-2">
                        Components are designed to be reused throughout the application. For instance, a <code>Button</code>
                        component can be used in multiple places without redefining its structure or behavior. Reusable
                        components help reduce redundancy and improve maintainability.
                    </p>
                </li>
                <li className="mt-4">
                    <strong>Encapsulation</strong>
                    <p className="mt-2">
                        Each component manages its own structure, behavior, and styles. This encapsulation ensures that
                        changes in one component do not inadvertently affect others.
                    </p>
                </li>
                <li className="mt-4">
                    <strong>Composition</strong>
                    <p className="mt-2">
                        Components can be combined (nested) to build complex UIs. For example, a <code>Card</code>
                        component might include a <code>Header</code>, <code>Image</code>, and <code>Footer</code> as
                        its child components. This allows developers to break down large UIs into smaller, manageable pieces.
                    </p>
                </li>
                <li className="mt-4">
                    <strong>Unidirectional Data Flow</strong>
                    <p className="mt-2">
                        React follows a <em>top-down data flow</em>, where data (via <code>props</code>) is passed from parent
                        to child components. This makes it easier to track and debug the data flow in the application.
                    </p>
                </li>
                <li className="mt-4">
                    <strong>State Management</strong>
                    <p className="mt-2">
                        Components can manage their own local state using React’s <code>useState</code> or
                        <code>useReducer</code> hooks. For global state, tools like <strong>Context API</strong>,
                        <strong>Redux</strong>, or other state management libraries can be used.
                    </p>
                </li>
                <li className="mt-4">
                    <strong>Lifecycle Management</strong>
                    <p className="mt-2">
                        Functional components can handle lifecycle events (e.g., mounting, updating, and unmounting)
                        through hooks like <code>useEffect</code>.
                    </p>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Component Types</h2>
            <ul className="space-y-4 list-disc list-inside">
                <li className="mt-4">
                    <strong>Functional Components</strong>
                    <p className="mt-2">
                        Defined as JavaScript functions. Typically use hooks (e.g., <code>useState</code>,
                        <code>useEffect</code>) to handle state and side effects.
                    </p>
                    <pre className="bg-white p-4 rounded mt-2">
                        <code>{`const Welcome = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};`}</code>
                    </pre>
                </li>
                <li className="mt-4">
                    <strong>Class Components (Legacy)</strong>
                    <p className="mt-2">
                        Defined using ES6 classes. Manage state and lifecycle methods like
                        <code>componentDidMount</code> or <code>componentDidUpdate</code>.
                    </p>
                    <pre className="bg-white p-4 rounded mt-2">
                        <code>{`class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
};`}</code>
                    </pre>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Advantages</h2>
            <ul className="space-y-4 list-disc list-inside mt-4">
                <li><strong>Modularity</strong>: Easier to develop, test, and maintain.</li>
                <li><strong>Scalability</strong>: Applications can grow easily by adding more components.</li>
                <li><strong>Improved Collaboration</strong>: Teams can work on individual components without conflicts.</li>
                <li><strong>Easier Debugging</strong>: Issues are often isolated to specific components.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Best Practices</h2>
            <ul className="space-y-4 list-disc list-inside mt-4">
                <li><strong>Keep Components Small and Focused</strong>: Each component should handle a single responsibility.</li>
                <li><strong>Use Props for Customization</strong>: Pass dynamic data to components via <code>props</code>.</li>
                <li><strong>Leverage Composition</strong>: Combine smaller components to build larger ones.</li>
                <li><strong>Avoid Prop Drilling</strong>: Use Context API or state management libraries to manage deeply nested state.</li>
                <li><strong>Use CSS Modules or Styled Components</strong>: Keep styles scoped to components for better encapsulation.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Example: A Simple Component-Based Application</h2>
            <pre className="bg-white p-4 rounded mt-2">
                <code>{`import React from 'react';

// Header Component
const Header = () => <header><h1>My App</h1></header>;

// Footer Component
const Footer = () => <footer><p>&copy; 2024 My App</p></footer>;

// Main Component
const Main = ({ content }) => <main><p>{content}</p></main>;

// App Component
const App = () => {
    return (
        <div>
            <Header />
            <Main content="Welcome to my React app!" />
            <Footer />
        </div>
    );
};

export default App;`}</code>
            </pre>

            <p className="mt-6">
                This architecture enables clear separation of concerns, making it easier to update, debug, and extend the application as needed.
            </p>
        </div>
    );
}
