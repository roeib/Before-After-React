
# Before-After-React

BeforeAfter is a Javascript library to compare images in before/after view.

## Installation

BeforeAfter is available as the `before-after-react` package on <a href="https://www.npmjs.com/package/before-after-react" title="npm before-after-react">npm</a>.

```
npm install before-after-react --save
```

## Demo

<p align="middle">
  <img height="250" src="https://media.giphy.com/media/VCthO4XW9j9p36pFjJ/giphy.gif" />
</p>

## Live Demo
<a href="https://codesandbox.io/s/u9p0s" title="beforeafterreact-sandbox" target="_blank">Before-After-React Sandbox- live demo</a>

### Basic usage

Import the component from node_modules 
and just add it to your JSX even without any props the component still works.
The component has default images.
```javascript
import React from 'react';
import BeforeAfterReact from 'before-after-react'

function App() {
  return (
    <BeforeAfterReact/>
  );
}

export default App;


```
##Props
The component can get:
* `firstImgSrc` - {String} - image src
* `secondImgSrc` - {String} -image src
* `containerClass` - {String} - add your own class to the container
* `cursor` - {String} - a valid css cursor value
* `vertical` - {Boolean} - default is false
* `seperatorImg` - {String} - image src


## Callback functions

There is no callback function available with BeforeAfterReact.

### After install the library


```javascript
import React from 'react';
import BeforeAfterReact from 'before-after-react'

function App() {
  return (
    <BeforeAfterReact
     firstImgSrc="https://upload.wikimedia.org/wikipedia/commons/6/6a/Gallet_clamshell_600x600_1.jpg" 
     secondImgSrc="https://upload.wikimedia.org/wikipedia/commons/2/21/Gallet_clamshell_600x600_7.jpg"
     cursor="pointer"
     containerClass="add-my-class"
     />
  );
}

export default App;

});
```

