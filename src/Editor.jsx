import React from "react";
import './Editor.css';

const Editor = ({ text, onTextChange }) => {
    return (
        <div className="editor-container">
            <h2 className="header-2">Editor</h2>
            <textarea
                className="editor" 
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                id="editor">

            </textarea>
        </div>
    );
}

export default Editor;