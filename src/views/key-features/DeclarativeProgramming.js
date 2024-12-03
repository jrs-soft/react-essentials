import React from "react";

export default function DeclarativeProgramming() {
  return (
    <div className="p-8 space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Declarative Programming in React</h1>
        <p className="text-lg text-gray-600 mt-2">
          A guide to understanding how React simplifies UI development using declarative programming principles.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">What is Declarative Programming?</h2>
        <p className="mt-4">
          Declarative programming is a style where developers specify&nbsp;
          <strong>what</strong> the application should do, rather than detailing
          <strong>how</strong> it should achieve it. React uses this approach to build User Interfaces (UI).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">How It Works in React</h2>
        <ol className="list-decimal list-inside mt-4 space-y-4">
          <li>
            <strong>Describing UI in Terms of State:</strong> Developers specify how the UI should look for a given state.
            React updates the DOM automatically when the state changes.
          </li>
          <li>
            <strong>Automatic UI Updates:</strong> React calculates the minimal changes needed and applies them to the DOM.
          </li>
          <li>
            <strong>No Manual DOM Manipulation:</strong> Developers don’t need to handle <code>document.getElementById</code> or other DOM APIs manually.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700">Code Example</h3>
        <p className="mt-4">
          Below is an example of a simple counter component using React:
        </p>
        <pre className="bg-white p-4">
          <code className="block whitespace-pre text-sm">
            {`function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Benefits of Declarative Programming</h2>
        <ul className="list-disc list-inside mt-4 space-y-4">
          <li>
            <strong>Simplifies Development:</strong> Focuses on what the UI should look like instead of managing the DOM.
          </li>
          <li>
            <strong>Easier Debugging:</strong> The UI is a pure function of the state, making it easier to trace bugs.
          </li>
          <li>
            <strong>Enhanced Maintainability:</strong> Keeps the code modular and reusable.
          </li>
          <li>
            <strong>Predictable UIs:</strong> The UI always reflects the current state.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Imperative vs Declarative</h2>
        <table className="table-auto w-full mt-4 border-collapse border border-gray-200 text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200">Aspect</th>
              <th className="px-4 py-2 border border-gray-200">Declarative (React)</th>
              <th className="px-4 py-2 border border-gray-200">Imperative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-200">Definition</td>
              <td className="px-4 py-2 border border-gray-200">Describes what the UI should look like.</td>
              <td className="px-4 py-2 border border-gray-200">Specifies how to update the UI step-by-step.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-200">Ease of Use</td>
              <td className="px-4 py-2 border border-gray-200">Easier to write and understand.</td>
              <td className="px-4 py-2 border border-gray-200">Can become complex with large apps.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Real-World Example of Declarative React</h2>
        <p className="mt-4">
          Imagine a shopping cart UI where the total price updates dynamically as items are added or removed. Here's how you can implement it in React:
        </p>
        <pre className="bg-white p-4">
          <code className="block whitespace-pre text-sm">
            {`function ShoppingCart() {
    const [cart, setCart] = React.useState([
        { id: 1, name: 'Apple', price: 1.5 },
        { id: 2, name: 'Banana', price: 1.2 }
    ]);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.price.toFixed(2)} 
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Total: {totalPrice.toFixed(2)}</h2>
        </div>
    );
}`}
          </code>
        </pre>
        <p className="mt-4">
          In this example, React dynamically updates the list and total price without manual DOM manipulation, demonstrating the power of declarative programming.
        </p>
      </section>

      <footer className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-600">
          By embracing declarative programming, React simplifies UI development and makes it easier to build scalable, maintainable applications.
        </p>
      </footer>
    </div>
  );
}
