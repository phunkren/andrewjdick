import React from "react";
import { SOCIAL_LINKS } from "../../constants.js";
import { GitHubIcon, MediumIcon, TwitterIcon, LinkedInIcon } from "../icons";
import { SocialLinks, SocialLink } from "./styles";

const iconProps = {
  width: "1.8em",
  height: "1.8em"
};

export const Social = props => {
  const { github, medium, twitter, linkedIn } = SOCIAL_LINKS;

  return (
    <SocialLinks {...props}>
      <SocialLink
        href={github.url}
        alt={github.label}
        aria-label={github.label}
        title={github.label}
      >
        <GitHubIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={medium.url}
        alt={medium.label}
        aria-label={medium.label}
        title={medium.label}
      >
        <MediumIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={twitter.url}
        alt={twitter.label}
        aria-label={twitter.label}
        title={twitter.label}
      >
        <TwitterIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={linkedIn.url}
        alt={linkedIn.label}
        aria-label={linkedIn.label}
        title={linkedIn.label}
      >
        <LinkedInIcon {...iconProps} />
      </SocialLink>
    </SocialLinks>
  );
};
