# Assignment 08 - Theory

<h3>1. How do you create Nested Routes react-router-dom configuration?</h3>
<p>Here are the steps to create Nested Routes react-router-dom configuration:<br/>
<p><strong>Step 1:</strong> Install react-router-dom library</p>
<pre>
npm i react-router-dom
</pre>
<p><strong>Step 2:</strong> Create a Route Configuration</p>
<pre>
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
</pre>
<p><strong>Step 3:</strong> Set up Parent and Child Routes</p>
<pre>
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
]);
</pre>
<p><strong>Step 4:</strong> Render Routes in App or root component.</p>
<pre>
root.render(`<` RouterProvider router = {appROuter} `/>`)
</pre>
</p>

<h3>2. Read about createHashRouter, createMemoryRouter from React Router docs.</h3>
<p><strong>createHashRouter</strong> is a type of router in 'react-router-dom' library used for handling client-side routing in a single-page React application. When we use a createHashRouter, the routing information is stored in the URL after a hash symbol ('#'). It's often used in a situation where you don't have server-side routing configuration, such as for static websites. It's a simple way to handle routing entirely on the client side.</p>
<p><strong>createMemoryRouter</strong> is used for handling client-side routing within your React application. It doesn't change the URL displayed in the browser instead, it stores the routing information in memory.</p>

<h3>3. What is the order of life cycle method calls in Class Based Components?</h3>
<p>The order of these methods is as follows:</p>
<p><strong>1. Mounting Phase</strong><br/>
- <strong>constructor()</strong> is called when an instance of the class component is created.<br/>
- <strong>render():</strong> It's responsible for rendering the component UI.<br/>
- <strong>componentDidMount()</strong> is called after the component has been rendered to the DOM. Here we can perform initial setup, make API calls, or interact with the DOM.
</p>
<p><strong>2. Updating Phase</strong><br/>
- <strong>render()</strong> re-renders the component based on state and/or prop changes.<br/>
- <strong>componentDidUpdate()</strong> is called after the component has been updated in the DOM. Here we can perform side effects after an update.
</p>
<p><strong>3. Unmounting Phase</strong><br/>
- <strong>componentWillUnmount()</strong> is called just before the component is removed from the DOM. It's used for cleanup tasks.
</p>

<h3>4. Why do we use componentDidMount?</h3>
<p>componentDidMount is a life cycle method used in class based components in React. It's called after the component has been rendered to the DOM.</p>
<p>
- One of the most common use cases is to fetch data from an API after the component is mounted.<br/>
- It is used to initialize and interact with third-party libraries or resources.<br/>
- It is used to perform DOM manipulation and interactions.<br/>
- We can subscribe to real-time data or events.<br/>
- It is used to synchronize component state or behaviour with the external world or other components.
</p>

<h3>5. Why do we use componentWillUnmount? Show with example.</h3>
<p>componentWillMount is a life cycle method in class based component in React. it's used for performing cleanup tasks or resource cleanup just before a component is unmounted or removed from the DOM.</p>
<p>
- It's essential for avoiding memory leaks and resource leaks. If you have set up event listeners, subscriptions, or timers, they should be removed to free up resources when the component is no longer in use.<br/>
- This method allows you to ensure that any resources or side effects created during the component's lifecycle are properly cleaned up when the component is no longer needed.
</p>
<pre>
componentDidMount(){
  this.timer = setInterval(() => {
    console.log("Hello from Namaste React")
  }, 1000);
}

componentWillUnmount(){
  clearInterval(this.timer);
}
</pre>

<h3>6. Why do we use super(props) in constructor?</h3>
<p>In class based component in React, when we define a constructor, we use super(props) for a specific reason.<br/>
- The <strong>super(props)</strong> call is used to call the constructor of the parent class.<br/>
- By passing 'props' to 'super(props)', React will make props available across the component. We can access the props using 'this.props' keyword.
</p>

<h3>7. Why can't we have the callback function of useEffect async?</h3>
<p>We can't use 'async' functions as the callback in 'useEffect' because the 'useEffect' hook expects its callback function to either return nothing (undefined) or return a cleanup function. The purpose of the callback is to define the side effects, and it's not meant to return promises or asynchronous results.</p>
<p>If you declare the 'useEffect' callback as 'async' and return a promise, React won't be able to handle the promise returned by the asynchronous function correctly. This can lead to unpredictable behaviour and may result in memory leaks or issues with component unmounting.</p>
