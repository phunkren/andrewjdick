import styled from "styled-components";
import { ExternalLink } from "components/Link";

export const SocialLinks = styled.div``;

export const SocialLink = styled(ExternalLink)`
  display: inline-block;

  &:not(:first-child) {
    margin-left: 0.75em;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.2s;
  }
`;
