import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import Auth from './HOC/Auth';
import history from './utils/history';
import Notify from './components/Notify';

function App() {
    const generateRoute = () => {
        return ROUTES.map((route, index) => {
            const Component = route.auth ? Auth : Route;
            return <Component {...route} key={index} />;
        });
    };

    return (
        <>
            <CssBaseline />
            <Router history={history}>
                <Switch>
                    {generateRoute()}
                </Switch>
            </Router>
            <Notify />
        </>
    );
}

export default App;
