import React from 'react';

import './sass/control-bar.scss';

class ControlBar extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <div className="control_bar--container">
                    <div className="control_bar--music">
                        <div className="music--cover"></div>
                        <div className="music--info">
                            <h1>Rosas</h1>
                            <p>La Oreja de Van Gogh</p>
                        </div>
                    </div>
                    <div className="control_bar--controls">
                        <i className="fas fa-step-backward"></i>
                        <i className="fas fa-play-circle"></i>
                        <i className="fas fa-step-forward"></i>
                    </div>
                    <div className="control_bar--volume">
                        <div className="volume--bar">
                            <div className="bar">
                                <div className="dot"></div>
                            </div>
                        </div>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ControlBar;