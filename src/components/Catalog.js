import React from 'react';

import Music from './Music';
import MusicDetail from './MusicDetail';

import './sass/catalog.scss';

class Catalog extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: []
        };
    }
    
    componentDidMount(){
        this.fetchTracks();
    }

    render(){
        if(!this.props.id) return(
            <p>Selecciona un álbum</p>
        )
        return(
            <React.Fragment>
                <div className="catalog_main--container">
                    <MusicDetail/>
                    <p>Resultados</p>
                    <div className="catalog_musics--container">
                        {
                            this.state.data.map(track => (
                                <div key={track.id}>
                                    <Music 
                                        id={track.id}
                                        title={track.title}
                                        singer={track.artist.name}
                                        preview={track.preview}
                                        cover={track.album.cover}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }

    fetchTracks = async () => {
        try{
            const response = await fetch(`https://api.deezer.com/playlist/${this.props.id}`);
            const data = await response.json();
            this.setState({
                loading: false,
                data: data.tracks.data
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

export default Catalog;