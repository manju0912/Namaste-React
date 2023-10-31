# Assignment 11 - Theory

<h3>1. What is prop drilling?</h3>
<p>It is the process of passing data from a parent component down to its child component through multiple levels of nesting, even when some intermediary components don't directly use that data.<br/>
It can make code less maintainable and lead to performance issues because props must be passed through multiple levels of components. To solve this, you can use techniques like context or state management libraries (e.g., Redux) to avoid prop drilling and make data sharing more efficient and organized.
</p>

<h3>2. What is lifting the state up?</h3>
<p>It is a common pattern used by React developers to share state among components. It means moving the state from a lower-level child component to a higher-level parent component via props.<br/>
This allows multiple child components to share and update the same state, promoting data consistency and making your application more maintainable and predictable. It's like taking a piece of information that many people need and putting it in a central place so everyone can access and update it.
</p>

<h3>3. What are Context Provider and Context Consumer?</h3>
<p>Context Provider is a component that provides a certain piece of data (e.g., a theme, user information) to its child components. It uses the `createContext` API to create a context and provides a value that child components can access.</p>
<p>A Context Consumer is a component that consumes the data provided by a Context Provider. It uses the `Context.Consumer` component to access the data from the context and use it in its rendering.</p>

<h3>4. If you don't pass a value to the provider, does it take the default value?</h3>
<p>Yes, if you donn't pass a value to a Context Provider in React, it will use the default value specified when you create the context using the `createContext` API. The default value acts as a fallback if no value is provided by the parent component.</p>
