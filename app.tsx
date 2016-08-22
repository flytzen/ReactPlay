import "babel-polyfill";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SiteManager from './containers/siteManager';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
    <Provider store={store}>
        <SiteManager/>
      </Provider>
), document.getElementById('app'));
