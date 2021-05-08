import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* COMPONENTS */
import Layout from './Layout';
import NotFound from './NotFound';
import CatalogContainer from '../pages/CatalogContainer';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/catalog" />
                    </Route> 
                    <Route exact path="/catalog" component={(props) => <CatalogContainer {...props}/>} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;