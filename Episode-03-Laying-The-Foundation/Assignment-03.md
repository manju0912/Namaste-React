# Assignment 03

<h3>1. What is JSX?</h3>
<p>- JSX stands for JavaScript XML. It is simply a JavaScript syntax extension that helps developers to create React Elements easily using HTML-like or XML-like syntax.</p>

<h3>2. Superpowers of JSX?</h3>
<p>JSX offers several superpowers that make it a powerful tool for building modern web applications:</p>
<ul>
    <li>HTML-Like Syntax: JSX looks very similar to HTML. If one is already familiar with HTML, JSX simplifies the process of creating and understanding the structure of UI components.</li>
    <li>Optimization: JSX is faster than normal JavaScript as it performs optimizations while transpiling to Javascript by creating the virtual DOM.</li>
    <li>Type Safety: JSX throws an error at compile time if the HTML syntax is not correct.</li>
    <li>Secure By Default: JSX is secure by default as it helps protect against injection attacks, specifically Cross-Site Scripting (XSS).</li>
    <li>Javascript Integration: JSX allows us to write Javascript expressions or logic in our JSX code inside curly braces, {}. Hence, instead of writing markup and logic in separate file, JSX allows us to put them in a single file.</li>
</ul>

<h3>3. Role of `type` attribute in script tag? What options can I use there?</h3>
<p>- `type`attribute in script tag is used to specify the type of script represented by an element. It identifies the content between <script> and </script> tags.</p>
<p>Some common options that can be used for type attribute are Module Script (type="module"), Other Script types (type="text/php", type="text/javascript").</p>

<h3>4. Explain {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX.</h3>
<ul>
    <li>{TitleComponent}: This is a way to include component called 'TitleComponent' in JSX. It doesn't render the component itself, instead, it just refers to it.</li>
    <li>{<TitleComponent />}: It is a way to render an instance of 'TitleComponent' in JSX. It creates and displays the 'TitleComponent' as part of the UI.</li>
    <li>{<TitleComponent></TitleComponent>}: It's an another way to render an instance of the 'TitleComponent' in JSX. It is same as <TitleComponent />, but written in slightly different syntax.</li>
</ul>
