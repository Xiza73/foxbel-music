import React from 'react';

import './sass/navigation-bar.scss';

class NavigationBar extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <div className="foxbel--container">
                    <div className="foxbel_music-icon"></div>
                    <div className="foxbel_option--container">
                        <h1>Mi Librería</h1>
                        <p>Recientes</p>
                        <p>Artistas</p>
                        <p>Álbums</p>
                        <p>Canciones</p>
                        <p>Estaciones</p>
                    </div>
                    <div className="foxbel_option--container">
                        <h1>Playlist</h1>
                        <p>Metal</p>
                        <p>Rock</p>
                        <p>Pop</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NavigationBar;