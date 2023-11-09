# Assignment 13 - Theory

<h3>1. What are the different types of testing?</h3>
<p>Type of testing in web development are:<br/>
- Unit Testing: It is testing individual components of the code, such as functions and methods, in isolation from the rest of the application.<br/>
- Integration Testing: Testing how different components of the application work together.<br/>
- End-to-end Testing (E2E Testing): It is a technique to test out the flow of the application from beginning to end from the user's perspective. It ensures that all the application parts work together.
</p>

<h3>2. What is Enzyme?</h3>
<p>Enzyme is a JavaScript testing utility for React that makes it easier to test your React Component's output.</p>

<h3>3. Enzyme vs React Testing Library.</h3>
<p>Enzyme and React Testing Library are two popular JavaScript testing utilities used for testing React Applications.</p>
<h4>Enzyme<h4>
- It focuses on a more implementation-oriented approach, allowing you to directly interact with and manipulate component internals. It's suited for testing component structure and behaviour at a lower level.<br/>
- It provides a shallow rendering option, which doesn't fully rnder child components or interact with the DOM.
<h4>React Testing Library</h4>
- It encourages users to interact with components in a way that closely resembles how a user would interact with the actual application. This promotes better user-centric testing.<br/>
- It encourages full rendering and interaction with the DOM, aiming to provide more realistic testing scenarios by simulating user interactions on the actual DOM, which can help uncover real-world issues.

<h3>4. What is Jest and why do we use it?</h3>
<p>Jest is a JavaScript testing framework. We use it to write and run tests for our code.</p>
