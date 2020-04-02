import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "./link";


const LinkRenderer = ({ href, title, children }) => (
  <Link
    href={href}
    title={title}
    external={href.indexOf("/") !== 0}
  >
    {children}
  </Link>
);


const MarkdownRenderer = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      link: LinkRenderer
    }}
  />
);

export default MarkdownRenderer;
