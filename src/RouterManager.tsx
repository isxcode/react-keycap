import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import home from "./home/Home";
import spring_oxygen_index from "./spring-oxygen/Index";
import react_keycap_index from "./react-keycap/Index";

export default class RouterManager extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={home} />
				<Route path="/spring-oxygen" component={spring_oxygen_index} />
				<Route path="/react-keycap" component={react_keycap_index} />
			</BrowserRouter>
		);
	}
}
