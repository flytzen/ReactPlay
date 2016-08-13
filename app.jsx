import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import SiteManager from './siteManager.jsx';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <SiteManager/>
      </Provider>
), document.getElementById('app'));
