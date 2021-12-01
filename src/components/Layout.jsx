import React from 'react';

/*Components*/
import ControlBar from './ControlBar';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';

class Layout extends React.Component{
    render(){
        if (!localStorage.getItem("token")) 
            return (
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
            ) 
        return (
            <React.Fragment>
                <div className="upper_content">
                    <div className="sidebar">
                        <NavigationBar user={this.state.user}></NavigationBar>
                    </div>
                    <div className="main_content">
                        <nav>
                            <SearchBar></SearchBar>
                        </nav>
                        <main>
                            {this.props.children}
                        </main>
                    </div>
                </div>
                <footer>
                    <ControlBar></ControlBar>
                </footer>
            </React.Fragment>
        );
    }
}

export default Layout;