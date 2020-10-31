import React from 'react';
import styled, { css } from 'styled-components';
import { SIZES } from './Text';
import { Link } from './Link';

const ListItem = styled.li`
  display: inline;
  ${SIZES['l']};
`;

const List = styled.ul(({ theme, column }) => [
  css`
  display: flex;
  flex-flow: row;

  ${ListItem} + ${ListItem} {
    margin-top: 0;
    margin-left: var(--spacing-massive);
  }
`,
  column &&
    css`
    flex-flow: column;

    ${ListItem} > ${Link} {
      display: block;
      padding: var(--spacing-large) 0;
    }

    ${ListItem} + ${ListItem} {
      margin-left: 0;
    }
  `,
]);

export const Navigation = styled(
  ({ column = false, onLinkClick, ...props }) => (
    <nav aria-label="Main" css="color: var(--color-white);" {...props}>
      <List column={column}>
        <ListItem>
          <Link to="/blog" onClick={onLinkClick}>
            Blog
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/cv" onClick={onLinkClick}>
            CV
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact" onClick={onLinkClick}>
            Contact
          </Link>
        </ListItem>
      </List>
    </nav>
  ),
)``;
