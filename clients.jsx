import React, {Component, PropTypes } from 'react';

class Clients extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { clientList } = this.props;
        return (
            <div>
                {clientList.map(client => 
                    <li>{client.name}</li>
                    )}
            </div>
        );
    }

    
}

Clients.propTypes = {
    clientList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
    })).isRequired
};

export default Clients;