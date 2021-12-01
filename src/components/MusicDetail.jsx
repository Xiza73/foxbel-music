import React from 'react';

import './sass/music-detail.scss';

class MusicDetail extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <div className="music__detail--container">
                    <div className="music--cover">
                        <i className="fas fa-play"></i>
                    </div>
                    <div className="music--details">
                        <h1>Adele 21</h1>
                        <div className="parrafs">
                            <p className="p1">Lo mejor de Adele</p>
                            <p className="p2">321, 123 seguidores</p>
                        </div>
                        <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, magni, a et impedit expedita omnis, eum fuga facere dolorum suscipit voluptatibus pariatur commodi harum obcaecati aliquid veniam excepturi quae totam.</p>
                        <div className="buttons">
                            <button className="play_button">Reproducir</button>
                            <button className="follow_button">Seguir</button>
                            <div className="more_button">
                                <i className="fas fa-circle"></i>
                                <i className="fas fa-circle"></i>
                                <i className="fas fa-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MusicDetail;