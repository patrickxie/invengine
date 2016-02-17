import React from 'react';
import Divider from 'material-ui/lib/divider';

import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const style = {
  marginRight: 32,
  marginBottom: 32,
  float: 'left',
  position: 'relative',
  zIndex: 0,
};

const MenuExampleSimple = () => (
  <div>
  <h3>Step 1</h3>
<Divider inset={true}/>
    <Menu style={style}>
      <MenuItem primaryText="Maps" />
      <MenuItem primaryText="Books" />
      <MenuItem primaryText="Flights" />
      <MenuItem primaryText="Apps" />
    </Menu>
    <Menu style={style}>
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help &amp; feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Sign out" />
    </Menu>
  </div>
);

export default MenuExampleSimple;

// import React from 'react'

// export default function Auth() {
//   return <div>And I am Auth!</div>
// }
