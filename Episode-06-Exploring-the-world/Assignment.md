# Assignment 06 - Theory

<h3>1. What is Microservice?</h3>
<p>Microservices or Microservices architecture is a cloud-native architectural approach in which single application is composed of many loosely coupled and independently deployable smaller components or services.<br/>
- These services typically have their own tech stack and communicate with one another over combination of REST APIs.<br/>
- It is a very useful approach because code can be updated more easily. We can add a feature or functionality without touching the entire application.<br/>
- Teams can use different tech stacks and programming languages for different components or services.
</p>

<h3>2. What is Monolith architecture?</h3>
<p>Monolith architecture is a traditional architectural approach in which an application is designed as a single, individual unit with all its components tightly coupled together.<br/>
- In this style, the entire application is packaged and deployed as a single executable unit, with all its components and modules budled together.<br/>
- Monolith architecture follows single tech stack to build the entire application. Hence it's easy to built, deploy, and debug the application.<br/>
- In Monolith architecture, updating a code or adding additional feature can be challanging as we need to update the entire code base which can affect the other modules also.<br/>
- Another disadvantage of using monolith architecture is that we can't scale individual components. And if there is any error in any module, it could affect the entire application's availability.
</p>

<h3>3. What is the difference between Monolith and Microservice?</h3>
<h4>Monolith Architecture</h4>
- An application is designed as a single, individual unit with all its components tightly coupled together.<br/>
- Uses single code base to build the entire application making it easily deployable and debug.<br/>
- We can't scale individual components.<br/>
- Adding any feature or functionality can be challanging without affecting the other modules.<br/>

<h4>Microservice Architecture</h4>
- An application is composed of many loosely coupled and independently deployable components or services.<br/>
- Teams can use different tech stacks and programming languages for different components or serives making it more flexible.<br/>
- It's easy to update the code in the individual components separately.<br/>
- We can easily add any feature or functionality in Microservice architecture without touching the entire application.

<h3>4. Why do we need <strong>useEffect()</strong> Hook?</h3>
<p>useEffect() hook is an inbuilt function in React.
- It is used to handle the side effects in functional component. The side effects include the tasks such as fetching data from API, subscribing to event, or manipulating the DOM.<br/>
- To use useEffect() hook, we pass two arguments to it:
    (i) An arrow function : it contains the code to run for the side effects.
    (ii) AN optional Dependency Array: It specifies when the side effect should run.
- If the dependency array is empty, the side effect runs after every render.
- If you provide dependencies, the side effect runs when the dependencies change between renders.
- The function passed to useEffect is a callback function. This will be called after the component renders.
- Inside the arraow function, you can run return a cleanup function if necessary. It is executed before next render. Cleanup function includes such as unsubscribing from an event listener.
</p>
<pre>
useEffect(() => {}, []);
</pre>

<h3>5. What is Optional Chaining?</h3>
<p>It is a feature in JavaScript that allows to access properties of an object without worrying about whether the object is null or undefined.
- It is represented by '?.' operator.
- If the object accessed or function called using this operator is null or undefined, the expression short circuits and evaluates to undefined instead of throwing an error.</p>

<h3>6. What is Shimmer UI?</h3>
<p>It is a technique used in UI design to show loading states.<br/>
It is a version of UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.</p>

<h3>7. What is the difference between JS expression and JS statement?</h3>
<p>- JS Statement is an instruction to do something, like creating a variable, running if/else condition, or starting a loop. Statements do not produce any value.<br/>
- JS Expression on the other hand contains a bit of code and produce a value.
</p>

<h3>8. What is Conditional Rendering? Explain with a code example.</h3>
<p>Conditional rendering is a technique in React and other web development frameworks to render the UI based on specific conditions.</p>

```
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Welcome to Namaste React 🚀</h1>
      {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default App;

```

<h3>9. What is CORS?</h3>
<p>CORS stands for Cross-Origin Resource Sharing. It is a security feature in web browsers.<br/>
- Be default, web pages can only talk to the same server they came from. This rule helps keep your data safe.<br/>
- Sometimes, a web page wants to talk to a different server, like when it loads images or data from another website. CORS allows the server, and the browser lets the web page do it.<br/>
- But CORS also has rules to prevent just any web page from accessing any server.</p>
<p>~ In simple terms, CORS is like a security gatekeeper that allows web pages to share data or resources with other websites, but only if those websites give permission and are considered trustworthy. This helps keep your data and computer safe while allowing websites to work together when needed.</p>

<h3>10. What is <strong>async</strong> and <strong>await</strong>?</h3>
<p><strong>async</strong> and <strong>await</strong> are JavaScript features used to work with asynchronous operations, like fetching data from a server, reading a file, or waiting for a timer. They make handling asynchronous code more readable and easier to manage.</p>
<h4>async function</h4>
<p>It is a special type of JS function that can perform asynchronous operations. You mark a function as `async` by adding the `async` keyword before the `function` keyword in its definition.<br/>
- In simple terms, async functions are used to write asynchronous code in a more structured and linear way.</p>
<pre>
async function fetchData(){
}
</pre>

<h4>await</h4>
<p>await is used inside async functions. It tells Javascript to pause the function until the asynchronous operation is finished. Only then it will move to the next line of code.</p>
<pre>
async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
}
</pre>

<h3>11. What is the use of 'const json = await data.json();' in getRestaurants() ?</h3>
<p>It is used to fetch and parse JSON data from HTTP response object. The await keyword here ensures that the function `getRestaurants()` doesn't proceed until the JSON data is available and converted into a usable JavaScript object. The parsed JSON data then be processed or displayed in the rest of the function.</p>
