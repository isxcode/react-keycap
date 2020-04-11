import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button/button';

let i = 1;

export default class Main extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			index: i,
		};
	}

	plusOne = () => {
		i++;
		console.log('ceshi点击事件' + i);
		this.setState({ index: i });
	};

	render(): React.ReactNode {
		return <Button onClick={this.plusOne}>{this.state.index}</Button>;
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
