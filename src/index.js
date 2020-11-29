import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import DetailsPage from './components/DetailsPage';
import './styles/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route
                    exact
                    path="/repository/:id"
                    render={({ match }) => (
                        <DetailsPage repositoryId={match.params.id} />
                    )}
                />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
