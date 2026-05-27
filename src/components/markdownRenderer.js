import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "./link";

const LinkRenderer = ({ href, title, children }) => (
  <Link href={href} title={title} external={!!href && href.indexOf("/") !== 0}>
    {children}
  </Link>
);

const MarkdownRenderer = ({ source }) => (
  <ReactMarkdown components={{ a: LinkRenderer }}>{source}</ReactMarkdown>
);

export default MarkdownRenderer;
