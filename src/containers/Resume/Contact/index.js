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

export const Contact = () => (
  <List>
    <ListItem>
      <ExternalLink alt="Email me" href={`mailto:${CONTACT_DETAILS.email}`}>
        <EmailIcon {...iconProps} />
        <Text>{CONTACT_DETAILS.email}</Text>
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink alt="Call me" href={`tel:${CONTACT_DETAILS.tel}`}>
        <TelephoneIcon {...iconProps} />
        <Text>{CONTACT_DETAILS.tel}</Text>
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink alt="Github profile" href={SOCIAL_LINKS.github.url}>
        <GitHubIcon {...iconProps} />
        <Text>{SOCIAL_LINKS.github.handle}</Text>
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink alt="LinkedIn profile" href={SOCIAL_LINKS.linkedIn.url}>
        <LinkedInIcon {...iconProps} />
        <Text>{SOCIAL_LINKS.linkedIn.handle}</Text>
      </ExternalLink>
    </ListItem>
  </List>
);
