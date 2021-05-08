import React from 'react';

import Catalog from '../components/Catalog';

class CatalogContainer extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Catalog key={this.props.location.key} id={this.props.location.id}></Catalog>
            </React.Fragment>
        );
    }
}

export default CatalogContainer;