import * as React from 'react'; // TODO: How do I import Component as well so I don't have to prefix it?'

import Client from "../entities/client";
export interface ClientDetailProps {
    client : Client
}

class ClientDetail extends React.Component<ClientDetailProps, {}> {
    render() {
        return (
            <div className="card">
                <span>{this.props.client.name}</span>
            </div>
        );
    }
}

export default ClientDetail;
