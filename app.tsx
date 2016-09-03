import "babel-polyfill";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SiteManager from './containers/siteManager';
import { Provider } from 'react-redux';
import store from './store';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

// This is probably an abuse of how it should be...
// I think this should really be a root component and inside that I render an app component that has the menu etc
// But I keep the Provider here at the outermost. I think.
ReactDOM.render((
   <div>
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">ICD</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    <Provider store={store}>
    
        <SiteManager/>
      </Provider>
      </div>
), document.getElementById('app'));
