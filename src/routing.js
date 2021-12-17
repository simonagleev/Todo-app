import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Home} from "./pages/home/home";
import {Settings} from "./pages/settings/settings";
import {NewTask} from "./pages/new-task/new-task";


export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/settings">
                    <Settings />
                </Route>

                <Route path="/new-task">
                    <NewTask />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}