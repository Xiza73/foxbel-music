import React from 'react';

import Music from './Music';
import MusicDetail from './MusicDetail';

class Catalog extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <MusicDetail></MusicDetail>
                <Music></Music>
            </React.Fragment>
        );
    }
}

export default Catalog;