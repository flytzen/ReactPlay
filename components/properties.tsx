import * as React from 'react'; 
import Property from '../entities/property';

export interface PropertiesProps {
    propertyList : Property[];
}

export default class Properties extends React.Component<PropertiesProps, {}> {
    render() {
        return (
            <div>
                TBD
            </div>
        );
    }
}


