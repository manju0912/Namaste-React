# Assignment 04

<h3>1. Is JSX mandatory for React?</h3>
<p>JSX is not mandatory for React. BUt its is recommended to use JSX as it simplies to create React elements. Also JSX offers some of the cool features that helps developers to easily create the UI of the application.</p>

<h3>2. Is ES6 mandatory for React?</h3>
<p>ES6 is not strictly mandatory for React. But it is highly recommended and widely adopted within the React community for several reasons. ES6 uses modern Javascript syntax and features which make code more concise and readable. Some of the ES6 features are Arrow Functions, destructuring, etc.</p>

<h3>3. How can I write comments in JSX?</h3>
<p>To write comments in JSX, we need to put the JS comment inside the curly braces, {}. Here is the syntax: {/* Your Comment Here */}</p>

<h3>4. What is <React.Fragment></React.Fragment> and <></>?</h3>
<p></p>

<h3>5. What is Virtual DOM?</h3>
<p>Virtual DOM is an in memory representation of actual DOM. WHen you make any changes to the web application, React first updates the Virtual DOM instead of directly manupulating the actual DOM.</p>
<p>Manupulation the real DOM can be slow and inefficient, especially in complex web applications.</p>

<h3>6. What is Reconciliation in React?</h3>
<p>After updating the Virtual DOM, React compares the updated Virtual DOM with the previous Virtual DOM snapshot to identify the difference, this process is called 'reconciliation'.</p>

<h3>7. What is React Fiber?</h3>
<p>React Fiber is a concept in React JS that is used to render a system faster and smoother. Fiber in react is just a plain JavaScript objet with some properties. Fiber focuses on animations and responsiveness. It has the ability to split work into chunks and prioritize tasks.</p>

<h3>8. Why we need keys in React? When do we need keys in React?</h3>
<p>Keys helps React to identify the items in a list, ensuring that it can accurately update or render only the elements that have changed. If we don't use keys, React will find it difficult to distinguish between different elements in the list leading to incorrect updates and performance issues.</p>
<p>We need keys in React whenever we have to render a list of components or elements using'map()' or similar method. Keys are not required for static lists with fixed content that never changes.</p>

<h3>9. Can we use index as keys in React?</h3>
<p>Yes, we can use index as keys in React in some cases like in static lists. But for dynamic lists that changes based on the user action, it is not recommended to use index as keys as it can lead to incorrect rendering and problem with component state. </p>

<h3>10. What is props in React?</h3>
<p>In React "props" is short for "properties". It is the arguments that we pass in the component.</p>
<p>Props are a way to pass data from parent component to child component. Props are read-only in child component.</p>

<h3>11. What is a Config Driven UI?</h3>
<p>A config-driven UI is a UI that is defined by a configuration file, rather than being hard-coded in the application's source code. This configuration file comes from the backend.</p>