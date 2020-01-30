import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";

interface IMarkdownArticle {
  file: string;
}

const MarkdownArticle: React.FC<IMarkdownArticle> = (props: IMarkdownArticle) => {
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchText(): Promise<void> {
      const response: Response = await fetch(props.file);
      const myText: string = await response.text();
      setText(myText);
    }
    fetchText();
  }, [props.file]);

  return (
    <div>
      <ReactMarkdown source={text} escapeHtml={false}/>
    </div>
  );
};

export default MarkdownArticle;
