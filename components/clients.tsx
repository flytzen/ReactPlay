import * as React from 'react'; // TODO: How do I import Component as well so I don't have to prefix it?'

import Client from "../entities/client";

export interface ClientProps {
    clientList : Array<Client>
}

class Clients extends React.Component<ClientProps, {}> {  
    
    render() {
        const   clientList  = this.props.clientList;
        return (
            <div>
                {clientList.map(client => 
                    <li>{client.name}</li>
                    )}
            </div>
        );
    }
}

export default Clients;