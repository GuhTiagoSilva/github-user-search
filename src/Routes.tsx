import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Search/Profile';
const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search" >
                    <Search />
                    <Profile/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;