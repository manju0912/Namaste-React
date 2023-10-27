# Assignment 10 - Theory

<h3>1. How do we configure tailwind?</h3>
<p><Strong>1. Install Tailwind CSS</strong><br/>
- Install `tailwindcss` and its peer dependencies via npm and then run the init command to generate `tailwind.config.js`.<br/>
<pre>
npm install -D tailwindcss postcss
npx tailwindcss init
</pre>
</p>
<p><Strong>2. Configure PostCSS</strong><br/>
- Create a `.postcssrc` file in your project root and enable the `tailwindcss` plugin.<br/>
<pre>
{
  "plugins": {
    "tailwindcss": {}
  }
}
</pre>
</p>
<p><Strong>3. Configure your template paths</strong><br/>
- Add the paths to all of your template files in your `tailwind.config.js` file.<br/>
<pre>
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</pre>
</p>
<p><Strong>4. Add the Tailwind directives to your CSS</strong><br/>
- Add the `@tailwind` directives for each of Tailwind's layers in your `./src/index.css` file.<br/>
<pre>
@tailwind base;
@tailwind components;
@tailwind utilities;
</pre>
</p>

<h3>2. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?</h3>
<p>- The content section of your tailwind.config.js file is where we define a path that contains html and js files and it tells tailwind to check these files only.<br/>
- The theme section of your tailwind.config.js file is where you define your project's color palette, type scale, fonts, breakpoints, border radius values, and more.<br/>
- The extend property in tailwind.config.js file used to add new styles to your project.<br/>
- The plugins section in tailwind.config.js allows you to register third-party plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants. You can use plugins to extend Tailwind's functionality and customize it to your needs.
</p>

<h3>3. Why do we have .postcssrc file?</h3>
<p>The `postcssrc` file is a configuration file used by PostCSS. It it used to tell bundler that we are using tailwindcss. PostCSS is a CSS parser. We use PostCSS because tailwind is installed as a PostCSS plugin. To enable the tailwindcss plugin, we create `.postcssrc` file in the project root.</p>