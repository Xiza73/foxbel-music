import React from 'react';
import { Link } from 'react-router-dom';


import './sass/navigation-bar.scss';

class NavigationBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: [],
            catalog_key: "123"
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
                        {
                            this.state.data.map(playlist => (
                                <div key={playlist.id} onClick={this.reload}>
                                    <Link 
                                        to={{
                                            pathname: "/catalog",
                                            id: playlist.id,
                                            key: this.state.catalog_key
                                        }}
                                    >
                                        <p>{playlist.title}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }

    reload = () => {
        this.setState({
            catalog_key: Math.random().toString()
        })
    }

    fetchPlaylists = async () => {
        try{
            const response = await fetch(`https://api.deezer.com/user/${this.props.user}/playlists`);
            const d = await response.json();
            const data = []
            for(const playlist in d.data){
                data.push(d.data[playlist])
            }
            this.setState({
                loading: false,
                data: data
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