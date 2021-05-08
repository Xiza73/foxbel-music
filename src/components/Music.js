import React from 'react';

import './sass/music.scss';

class Music extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }

    render(){
        return(
            <React.Fragment>
                <div className="music_container">
                    <div className="music--cover" style={this.bg()} >
                        <i 
                            className="fas fa-play" 
                            onClick={
                                () => {
                                    this.handleChange()
                                }
                            }
                        >
                        </i>
                        {
                            this.props.preview && (
                                <audio id={this.props.id.toString()} src={this.props.preview}></audio>
                            )
                        }
                    </div>
                    <div className="music--details">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.singer}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    handleChange = () => {
        try{
            const audio = document.getElementById(this.props.id.toString())        
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
        }catch(e){
            console.log("No preview")
        }
    }

    bg = () => {
        return {
            backgroundImage: `url(${this.props.cover})`
        }
    }
}

export default Music;