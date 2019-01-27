import React from "react";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  TelephoneIcon
} from "components/icons";
import { ExternalLink } from "components/Link";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "constants.js";
import { List, ListItem, Text } from "./styles";

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
        <ExternalLink alt="Email me" href={`mailto:${email}`}>
          <EmailIcon {...iconProps} />
          <Text>{email}</Text>
        </ExternalLink>
      </ListItem>
      <ListItem>
        <ExternalLink alt="Call me" href={`tel:${tel}`}>
          <TelephoneIcon {...iconProps} />
          <Text>{tel}</Text>
        </ExternalLink>
      </ListItem>
      <ListItem>
        <ExternalLink alt="GitHub profile" href={github.url}>
          <GitHubIcon {...iconProps} />
          <Text>{github.handle}</Text>
        </ExternalLink>
      </ListItem>
      <ListItem>
        <ExternalLink alt="LinkedIn profile" href={linkedIn.url}>
          <LinkedInIcon {...iconProps} />
          <Text>{linkedIn.handle}</Text>
        </ExternalLink>
      </ListItem>
    </List>
  );
};
