import React from 'react';

/*Components*/
import ControlBar from './ControlBar';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';

function Layout(props){
    //const children = props.children;
    return (
        <React.Fragment>
            <div className="upper_content">
                <div className="sidebar">
                    <NavigationBar></NavigationBar>
                </div>
                <div className="main_content">
                    <nav>
                        <SearchBar></SearchBar>
                    </nav>
                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
            <footer>
                <ControlBar></ControlBar>
            </footer>
        </React.Fragment>
    );
}

export default Layout;