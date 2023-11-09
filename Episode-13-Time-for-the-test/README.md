# Namaste React 🚀 Episode 13- Time For the Test

<p>This is the 11th episode of Namaste React 🚀 series by Akshay Saini.</p>
<p>In this episode, we learnt about unit testing. We set up the testing in our app and wrote the test cases for our components.</p>


### Setting up Testing in our App

- Install React Testing Library
    ```
    npm i -D @testing-library/react
    ```
- Install Jest
    ```
    npm i -D jest
    ```
- Install Babel Dependencies
    ```
    npm i -D babel-jest @babel/core @babel/preset-env
    ```
- Configure Babel by creating a `babel.config.js` file in the root of your project:<br/><hr/>
    `babel.config.js`
    ```
    module.exports = {
        presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };
    ```
- Configure Parcel config file `.parcelrc` to disable default babel transpilation<hr/>
    `.parcelrc`
    ```
    {
        "extends": "@parcel/config-default",
        "transformers": {
            "*.{js,mjs,jsx,cjs,ts,tsx}": [
                "@parcel/transformer-js",
                "@parcel/transformer-react-refresh-wrap"
            ]
        }
    }
    ```
- Jest configuration
    ```
    npx jest --init
    ```
- Install jsdom library : It is a Test environment that will be used for testing.<br/>
    If you are using Jest v.28 or later, install jest-environment-jsdom package separately.
    ```
    npm i -D jest-environment-jsdom
    ```
- Install `@babel/preset-react` to make JSX work in test cases.
    ```
    npm i -D @babel/preset-react
    ```
- Include `@babel/preset-react` in the `babel.config.js` file.
    ```
    module.exports = {
        presets: [['@babel/preset-env', {targets: {node: 'current'}}],
                 ['@babel/preset-react', {runtime: "automatic"}],
                ],
    };
    ```
- Install `@testing-library/jest-dom`.
    ```
    npm i -D @testing-library/jest-dom
    ```