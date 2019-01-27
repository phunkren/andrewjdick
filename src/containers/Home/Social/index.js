import React from "react";
import {
  GitHubIcon,
  MediumIcon,
  TwitterIcon,
  LinkedInIcon
} from "components/icons";
import { SOCIAL_LINKS } from "constants.js";
import { SocialLinks, SocialLink } from "./styles";

const iconProps = {
  width: "2.5em",
  height: "2.5em"
};

export const Social = () => {
  const { github, medium, twitter, linkedIn } = SOCIAL_LINKS;

  return (
    <SocialLinks>
      <SocialLink
        href={github.url}
        alt="GitHub profile"
        aria-label="Github profile"
      >
        <GitHubIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={medium.url}
        alt="Medium profile"
        aria-label="Medium profile"
      >
        <MediumIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={twitter.url}
        alt="Twitter profile"
        aria-label="Twitter profile"
      >
        <TwitterIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={linkedIn.url}
        alt="LinkedIn profile"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon {...iconProps} />
      </SocialLink>
    </SocialLinks>
  );
};
