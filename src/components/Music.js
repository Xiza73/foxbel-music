import React from 'react';

import './sass/music.scss';

class Music extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <div className="music_container">
                    <div className="music--cover">
                        <i className="fas fa-play"></i>
                    </div>
                    <div className="music--details">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.singer}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Music;