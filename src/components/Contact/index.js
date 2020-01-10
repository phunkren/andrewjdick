import React from "react";
import { CONTACT_DETAILS, SOCIAL_LINKS, SITE_URL } from "../../constants";
import { Text } from "../../styles/typography";
import { EmailIcon, GitHubIcon, LinkedInIcon, GlobeIcon } from "../icons";
import { List, ListItem, StyledExternalLink } from "./styles";

const iconProps = {
  width: "2rem",
  height: "2rem"
};

export const Contact = () => {
  const { email } = CONTACT_DETAILS;
  const { github, linkedIn } = SOCIAL_LINKS;

  return (
    <List>
      <ListItem>
        <StyledExternalLink href={`mailto:${email}`} aria-label="Email me">
          <EmailIcon {...iconProps} />
          <Text>{email}</Text>
        </StyledExternalLink>
      </ListItem>

      <ListItem>
        <StyledExternalLink href={SITE_URL} aria-label="Personal website">
          <GlobeIcon {...iconProps} />
          <Text>ajames.dev</Text>
        </StyledExternalLink>
      </ListItem>

      <ListItem>
        <StyledExternalLink href={github.url} aria-label="Github profile">
          <GitHubIcon {...iconProps} />
          <Text>{github.handle}</Text>
        </StyledExternalLink>
      </ListItem>

      <ListItem>
        <StyledExternalLink href={linkedIn.url} aria-label="LinkedIn profile">
          <LinkedInIcon {...iconProps} />
          <Text>{linkedIn.handle}</Text>
        </StyledExternalLink>
      </ListItem>
    </List>
  );
};
