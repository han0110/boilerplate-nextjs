// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from '../../shared/routes';

type Props = {
  router: {
    asPath: string,
    pathname: string,
    query: Object,
  }
};

const Navbar = ({ router: { pathname } }: Props) => {
  const links = [
    { id: 'About', route: '/about', prefetch: true },
  ];

  return (
    <div className="navbar__wrapper">
      <div className="navbar__links">
        {
          links.map(({ id, route, prefetch }) => (
            <Link route={route} key={id} prefetch={prefetch} >
              <a className="navbar__link" data-active={route === pathname}>
                {id}
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;
