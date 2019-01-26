import styled from "styled-components";
import { Link } from "components/Link";
import { media } from "media.js";

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;

  &:not(:first-child) {
    margin-left: 1em;
  }
`;

export const List = styled.ul`
  margin-top: 2em;

  ${media.tablet`
    margin-top: 0;
  `};
`;

export const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;
`;
