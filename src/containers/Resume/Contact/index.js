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
    <ExternalLink href={`mailto:${CONTACT_DETAILS.email}`}>
      <ListItem>
        <EmailIcon {...iconProps} />
        <Text>{CONTACT_DETAILS.email}</Text>
      </ListItem>
    </ExternalLink>
    <ExternalLink href={`tel:${CONTACT_DETAILS.tel}`}>
      <ListItem>
        <TelephoneIcon {...iconProps} />
        <Text>{CONTACT_DETAILS.tel}</Text>
      </ListItem>
    </ExternalLink>
    <ExternalLink href={SOCIAL_LINKS.github.url}>
      <ListItem>
        <GitHubIcon {...iconProps} />
        <Text>{SOCIAL_LINKS.github.handle}</Text>
      </ListItem>
    </ExternalLink>
    <ExternalLink href={SOCIAL_LINKS.linkedIn.url}>
      <ListItem>
        <LinkedInIcon {...iconProps} />
        <Text>{SOCIAL_LINKS.linkedIn.handle}</Text>
      </ListItem>
    </ExternalLink>
  </List>
);
