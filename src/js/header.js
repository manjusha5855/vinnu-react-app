/*
import React from 'react'

const Header = () => {
  return (
    <div><h1 style={{backgroundColor:'pink'}}>Form</h1></div>
  )
}

export default Header
*/
/*
import React from 'react'

const Header = ({title}) => {
  console.log(title)
  return (
    <div><h1 style={{backgroundColor:'pink'}}>Form</h1></div>
  )
}

export default Header
*/


/*
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to My Website</h1>
    </header>
  );
}

export default Header;

*/

/*
// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
*/

import React from 'react';

const Header = ({ title }) => {
  return (
    <div>
      <h1 style={{ backgroundColor: 'pink' }}>{title}</h1>
    </div>
  );
}

export default Header;
