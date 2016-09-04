import * as React from 'react'; 
import Property from '../entities/property';

export interface PropertiesProps {
    propertyList : Property[];
}

export default class Properties extends React.Component<PropertiesProps, {}> {
    render() {
        return (
            <div>
                <div className="sectionHeader">Properties</div>
                <div className="card">Property 1</div>
                <div className="card">Property 2</div>
                <div className="card">Property 3</div>
            </div>
        );
    }
}


