import React from "react";
import { GitHubIcon } from "components/icons/GitHubIcon";
import { MediumIcon } from "components/icons/MediumIcon";
import { TwitterIcon } from "components/icons/TwitterIcon";
import { LinkedInIcon } from "components/icons/LinkedInIcon";
import { SocialLinks, SocialLink } from "./styles";

export const SOCIAL_LINKS = {
  github: "https://github.com/andrewjdick",
  linkedIn: "https://www.linkedin.com/in/andrewjdick/",
  medium: "https://medium.com/@andrewjd_ck",
  twitter: "https://twitter.com/andrewjd_ck"
};

const iconProps = {
  width: "2.5em",
  height: "2.5em"
};

export const Social = () => (
  <SocialLinks>
    <SocialLink href={SOCIAL_LINKS.github} target="_blank">
      <GitHubIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.medium} target="_blank">
      <MediumIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.twitter} target="_blank">
      <TwitterIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.linkedIn} target="_blank">
      <LinkedInIcon {...iconProps} />
    </SocialLink>
  </SocialLinks>
);
