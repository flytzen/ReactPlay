import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Header from "./header.jsx";
import Clients from "./clients.jsx";
import Sites from "./sites.jsx";
import Properties from "./properties.jsx";
import { connect } from 'react-redux';
import {fetchClients} from './actions';

class SiteManager extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <div>
            <div className="left">
            // Do conditional rendering here on clients, i.e. isFetching...
                <Clients clientList={this.props.clients.items}/>
                <Sites/>
            </div>
            <div className="payload">
                <Properties/>
            </div>
        </div>
    );
  }
  
  componentDidMount() {
      console.log("in did mount");
      this.props.dispatch(fetchClients()); // This should be changed to fetchIfRequired...
      console.log("finished did mount");
  }
  

}

SiteManager.propTypes = {
    clients: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
}

const mapStateToProps = state => {
    return { clients : state.clients };
}

export default connect(mapStateToProps)(SiteManager);