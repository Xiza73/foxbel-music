import React from 'react';

import Catalog from '../components/Catalog';

class CatalogContainer extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <Catalog></Catalog>
            </React.Fragment>
        );
    }
}

export default CatalogContainer;