import React from "react";
import ReactMarkdown from "react-markdown-it";

const MarkdownText = ({text}) => {

  return (
    <div>
      <ReactMarkdown 
        source={text} 
      />
    </div>
  );
}

export default MarkdownText