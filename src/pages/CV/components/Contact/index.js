import React from "react";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  GlobeIcon
} from "components/icons";
import { CONTACT_DETAILS, SOCIAL_LINKS, SITE_URL } from "constants.js";
import { List, ListItem, Text, StyledLink, StyledExternalLink } from "./styles";

const iconProps = {
  width: "2em",
  height: "2em"
};

export const Contact = () => {
  const { email } = CONTACT_DETAILS;
  const { github, linkedIn } = SOCIAL_LINKS;

  return (
    <List>
      <ListItem>
        <StyledLink
          href={`mailto:${email}`}
          alt="Email me"
          aria-label="Email me"
        >
          <EmailIcon {...iconProps} />
          <Text>{email}</Text>
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledExternalLink
          href={SITE_URL}
          alt="Personal website"
          aria-label="Personal website"
        >
          <GlobeIcon {...iconProps} />
          <Text>ajames.dev</Text>
        </StyledExternalLink>
      </ListItem>
      <ListItem>
        <StyledExternalLink
          href={github.url}
          alt="GitHub profile"
          aria-label="Email me"
        >
          <GitHubIcon {...iconProps} />
          <Text>{github.handle}</Text>
        </StyledExternalLink>
      </ListItem>
      <ListItem>
        <StyledExternalLink
          href={linkedIn.url}
          alt="LinkedIn profile"
          aria-label="Email me"
        >
          <LinkedInIcon {...iconProps} />
          <Text>{linkedIn.handle}</Text>
        </StyledExternalLink>
      </ListItem>
    </List>
  );
};
