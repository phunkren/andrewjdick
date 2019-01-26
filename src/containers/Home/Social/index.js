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

export const Social = () => (
  <SocialLinks>
    <SocialLink href={SOCIAL_LINKS.github.url} target="_blank">
      <GitHubIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.medium.url} target="_blank">
      <MediumIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.twitter.url} target="_blank">
      <TwitterIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.linkedIn.url} target="_blank">
      <LinkedInIcon {...iconProps} />
    </SocialLink>
  </SocialLinks>
);
