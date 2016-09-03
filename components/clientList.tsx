import * as React from 'react'; 

import Client from "../entities/client";
import ClientDetail from './clientDetail';

export interface ClientListProps {
    clientList : Array<Client>
}

class ClientList extends React.Component<ClientListProps, {}> {  
    
    render() {
        const   clientList  = this.props.clientList;
        return (
            <div>
                {clientList.map(client => 
                    <ClientDetail key={client.id} client={client} />
                    )}
            </div>
        );
    }
}

export default ClientList;