import React from "react";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  TelephoneIcon
} from "components/icons";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "constants.js";
import { List, ListItem, Text, StyledLink } from "./styles";

const iconProps = {
  width: "2em",
  height: "2em"
};

export const Contact = () => {
  const { email, tel } = CONTACT_DETAILS;
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
        <StyledLink alt="Call me" href={`tel:${tel}`} aria-label="Email me">
          <TelephoneIcon {...iconProps} />
          <Text>{tel}</Text>
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink
          href={github.url}
          alt="GitHub profile"
          aria-label="Email me"
        >
          <GitHubIcon {...iconProps} />
          <Text>{github.handle}</Text>
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink
          href={linkedIn.url}
          alt="LinkedIn profile"
          aria-label="Email me"
        >
          <LinkedInIcon {...iconProps} />
          <Text>{linkedIn.handle}</Text>
        </StyledLink>
      </ListItem>
    </List>
  );
};
