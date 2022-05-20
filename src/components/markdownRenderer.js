import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Link from "./link";

const HrComponent = styled.hr`
  background: ${({ theme }) => theme.color.secondary};
  margin-bottom: 1rem;
`;

const LinkComponent = ({ href, title, children }) => (
  <Link href={href} title={title} external={href.indexOf("/") !== 0}>
    {children}
  </Link>
);

const MarkdownRenderer = ({ source }) => {
  return (
    <ReactMarkdown
      components={{
        link: LinkComponent,
        hr: HrComponent
      }}
    >
      {source}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
