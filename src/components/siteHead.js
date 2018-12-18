import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import GatsbyConfig from "../../gatsby-config";
import { capitalizeString } from "../utils/helpers";
import colors from "../utils/colors";
import icon32 from "../../static/logo/favicon-32.png";

const SiteHead = ({
  title, description, keywords, page
}) => {
  let siteTitle = GatsbyConfig.siteMetadata.title;
  if (title) {
    siteTitle += ` | ${title}`;
  } else if (page && page !== "/") {
    siteTitle += ` | ${capitalizeString(page.split("/").join(" | "))}`;
  }
  const siteDescription = description || "Front-end Development and Design Porfolio";
  const siteKeywords = keywords
    || "front-end, development, design, portfolio, javascript, photoshop, illustrator, react, gatsby, graphql";

  return (
    <Helmet
      title={siteTitle}
      meta={[
        {
          name: "description",
          content: siteDescription
        },
        {
          name: "keywords",
          content: siteKeywords
        },
        {
          name: "author",
          content: "Vish Patel"
        },
        {
          name: "theme-color",
          content: colors.primary
        }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${icon32}` }]}
    >
      <html lang="en" />
    </Helmet>
  );
};

SiteHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  page: PropTypes.string
};

export default SiteHead;
