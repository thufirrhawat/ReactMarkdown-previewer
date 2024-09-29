import React from 'react';
import { marked } from 'marked';
import './Preview.css';

const Preview = ({ text }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(text);
    return { __html: rawMarkup };
  };

  return (
    <div className="preview-container">
      <h2 className='header-2'>Preview</h2>
    <div
      className="preview"
      id="preview"
      dangerouslySetInnerHTML={getMarkdownText()}
    />
    </div>
  );
};

export default Preview;
