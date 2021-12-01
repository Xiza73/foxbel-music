import React from "react";

import Music from "./Music";
import MusicDetail from "./MusicDetail";

import "./sass/catalog.scss";

class Catalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchTracks();
    console.log(this.props);
  }

  render() {
    if (!this.props.user) return <p>Selecciona un álbum</p>;
    return (
      <React.Fragment>
        <div className="catalog_main--container">
          <MusicDetail />
          <p>Resultados</p>
          <div className="catalog_musics--container">
            {this.state.data.map((track) => (
              <div key={track.id}>
                <Music
                  id={track.id}
                  title={track.title}
                  singer={track.artist.name}
                  preview={track.preview}
                  cover={track.album.cover}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  fetchTracks = async () => {
    /*try {
      const prueba = await fetch(
        `https://connect.deezer.com/oauth/access_token.php?app_id=516102&secret=3206a4dde5e68a5292a512c665147824&code=${this.props.code}`,
        {
	        'mode': 'no-cors'
    	}
      );
      console.log(await prueba)
      const d = await prueba.json();
      console.log(d);
    } catch (err) {
      console.log(err);
    }*/
    /*try {
      const response = await fetch(
        `https://api.deezer.com/playlist/${this.props.user}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: data.tracks.data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
      console.log(error);
    }*/
  };
}

export default Catalog;
