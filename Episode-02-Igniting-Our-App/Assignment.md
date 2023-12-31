# Assignment 02

<h3>1. What is NPM?</h3>
<p>npm is the world's largest software directory. Every utility or packages that we need to build our application is hosted there. Although it's a default package manager for JavaScript runtime Node.js but it doesn't stands for Node Package Manager.</p>

<h3>2. What is Parcel/Webpack? Why do we need it?</h3>
<ul>
<li>Parcel/Webpack both are popular application bundler that bundles the javascript files and other assets for the browser.</li>
<li>Webpack offers more customization options and plugins but requires configuration.</li>
<li>On the other hand, Parcel is known for it's simplicity and zero-configuration setup.</li>
</ul>

<h3>3. What is .parcel-cache?</h3>
<p>.parcel-cache is a temporary folder used by parcel to store the cache data of the application. When you make changes to your files, you don't have to re-parse or re-analyze everything from scratch. Parcel will detect those changes and re-run the build using these files.</p>

<h3>4. What is npx?</h3>
<p>It is simply a NPM package runner. It allows developers to execute any JavaScript package available in the NPM directory without even installig it.</p>

<h3>5. What is the difference between dependencies and devDependencies?</h3>
<ul>
    <li>Dependencies are the packages that are required for your application to run properly in production.</li>
    <li>devDependencies are the packages that are required for development and testing purposes.</li>
</ul>

<h3>6. What is Tree Shaking?</h3>
<p>It's a feature or process to eliminate the unused or dead code from the application making is light and fast.</p>

<h3>7. What is Hot Module Replacement?</h3>
<p>HMR is a very useful feature used in webpack/parcel. What it basically does is when you make any changes in the application, it detects the changes and instead of reloading the application or refreshing the browser it automatically replaces the module that needs changes.</p>

<h3>8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.</h3>
<p>Here are the 5 super powers of Parcel:</p>
<ul>
    <li><strong>Dev server:</strong> Parcel has builtin dev server that automatically starts when you run parcel command.</li>
    <li><strong>Hot Module Replacement (HMR):</strong> HMR is a feature that automatically replaces the modules in runtime without reloading the application or refreshing the browser.</li>
    <li><strong>Tree Shaking:</strong> This feature eliminates the dead code from the application making it light and fast.</li>
    <li><strong>Caching:</strong> Parcel caches everything it builds. By default cache is stored in the .parcel-cache folder inside your project. </li>
    <li><strong>Image Optimization:</strong> Parcel supports resizing, converting and optimizing images.</li>
</ul>

<h3>9. What is .gitignore? What should we add and not add into it?</h3>
<p>`.gitignore` is a file used in your git repository that tells git to ignore certain files and folders from tracking.</p>
<h4>What to Add to .gitignore:</h4>
<ul>
    <li>Dependencies: You should ignore dependencies and their related files such as node_modules.</li>
    <li>Compiled Code such as dist/ or build/ folders.</li>
    <li>Temporary files.</li>
    <li>Configuration files that contain sensitive information (like API keys) or user-specific settings.</li>
    <li>Logs nad debug files generated during debugging sessions.</li>
</ul>
<h4>What NOT to Add to .gitignore:</h4>
<ul>
    <li>Source Code.</li>
    <li>Important Configuration files that are essential for your project to work correctly.</li>
    <li>Documentation.</li>
    <li>User generated content such as user uploads.</li>
</ul>

<h3>10. What is the difference between package.json and package-lock.json?</h3>
<ul>
    <li>package.joson is a metadata file that contains the description about the project such as dependencies, scripts, configuration, etc.</li>
    <li>package-lock.json file is a lock file that is automatically generated by npm when a package is installed. It tracks the exact version of all the dependencies installed. The purpose of this file is to ensure that same dependencies are installed consistently across different environments, such as development and production environments.</li>
</ul>

<h3>11. Why should I not modify package-lock.json?</h3>
<ul>
    <li><strong>Dependency Consistency:</strong> package-lock.json locks down the exact versions of dependencies used in your project. It ensures that everyone working on the project is using the same dependency versions, which is crucial for consistent behaviour and avoiding "dependency hell" issues.</li>
    <li><strong>Security:</strong> Modifying package-lock.json file could potentially introduce to security vulnerabilities. npm uses lock file to ensure that you are getting the correct, safe versions of dependencies, including their dependencies. Altering it may lead to unintentionally using outdated or insecure packages.</li>
    <li><strong>Version Conflicts:</strong> Editing the lock file may lead to version conflicts between packages, as npm may not be able to reconcile the changes you made with the actual package versions available. This can cause difficult-to-debug issues.</li>
</ul>

<h3>12. What is `node_modules`? Is it a good idea to push that on git?</h3>
<p>It's a kind of database of all the libraries we will need to build our application. `node_modules` folder contains all the libraries that we fetched from `npm`.</p>
<p>No, it's not a good idea to push node_modules folder in git because this folder can be regenerated based on the package.json file. It should always be a good idea to put it on `.gitignore` instead.</p>

<h3>13. What is the `dist` folder?</h3>
<p>The `dist` stands for distribution. It's the output folder for your production files. This folder contains the minimized version of the source code that is used in the production web applications.</p>

<h3>14. What is `browserlist`?</h3>
<p>It is a config that helps to specify browsers support for your application by using some queries. Basically, with the help of browserlist we can specify which browser should support our application to run on it.</p>
