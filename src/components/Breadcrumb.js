import React, { useState, useRef, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { BreadcrumbContext } from '../contexts/breadcrumb';

const Items = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const Item = styled.li`
  display: inline;

  & + &::before {
    content: '';
    display: inline-block;
    transform: rotate(15deg);
    border-right: 1px solid currentColor;
    height: 1em;
    margin: 0 8px -0.2em;
  }
`;

const ItemLink = styled(Link)`
  color: var(--color-cadetBlue);
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: currentColor;
  }

  &.active {
    border: none;
    color: inherit;
  }
`;

export const BreadcrumbProvider = ({ children }) => {
  const portalState = useState(null);

  return (
    <BreadcrumbContext.Provider value={portalState}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const BreadcrumbPortal = ({ children }) => {
  const portalNodeRef = useRef();
  const [, setPortalNode] = useContext(BreadcrumbContext);

  useEffect(() => {
    setPortalNode(portalNodeRef.current);
  }, [setPortalNode]);

  return (
    <nav aria-label="Breadcrumb">
      <Items ref={portalNodeRef} />
    </nav>
  );
};

export const Breadcrumb = ({ children, to, ...props }) => {
  const [portalNode] = useContext(BreadcrumbContext);

  if (!portalNode) {
    return null;
  }

  return createPortal(
    <Item {...props}>
      <ItemLink to={to}>{children}</ItemLink>
    </Item>,
    portalNode,
  );
};
