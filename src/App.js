import './App.css';
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage/ListPage.js';
import CreatePage from './CreatePage/CreatePage.js';
import EditPage from './EditPage/EditPage.js';
import Navigation from './Navigation/Navigation';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Navigation />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        <Route 
                          path="/edit/:myId" 
                          exact
                          render={(routerProps) => <EditPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

// export default App;
