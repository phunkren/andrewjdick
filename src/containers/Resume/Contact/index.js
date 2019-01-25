import React from "react";
import { EmailIcon, GitHubIcon, LinkedInIcon, TelephoneIcon } from "components/icons";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "constants.js";
import { List, ListItem, Link, Text } from "./styles";

const iconProps = {
  width: "2em",
  height: "2em"
};

export const Contact = () => (
  <List>
    <Link href={`mailto:${CONTACT_DETAILS.email}`} target="_blank">
      <ListItem>
        <EmailIcon {...iconProps} />
        <Text>{CONTACT_DETAILS.email}</Text>
      </ListItem>
    </Link>
    <Link href={`tel:${CONTACT_DETAILS.tel}`} target="_blank">
      <ListItem>
        <TelephoneIcon {...iconProps} />
        <Text>{CONTACT_DETAILS.tel}</Text>
      </ListItem>
    </Link>
    <Link href={SOCIAL_LINKS.github.url} target="_blank">
      <ListItem>
        <GitHubIcon {...iconProps} />
        <Text>{SOCIAL_LINKS.github.handle}</Text>
      </ListItem>
    </Link>
    <Link href={SOCIAL_LINKS.linkedIn.url} target="_blank">
      <ListItem>
        <LinkedInIcon {...iconProps} />
        <Text>{SOCIAL_LINKS.linkedIn.handle}</Text>
      </ListItem>
    </Link>
  </List>
);
