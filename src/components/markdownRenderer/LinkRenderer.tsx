import React from "react";
import { ExtraProps } from "react-markdown";
import { Link } from "../common";

const LinkRenderer = ({
  href,
  title,
  children
}: React.ComponentProps<"a"> & ExtraProps) => (
  <Link
    href={href ?? ""}
    title={title}
    external={!!href && href.indexOf("/") !== 0}
  >
    {children}
  </Link>
);

export default LinkRenderer;
