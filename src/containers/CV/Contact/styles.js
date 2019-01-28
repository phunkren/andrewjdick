import styled from "styled-components";
import { Link, ExternalLink } from "components/Link";
import {media} from "media.js";

export const List = styled.ul`
  margin-bottom: 2em;
`;

export const ListItem = styled.li`
  margin-bottom: 1em;
`;

export const Text = styled.span`
  margin-left: 1em;
`;

export const StyledExternalLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  ${media.print`
    pointer-events: none;
  `};
`;
