# Assignment 12 - Theory

<h3>1. useContext vs Redux.</h3>
<p><strong>useContext</strong> is a hook used to share data among components even when the components are not directly linked. Changes are made using the Context value. useContext() hook is basically used for small applications.</p>
<p><strong>Redux</strong>, on the other hand, is a state management library for JavaScript applications. In Redux, state is read-only and we can not modify the state. We make changes with the help of pure Redux is used in large applications where state management is tough.</p>

<h3>2. Advantages of using Redux Toolkit over Redux.</h3>
<p>Advantages of Redux Toolkit:
<li>Easier state management as compared to Redux.</li>
<li>RTK gives the ability to write mutable state updates in the reducers. It is done with the help of immer.js library that allows writing immutable code mutably provided by createReducer() utility.</li>
<li>RTK solves various issues by providing hook-based implementation of Redux.</li>
<li>It eliminates the use of extra coding by providing boilerplates.</li>
</p>

<h3>3. Explain Dispatcher.</h3>
<p>A dispatcher is a central hub that manages the flow of data within an application. Each store registers a callback with the dispatcher. dispatch is a function used in Redux store. The dispatch() function is used to dispatch actions and trigger state changes to the store.</p>

<h3>4. Explain Reducer.</h3>
<p>Reducers in React-Redux are pure functions that contain the operations (logic and calculation) that need to be performed on the state. The reducer function specifies how the state gets updated and must be pure. It should take the state and action as arguments, and should return the next state.</p>

<h3>5. Explain Slice.</h3>
<p>A slice in redux-toolkit is a collection of reducer logic and actions for a single feature of the app. A slice of the redux-store can be created using createSlice function from Redux toolkit which automatically generates action creators and action types that correspond to the reducers and state.</p>

<h3>6. Explain Selector.</h3>
<p>A selector in Redux is a function that reads the data from slice of redux-store and then updates the cart. Selectors are useful for extracting and transforming data from the state without modifying it.</p>

<h3>7. Explain createSlice and the configuration it takes.</h3>
<p>createSlice is a function used in Redux-Toolkit to create a slice of the redux-store. The configuration it is a slice name, initial state, and an object full of reducer functions.</p>

```
import {createSlice} from '@reduxjs/toolkit';

// Configuration

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {

    }
});
```