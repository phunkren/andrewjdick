import React from "react";
import { SOCIAL_LINKS } from "../../constants";
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
        aria-label={github.label}
        title={github.label}
      >
        <GitHubIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={medium.url}
        aria-label={medium.label}
        title={medium.label}
      >
        <MediumIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={twitter.url}
        aria-label={twitter.label}
        title={twitter.label}
      >
        <TwitterIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={linkedIn.url}
        aria-label={linkedIn.label}
        title={linkedIn.label}
      >
        <LinkedInIcon {...iconProps} />
      </SocialLink>
    </SocialLinks>
  );
};
