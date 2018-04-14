// @flow

import React from 'react';
import type { Node } from 'react';
import { withRouter } from 'next/router';

import Navbar from '../components/Navbar';
import '../styles/style.scss';

type Props = {
  children: Node,
  router: {
    asPath: string,
    pathname: string,
    query: Object,
  }
};

const Layout = ({ children, router }: Props) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { router }));

  return (
    <div className="layout__wrapper">
      <Navbar router={router} />
      <div className="layout__children">{childrenWithProps}</div>
    </div>
  );
};

export default withRouter(Layout);
