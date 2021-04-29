import React from 'react';

import Music from './Music';
import MusicDetail from './MusicDetail';

import './sass/catalog.scss';

class Catalog extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <div className="catalog_main--container">
                    <MusicDetail></MusicDetail>
                    <p>Resultados</p>
                    <div className="catalog_musics--container">
                        <Music title={'21'} singer={'Adele'}></Music>
                        <Music title={'When We All Fall Asleep, Where Do We Go?'} singer={'Michael Jackson'}></Music>
                        <Music title={'Who You Are'} singer={'Jessie J'}></Music>
                        <Music title={'The Fear'} singer={'Lily Allen'}></Music>
                        <Music title={'Currents'} singer={'Time Impala'}></Music>
                        <Music title={'22'} singer={'Adele'}></Music>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Catalog;