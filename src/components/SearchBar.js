import React from 'react';

import './sass/search-bar.scss';

class SearchBar extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <div className="search_container">
                    <div className="search_input">
                        <input type="text" placeholder="Buscar..."/>
                        <i class="fas fa-search"></i>
                    </div>
                    <i class="fas fa-user"></i>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;