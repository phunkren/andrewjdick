import styled from "styled-components";
import { Link } from "components/Link";
import { media } from "media.js";

export const StyledLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const List = styled.ul`
  display: none;

  ${media.tablet`
    display: block;
  `};
`;

export const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;

  &:not(:first-child) {
    margin-left: 1em;
  }
`;
