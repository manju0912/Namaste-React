# Assignment 09 - Theory

<h3>1. When and why do we need lazy()?</h3>
<p>When we build a large scale application where the application has lots of resources, we need lazy() to reduce the bundle size of our application. lazy() loads only the necessary data when requested. It breaks down our application into smaller and separate sub-files called chunks.</p>

<h3>2. What is suspense?</h3>
<p>suspense is a component or feature in React that makes it easier to work with asynchronous code such as data fetching, code splitting. It allows you to suspend rendering until some asynchronous work is complete.</p>

<h3>3. Why we got this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?</h3>
<p>This error is related to React's Suspense feature specially its interaction with synchronous user interaction. This error occurs when a component is rendering in response to a synchronous user interaction. Synchronous interactions in React should be fast as they are expected to update the UI promptly. When a component suspends during a synchronous interaction, it would block the UI until the suspended operation is complete leading to poor UX.</p>
<p>To address this issue, React provides a startTransition function. You can wrap the asynchronous or potentially suspending part of your code with `startTransition`. This will tell React that it's safe to perform asynchronous work without blocking the synchronous rendering and the UI remains responsive during the asynchronous operatin.</p>

<h3>4. Advantages and disadvantages of using this code splitting pattern?</h3>
<p><strong>Advantages</strong><br/>
- Faster Initial Load: Code splitting reduces the initial bundle size, resulting in faster page load times.<br/>
- Improved Performance: Smaller bundles lead to improved performance specially on slow network connections.<br/>
- Efficient Resource Uses: It optimizes resource usage as only required code is loaded when needed.<br/>
- Simplified Maintenance: Code splitting can improve code maintainability by breaking the app into smaller, manageable parts.
</p>
<p><strong>Disadvantages</strong><br/>
- Complexity: Implementing code splitting can add complexity to your build process and codebase.<br/>
- Tooling Dependency: You may need to rely on build tools like webpack, parcel for effective code splitting.<br/>
- Potential Bugs: Improper code splitting can introduce bugs especially if dependencies are not managed correctly.
</p>

<h3>5. When and why do we need suspense?</h3>
<p>suspense is often used with React lazy loading. When React lazy is loading a component asynchronously, it will throw a javascript error during rendering. Therefore we need to wrap the component, that is being performing asynchronous work, inside the suspense component. Inside the suspense component we can specify a fallback UI that will be displayed while the async work is in progress. This fallback can be a loading spinner or any other loading indicator.</p>