import React from 'react';

import './sass/search-bar.scss';

class SearchBar extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <div className="search_container">
                    <div className="search_input">
                        <input type="text" placeholder="Buscar..."/>
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="user_data">
                        <i className="fas fa-user"></i>
                        <p>@Xiza73</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;