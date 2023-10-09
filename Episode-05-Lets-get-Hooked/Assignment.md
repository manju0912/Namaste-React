# Assignment 05 - Theory

<h3>1. What is the difference between <strong>Named</strong> Export, <strong>Default</strong> export, and <strong>* as</strong> export</h3>
<p>
- <strong>Named</strong> Export allows you to export multiple items by name from a module using 'export' keyword.<br/>
- <strong>Default</strong> Export allows you to export a single item as the default export from a module.<br/>
- <strong>* as</strong> exports all the items from a module as a single object. It collects everything into a single namespace object.
</p>

<h3>2. What is the importance of config.js file?</h3>
<p>The config.js file plays crucial role in managing the application's configuration setting and environments. Here are some of the importance of config.js file:</p>
<u>
<li><strong>Centralizes Settings:</strong> config.js file stores important settings like API URLs and keys, keeping them in one place for easy access and updates.<li>
<li><strong>Manages Environment:</strong> It helps adapt the app to different environments (e.g., development, production) by changing settings in one file.<li>
<li><strong>Secure Secrets:</strong> Sensitive information like API keys, database credentials, or authentication tokens should never be hard-coded directly into the application's source code. These sensitive info stays safe in config.js file away from code in environment variable making it harder to expose.<li>
<li><strong>Simplifies Deployment:</strong> You can deploy the same codebase to multiple environments by adjusting config.js, making deployment faster.<li>
</ul>

<h3>3. What are React Hooks?</h3>
<p>React Hooks are inbuilt-functions that allows us to use state or other React features without using class.Initially, when we need to add or update something in React function component then we had to convert it into classes first. But Hooks can be used directly inside the function component.</p>

<h3>4. Why do we need <strong>useState()</strong> Hook?</h3>
<p>- useState() Hook is a very important Hook in React that is used to declare the State of a variable in React. Normally, variables disappear when we exit a function but state variables are preserved in React.<br/>
- The only argument we pass to the useState() hook is the initial state. The argument can be either a number or string only. Unlike classes, State doesn't have to be an object.<br/>
- useState() hook return a pair of values: the current state and the function that updates it.</p>
<code>
// importing the hook
import {useState} from 'react;

// Declaring a state variable
const [var, setVar] = useState();
</code>