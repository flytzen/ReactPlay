import * as React from 'react';
import { Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import Header from "../components/header";
import ClientList from "../components/clientList";
import Sites from "../components/sites";
import Properties from "../components/properties";
import {fetchClients} from '../actions/clientActions';
import { EntitySet } from '../rootStore';
import Client from '../entities/client';
import { RootState } from "../rootStore";
import './siteManager.scss';

export interface SiteManagerProps {
    clients : EntitySet<Client>,
    dispatch : Dispatch<RootState>
}

class SiteManager extends React.Component<SiteManagerProps, {}> {
    
  render() {
    return (
        <div className="siteManagerContainer">
            <div className="siteManagerLeft">
                <ClientList clientList={this.props.clients.items}/>
                <Sites siteList = {[]}/>
            </div>
            <div className="siteManagerRight">
                <Properties propertyList = {[]}/>
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


const mapStateToProps = (state : RootState)  => {
    return { clients : state.entities.clients };
}

export default connect(mapStateToProps)(SiteManager);