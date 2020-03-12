import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import react_keycap_index from '../react-keycap/Index';
import spring_oxygen_index from '../spring-oxygen/Index';
import Main from '../main/Main';

export default class Test extends React.Component {

    render() {
        return <Router>
                <Route exact path="/" component={Main} />
                <Route path="/spring-oxygen" component={spring_oxygen_index} />
                <Route path="/react-keycap" component={react_keycap_index} />
        </Router>
    }
}
