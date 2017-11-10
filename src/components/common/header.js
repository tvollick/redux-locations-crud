import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/locations" activeClassName="active">Locations</Link>
      {" | "}
      <Link to="/location" activeClassName="active">Create Location</Link>
    </nav>
  );
};

export default Header;
