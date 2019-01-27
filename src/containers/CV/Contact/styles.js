import styled from "styled-components";
import { ExternalLink } from "components/Link";

export const List = styled.ul`
  margin-bottom: 2em;
`;

export const ListItem = styled.li`
  margin-bottom: 1em;
`;

export const Text = styled.span`
  margin-left: 1em;
`;

export const StyledLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
`;
