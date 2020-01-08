import React from "react";
import { Helmet } from "react-helmet";
import { COLORS } from "../../styles/colors";
import { SITE_URL, CONTACT_DETAILS, SOCIAL_LINKS } from "../../constants";

// 🚧
export const TitleAndMetaTags = ({
  url,
  pathname,
  title,
  description,
  image
}) => (
  <Helmet>
    <title>
      {CONTACT_DETAILS.name} | {title}
    </title>

    <meta name="theme-color" content={COLORS.black} />
    <meta name="Description" content={description} />

    <meta property="og:url" content={`${url}${pathname}`} />
    <meta property="og:image" content={`${url}${image}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta name="twitter:url" content={`${url}${pathname}`} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={SOCIAL_LINKS.twitter.handle} />
    <meta name="twitter:creator" content={SOCIAL_LINKS.twitter.handle} />
  </Helmet>
);

TitleAndMetaTags.defaultProps = {
  url: `${SITE_URL}`,
  pathname: ".",
  title: `${CONTACT_DETAILS.position}`,
  description: `${CONTACT_DETAILS.position} working in ${CONTACT_DETAILS.location}`,
  image: "profileImage.jpg"
};
