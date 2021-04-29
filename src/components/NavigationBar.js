import React from 'react';
import { Link } from 'react-router-dom';


import './sass/navigation-bar.scss';

class NavigationBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: []
        };
    }

    componentDidMount(){
        this.fetchPlaylists();
    }

    render(){
        return(
            <React.Fragment>
                <div className="foxbel--container">
                    <div className="foxbel_music-icon"></div>
                    <div className="foxbel_option--container">
                        <h1>Mi Librería</h1>
                        <Link to="/recent"><p>Recientes</p></Link>
                        <Link to="/artist"><p>Artistas</p></Link>
                        <Link to="/album"><p>Álbums</p></Link>
                        <Link to="/track"><p>Canciones</p></Link>
                        <Link to="/station"><p>Estaciones</p></Link>
                    </div>
                    <div className="foxbel_option--container">
                        <h1>Playlist</h1>
                        {this.state.data.map(playlist => (
                            <Link to='/catalog'><p>{playlist}</p></Link>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    fetchPlaylists = async () => {
        try{
            const response = await fetch(`https://api.deezer.com/user/${this.props.user}/playlists`);
            const data = await response.json();
            console.log(data)
            
            this.setState({
                loading: false,
                data
            })
        }catch(error){
            this.setState({
                loading: false,
                error
            })
            console.log(error)
        }
    }
}

export default NavigationBar;