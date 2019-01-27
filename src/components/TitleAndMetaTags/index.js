import React from "react";
import { Helmet } from "react-helmet";
import profileImage from "assets/images/profileImage.jpg";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "constants.js";

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
  url: "https://andrewjdick.co.uk/",
  pathname: ".",
  title: `${CONTACT_DETAILS.position}`,
  description: `${CONTACT_DETAILS.position} working in ${
    CONTACT_DETAILS.location
  }`,
  image: profileImage
};
