import React from 'react';
import styled, { css } from 'styled-components';
import { SIZES } from './Text';
import { Link } from './Link';

const ListItem = styled.li`
  display: inline;
  ${SIZES['xl']};
`;

const List = styled.ul(({ column }) => [
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

    ${ListItem} + ${ListItem} {
      margin-top: var(--spacing-massive);
      margin-left: 0;
    }
  `,
]);

export const Navigation = styled(({ column = false, ...props }) => (
  <nav aria-label="Main" {...props}>
    <List column={column}>
      <ListItem>
        <Link to="/blog">Blog</Link>
      </ListItem>
      <ListItem>
        <Link to="/cv">CV</Link>
      </ListItem>
    </List>
  </nav>
))``;
