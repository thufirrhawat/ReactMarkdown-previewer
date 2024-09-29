import React, { useState } from 'react';
import Editor from "./Editor";
import Preview from "./Preview";
import './App.css';

function App() {
  // Initialize the `text` state with default Markdown content
  const [text, setText] = useState(`# Heading Element (H1 Size)

## Subheading Element (H2 Size)

Here is a link to [Another React Practice Project](https://thufirrhawat.github.io/reactDrumMachine/).

Here is some inline code: \`const x = 10;\`

\`\`\`
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![Sample Image](https://via.placeholder.com/150)

**This text is bolded.**`);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <>
    <h1 className='header-2'>Nürü's Markdown Previewer</h1>
      <div className="content">
        <Editor text={text} onTextChange={handleTextChange} />
        <Preview text={text} />
      </div>
    </>
  );
}

export default App;
