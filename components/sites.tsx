import * as React from 'react'; 
import Site from '../entities/site';

export interface SitesProps {
    siteList : Site[];
}

export default class Sites extends React.Component<SitesProps, {}> {
    render() {
        return (
            <div className="siteList">
                <div className="sectionHeader">Sites</div>
                <div className="card">Site 1</div>
                <div className="card">Site 2</div>
            </div>
        );
    }
}


