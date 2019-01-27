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
      <SocialLink alt="GitHub profile" href={github.url}>
        <GitHubIcon {...iconProps} />
      </SocialLink>

      <SocialLink alt="Medium profile" href={medium.url}>
        <MediumIcon {...iconProps} />
      </SocialLink>

      <SocialLink alt="Twitter profile" href={twitter.url}>
        <TwitterIcon {...iconProps} />
      </SocialLink>

      <SocialLink alt="LinkedIn profile" href={linkedIn.url}>
        <LinkedInIcon {...iconProps} />
      </SocialLink>
    </SocialLinks>
  );
};
