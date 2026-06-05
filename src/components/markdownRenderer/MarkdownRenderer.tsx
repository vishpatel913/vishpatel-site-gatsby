import React from "react";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";

type Props = {
  source?: string;
};
const MarkdownRenderer = ({ source }: Props) => (
  <ReactMarkdown components={{ a: LinkRenderer }}>{source}</ReactMarkdown>
);

export default MarkdownRenderer;
